# Ethara — Project & Task Tracker

Monorepo with backend (Node.js + Express + MongoDB) and frontend (React + Vite).

## Features

- ✅ JWT Authentication (Signup/Login)
- ✅ Project management with members
- ✅ Task creation, assignment & status tracking
- ✅ Real-time dashboard with stats
- ✅ Role-based access (Admin / Member)
- ✅ Modern professional UI with Vite + React

---

## 🏃 Local Development

### Backend Setup

```bash
cd backend
cp .env.example .env
# Edit .env and fill in MONGO_URI and JWT_SECRET
npm install
npm run dev
```

Backend runs on **http://localhost:4000**

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on **http://localhost:5173**

---

## 🚀 Railway Deployment Guide (No Docker)

### Prerequisites

- **Railway Account**: Sign up free at https://railway.app
- **GitHub Repository**: Push this code to GitHub
- **MongoDB Atlas**: Free M0 cluster at https://www.mongodb.com/cloud/atlas

---

### Step 1: MongoDB Atlas Setup

1. Go to **MongoDB Atlas** and create a free account
2. Create a **free M0 cluster**
3. Create a **database user** (note username & password)
4. Add **IP whitelist** (or use 0.0.0.0/0 for any IP)
5. Click **Connect** → **Drivers** → Copy connection string
   ```
   mongodb+srv://username:password@cluster.mongodb.net/ethara?retryWrites=true&w=majority
   ```
6. **Save this string** — use it as `MONGO_URI` in Railway

---

### Step 2: Push Code to GitHub

```bash
cd /path/to/ethara
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ethara.git
git push -u origin main
```

---

### Step 3: Deploy Backend on Railway

1. Go to **https://railway.app** → **+ New Project**
2. Click **Deploy from GitHub**
3. Authorize Railway and select your `ethara` repository
4. Once connected, you'll be asked to configure:
   - **Root Directory**: Set to `backend` (important!)
   - Click **Deploy**

5. Wait for deployment to finish. Once live:
   - Go to **Backend Service** → **Settings**
   - **Add these environment variables**:
     ```
     PORT=4000
     MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/ethara?retryWrites=true&w=majority
     JWT_SECRET=your_secret_key_here_use_a_long_string_12345
     NODE_ENV=production
     ```

6. **Test the backend**:
   - Find your Railway backend URL (e.g., `https://ethara-backend-prod.up.railway.app`)
   - Test the API:
     ```bash
     curl https://your-railway-url/api/auth/signup \
       -X POST \
       -H "Content-Type: application/json" \
       -d '{"name":"Test","email":"test@example.com","password":"password123"}'
     ```
   - You should get a JWT token response

---

### Step 4: Deploy Frontend

You have 2 options:

#### Option A: Vercel (Recommended - Easiest)

1. Go to **https://vercel.com** → Sign up with GitHub
2. Click **+ New Project**
3. Import your GitHub repository
4. In **Build Settings**:
   - **Framework**: React
   - **Build Command**: `cd frontend && npm run build`
   - **Output Directory**: `frontend/dist`
   - **Install Command**: `cd frontend && npm install`

5. Add **Environment Variables**:

   ```
   VITE_API_BASE=https://your-railway-backend-url/api
   ```

   (Replace `your-railway-backend-url` with actual Railway URL from Step 3)

6. Click **Deploy**

#### Option B: Railway (Alternative)

1. In Railway, go to **+ New Service**
2. Select **GitHub** and choose the same repository
3. Configure:
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Start Command**: `npx serve -s dist -l 3000`
   - **Port**: `3000`

4. Add **Environment Variables**:

   ```
   VITE_API_BASE=https://your-railway-backend-url/api
   ```

5. Deploy

---

### Step 5: Verify Deployment

1. Open your **frontend URL** (Vercel or Railway)
2. Sign up with email & password
3. Log in
4. Create a project and task
5. Check dashboard — data should load from backend

---

## 🧪 Testing the Deployment

### Test Signup

```bash
curl https://your-backend-url.railway.app/api/auth/signup \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Test Login

```bash
curl https://your-backend-url.railway.app/api/auth/login \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

---

## 🐛 Troubleshooting

| Issue                      | Solution                                                        |
| -------------------------- | --------------------------------------------------------------- |
| Backend returns 500 errors | Check Railway logs; verify `MONGO_URI` and `JWT_SECRET` are set |
| Frontend shows blank page  | Check browser console (F12); verify `VITE_API_BASE` is correct  |
| CORS errors                | Ensure backend has CORS enabled (it does by default)            |
| Database connection fails  | Verify MongoDB Atlas connection string; check IP whitelist      |
| Frontend API calls fail    | Verify `VITE_API_BASE` matches your Railway backend URL         |

---

## 📝 Environment Variables Summary

### Backend (Railway)

```
PORT=4000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/ethara?retryWrites=true&w=majority
JWT_SECRET=your_secure_secret_string
NODE_ENV=production
```

### Frontend (Vercel/Railway)

```
VITE_API_BASE=https://your-backend.railway.app/api
```

---

## 🔗 API Endpoints

Base URL: `https://your-backend.railway.app/api`

### Authentication

- `POST /auth/signup` — Create account
- `POST /auth/login` — Login

### Projects

- `GET /projects` — List user's projects
- `POST /projects` — Create project
- `POST /projects/:id/members` — Add member (Admin/Member)

### Tasks

- `POST /tasks` — Create task
- `GET /tasks/project/:projectId` — Get project tasks
- `PATCH /tasks/:id/status` — Update task status
- `GET /tasks/dashboard` — Dashboard data (stats, overdue)

---

## 📦 Tech Stack

- **Backend**: Node.js, Express, MongoDB, JWT, bcrypt
- **Frontend**: React, Vite, React Router, Axios
- **Database**: MongoDB Atlas
- **Deployment**: Railway + Vercel/Railway

---

## 🎯 Next Steps

After deployment:

1. Add more pages (task details, project members, settings)
2. Add real-time updates (WebSockets)
3. Implement notifications
4. Add file uploads
5. Add search and filtering
6. Set up CI/CD pipeline

---

## 📄 Notes

- This is a production-ready MVP
- All environment variables must be set correctly for deployment
- MongoDB Atlas free tier is limited to 3 shared clusters
- Railway also has free tier but billing starts after usage limits
- For production, consider upgrading MongoDB Atlas to dedicated cluster

---

Good luck deploying! 🚀
