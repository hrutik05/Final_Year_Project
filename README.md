# clone repo 
```bash
git clone https://github.com/hrutik05/Final_Year_Project.git
cd Final_Year_Project
```

### frontend setup 
create .env file and put in 
- VITE_API_BASE_URL=http://localhost:4000

```bash
cd frontend
npm install
npm  run dev
```

### chatbot_backend setup
```bash
cd chatbot_backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn server:app --reload --port 8000
```

### backend setup 
create .env file and put this value 
- GEMINI_API_KEY="yours key"
- PYTHON_BACKEND_URL=http://localhost:8000
- VITE_API_BASE_URL=http://localhost:4000/api
- JWT_SECRET="secret-1234"
- JWT_EXPIRES_IN=
- MONGO_URI= "your's url"
- PORT=4000

  ```bash
  cd backend 
  npm install cors express dotenv mongoose helmet morgan rateLimit authRoutes GoogleGenerativeAI nodemon
  nodemon index.js
  ```
  
  
