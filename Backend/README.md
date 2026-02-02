# LegalAI Backend (Auth)

This is a minimal Node.js + Express backend that provides signup and login endpoints backed by MongoDB. It uses bcrypt for password hashing and JWT for authentication tokens.

Quick start (PowerShell):

1. Copy the example env and edit values:

```powershell
cd "C:\Users\hruti\OneDrive\Desktop\Final Year Project\Backend"
cp .env.example .env
# then edit .env to set MONGO_URI and JWT_SECRET
```

2. Install dependencies and run in dev mode:

```powershell
npm install
npm run dev
```

Endpoints:

- POST /api/auth/signup
  - body: { fullName, email, phone, password }
  - returns: { user, token }

- POST /api/auth/login
  - body: { email, password }
  - returns: { user, token }

Notes:
- This is intentionally minimal. In production you should:
  - Use HTTPS
  - Use stronger logging and metrics
  - Rotate and protect the JWT secret
  - Add email verification
  - Add account lockout after repeated failures
