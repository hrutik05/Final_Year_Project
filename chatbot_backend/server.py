from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import json, faiss, numpy as np
from sentence_transformers import SentenceTransformer
import os, requests
from google.oauth2 import service_account
from google.auth.transport.requests import AuthorizedSession
from google.cloud import aiplatform
import warnings

app = FastAPI(title="Legal Chatbot Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

EMB_MODEL = "all-MiniLM-L6-v2"
embedder = SentenceTransformer(EMB_MODEL)

# env
PROJECT = os.environ.get("GCP_PROJECT")
LOCATION = os.environ.get("GCP_LOCATION", "us-central1")
MODEL = os.environ.get("GEMINI_MODEL", "models/text-bison-001")  # or your Gemini model path

def load_index():
    try:
        index = faiss.read_index("embeddings/legal_index.faiss")
    except Exception as e:
        warnings.warn(f"Failed to load FAISS index: {e}")
        return None, []

    try:
        with open("meta.json", "r", encoding="utf8") as f:
            meta = json.load(f)
    except Exception as e:
        warnings.warn(f"Failed to load meta.json: {e}")
        meta = []

    return index, meta

# Attempt to load index on startup; if it fails, keep server running but return 503 for chat requests
index, meta = load_index()
if index is None:
    print("[WARN] FAISS index not loaded; /chat will return 503 until embeddings are available.")
else:
    try:
        total = getattr(index, 'ntotal', None)
        print(f"[INFO] FAISS index loaded. total vectors: {total}")
    except Exception:
        print("[INFO] FAISS index loaded.")

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/chat")
async def chat(req: Request):
    body = await req.json()
    query = body.get("question", "")

    if index is None:
        return JSONResponse({
            "answer": None,
            "citations": [],
            "disclaimer": "Embeddings not loaded on server. Please check server logs.",
            "error": "embeddings_unavailable",
        }, status_code=503)

    # handle greeting manually
    if query.lower() in ["hi", "hello", "how are you", "who are you"]:
        return {
            "answer": "I am a legal AI chatbot trained on Indian laws and acts. You can ask me about legal sections and rules.",
            "citations": [],
            "disclaimer": "This is for informational purposes only."
        }

    q_emb = embedder.encode([query], convert_to_numpy=True)
    D, I = index.search(np.asarray(q_emb, dtype='float32'), 3)

    # D contains L2 distances for IndexFlatL2; lower = more similar.
    # If the best match distance is above a threshold, treat as "no relevant docs".
    try:
        top_distance = float(D[0][0])
    except Exception:
        top_distance = None

    hits = [meta[idx] for idx in I[0]] if meta else []  # meta is your meta.json list

    # Configurable threshold via env var; default 1.0 (tweak for your dataset/embedder)
    try:
        DIST_THRESHOLD = float(os.environ.get('FAISS_DISTANCE_THRESHOLD', '1.0'))
    except Exception:
        DIST_THRESHOLD = 1.0

    no_relevant_docs = False
    if top_distance is None or top_distance > DIST_THRESHOLD:
        no_relevant_docs = True
    print(f"[DEBUG] top_distance={top_distance}, threshold={DIST_THRESHOLD}, no_relevant_docs={no_relevant_docs}, hits={len(hits)}")
    # Build citation block
    citations_block = "\n".join([f"{h.get('id','?')}: {h.get('text','')[:400].strip()}" for h in hits if isinstance(h, dict)])
    if no_relevant_docs:
        # No good citations found — call Gemini directly without citations.
        prompt = f"""You are a helpful legal assistant. The retrieved database did not contain relevant documents for the user's question. Answer the question directly and be concise.

QUESTION:
{query}

Answer succinctly and clearly. If you cannot answer precisely, say so and suggest how to narrow the question.
"""
    else:
        prompt = f"""You are a helpful legal assistant. Use the citations below to answer the user's question. If you quote law, reference the citation id.

CITATIONS:
{citations_block}

QUESTION:
{query}

Answer succinctly and then list the citations used (ids).
"""

    # Call Gemini
    resp_data = call_gemini(prompt, max_tokens=512)

    # If call_gemini returned a structured error, handle or forward it
    if isinstance(resp_data, dict) and resp_data.get('__error__'):
        status = resp_data.get('__status__', 502)

        # Helper to detect several common env var names used for enabling mock mode
        def dev_mock_enabled():
            for k in ('DEV_MOCK_GEMINI', 'GEMINI_MOCK_TEST', 'GEMINI_MOCK', 'MOCK_GEMINI'):
                if os.environ.get(k, '').lower() in ('1', 'true', 'yes'):
                    return True
            return False

        # If credentials missing and developer opted into mock mode, return a simple mocked answer
        if resp_data.get('__error__') == 'auth_error' and dev_mock_enabled():
            snippets = [h.get('text','').strip() for h in hits if isinstance(h, dict) and h.get('text')]
            mock_answer = (snippets[0] if snippets else "I couldn't find citations, but here's a generic legal summary.")
            return JSONResponse({"answer": f"[MOCK] {mock_answer}", "citations": hits, "disclaimer": "Mock response (dev)"}, status_code=200)

        return JSONResponse({"error": resp_data.get('__error__'), "message": resp_data.get('message')}, status_code=status)
    # Robustly extract answer from resp_data (handle multiple shapes)
    def extract_answer(rd):
        if rd is None:
            return None
        if isinstance(rd, str):
            return rd
        if isinstance(rd, dict):
            # common keys
            for key in ('answer', 'text', 'output', 'result'):
                if key in rd and isinstance(rd[key], str):
                    return rd[key]
            # Vertex/other shapes
            if 'predictions' in rd and isinstance(rd['predictions'], list) and rd['predictions']:
                pred = rd['predictions'][0]
                if isinstance(pred, dict):
                    # try content
                    if 'content' in pred and isinstance(pred['content'], str):
                        return pred['content']
                    if 'text' in pred and isinstance(pred['text'], str):
                        return pred['text']
                    if 'output' in pred:
                        out = pred['output']
                        if isinstance(out, list) and out and isinstance(out[0], dict):
                            return out[0].get('content') or out[0].get('text')
                        if isinstance(out, str):
                            return out
        # fallback to JSON string
        try:
            return json.dumps(rd)[:2000]
        except Exception:
            return str(rd)

    answer = extract_answer(resp_data)

    return JSONResponse({
        "answer": answer,
        "citations": hits,
        "disclaimer": "This is informational only. Not legal advice."
    })

def call_gemini(prompt: str, max_tokens: int = 512, temperature: float = 0.0):
    try:
        session = get_authorized_session()
    except Exception as e:
        # Return a structured error so caller can handle it
        return {"__error__": "auth_error", "message": str(e), "__status__": 501}

    try:
        url = f"https://{LOCATION}-aiplatform.googleapis.com/v1/projects/{PROJECT}/locations/{LOCATION}/publishers/google/models/{MODEL}:predict"
        payload = {
            "instances": [
                {
                    "content": prompt,
                }
            ],
            "parameters": {
                "maxOutputTokens": max_tokens,
                "temperature": temperature
            }
        }
        resp = session.post(url, json=payload)
        resp.raise_for_status()
        data = resp.json()
        return data
    except Exception as e:
        # Surface upstream error in a structured way
        return {"__error__": "upstream_error", "message": str(e), "__status__": getattr(e, 'status_code', 502)}

def get_authorized_session():
    creds = None
    keyfile = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS")
    if keyfile and os.path.exists(keyfile):
        creds = service_account.Credentials.from_service_account_file(
            keyfile, scopes=["https://www.googleapis.com/auth/cloud-platform"]
        )
    else:
        # fallback to ADC
        from google.auth import default
        creds, _ = default(scopes=["https://www.googleapis.com/auth/cloud-platform"])
    authed_session = AuthorizedSession(creds)
    return authed_session

# init Vertex AI (once on startup)
def init_vertex(project: str, location: str):
    aiplatform.init(project=project, location=location)
    # No model object is created here; we call TextGenerationModel (client wrapper) when needed

# Example LLM call wrapper (pseudocode, check your aiplatform SDK version)
def generate_with_gemini(prompt: str, model_name: str = "gemini-1.5-proto", max_output_chars: int = 1000):
    # Using aiplatform.TextGenerationModel - adapt to SDK version
    model = aiplatform.TextGenerationModel.from_pretrained(model_name)
    response = model.predict(prompt, max_output_chars=max_output_chars, temperature=0.0)
    # response may contain one or more generations; extract text
    text = response.text if hasattr(response, "text") else str(response)
    return text
