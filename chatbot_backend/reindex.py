import os
import json
import faiss
import numpy as np
from sentence_transformers import SentenceTransformer

# ==================================================
# CONFIG
# ==================================================
EMB_MODEL = "all-MiniLM-L6-v2"

DATA_PATHS = [
    "data/ipc.json",
    "data/sample_data.json",
    "data/cpc.json",
    "data/crpc.json",
    "data/ipc1.json",
    "data/ipc_1000_plus.json"
]

INDEX_FILE = "embeddings/legal_index.faiss"
META_FILE = "meta.json"
# ==================================================

# Load model
embedder = SentenceTransformer(EMB_MODEL)

all_texts = []
all_meta = []

def load_json(file_path):
    with open(file_path, "r", encoding="utf8") as f:
        return json.load(f)

print("📂 Loading data from multiple paths...")

for path in DATA_PATHS:

    # CASE 1: Single JSON file
    if os.path.isfile(path) and path.endswith(".json"):
        data = load_json(path)
        source = os.path.basename(path)

        for item in data:
            if "text" not in item:
                continue

            combined_text = f"{item.get('title', '')}\n{item['text']}"

            all_texts.append(combined_text)
            all_meta.append({
                "title": item.get("title", ""),
                "text": item["text"],
                "source": source
            })

    # CASE 2: Directory with JSON files
    elif os.path.isdir(path):
        for file_name in os.listdir(path):
            if not file_name.endswith(".json"):
                continue

            file_path = os.path.join(path, file_name)
            data = load_json(file_path)

            for item in data:
                if "text" not in item:
                    continue

                combined_text = f"{item.get('title', '')}\n{item['text']}"

                all_texts.append(combined_text)
                all_meta.append({
                    "title": item.get("title", ""),
                    "text": item["text"],
                    "source": file_name
                })

    else:
        print(f"⚠️ Skipped invalid path: {path}")

print(f"📄 Total documents loaded: {len(all_texts)}")

if not all_texts:
    raise ValueError("❌ No valid text found. Check your JSON files.")

# ==================================================
# EMBEDDINGS + FAISS
# ==================================================
print("🧠 Generating embeddings...")
embeddings = embedder.encode(
    all_texts,
    convert_to_numpy=True,
    show_progress_bar=True
)

dim = embeddings.shape[1]
index = faiss.IndexFlatL2(dim)
index.add(np.asarray(embeddings, dtype="float32"))

os.makedirs("embeddings", exist_ok=True)
faiss.write_index(index, INDEX_FILE)

# Save metadata
with open(META_FILE, "w", encoding="utf8") as f:
    json.dump(all_meta, f, ensure_ascii=False, indent=2)

print(f"✅ Indexed {len(all_texts)} documents into {INDEX_FILE}")
