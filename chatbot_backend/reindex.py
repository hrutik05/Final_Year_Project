import json, faiss, numpy as np
from sentence_transformers import SentenceTransformer

EMB_MODEL = "all-MiniLM-L6-v2"
embedder = SentenceTransformer(EMB_MODEL)

DATA_FILE = "data/sample_data.json"
INDEX_FILE = "embeddings/legal_index.faiss"
META_FILE = "meta.json"

with open(DATA_FILE, "r", encoding="utf8") as f:
    data = json.load(f)

texts = [d["text"] for d in data]
embeddings = embedder.encode(texts, convert_to_numpy=True, show_progress_bar=True)

dim = embeddings.shape[1]
index = faiss.IndexFlatL2(dim)
index.add(np.asarray(embeddings, dtype='float32'))

faiss.write_index(index, INDEX_FILE)
with open(META_FILE, "w", encoding="utf8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"✅ Indexed {len(data)} documents into {INDEX_FILE}")
