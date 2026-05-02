# Railway Deployment - Quick Reference

## 1️⃣ MongoDB Atlas (5 min)

```
1. Go to mongodb.com/cloud/atlas
2. Create free account → Create M0 cluster
3. Create database user (username + password)
4. Allow IP: 0.0.0.0/0
5. Copy connection string → Save as MONGO_URI
```

## 2️⃣ Push to GitHub (2 min)

```bash
git init
git add .
git commit -m "Initial"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ethara.git
git push -u origin main
```

## 3️⃣ Deploy Backend on Railway (5 min)

```
1. Go to railway.app → New Project
2. Deploy from GitHub → Select repository
3. Set Root Directory: backend
4. Wait for deployment
5. Add Environment Variables:
   - PORT=4000
   - MONGO_URI=<from step 1>
   - JWT_SECRET=generate_random_string_here
   - NODE_ENV=production
6. Save & wait for redeploy
7. Get your Railway URL: https://your-backend-url.railway.app
```

## 4️⃣ Deploy Frontend on Vercel (5 min)

```
1. Go to vercel.com → Import project
2. Select GitHub repo
3. Build Settings:
   - Build Command: cd frontend && npm run build
   - Output: frontend/dist
4. Add Environment: VITE_API_BASE=https://your-backend-url.railway.app/api
5. Deploy
6. Get your Vercel URL: https://your-frontend.vercel.app
```

## 5️⃣ Test It!

- Open frontend URL
- Sign up
- Log in
- Create project & task
- Check dashboard

## 🔗 Replace These URLs With Your Actual URLs

```
Backend URL: https://your-backend-url.railway.app
Frontend URL: https://your-frontend.vercel.app
API Base: https://your-backend-url.railway.app/api
```

## ⚠️ Common Issues

| Issue               | Fix                                       |
| ------------------- | ----------------------------------------- |
| Backend 500 error   | Check Railway logs; verify env vars       |
| Frontend blank page | Check console (F12); verify VITE_API_BASE |
| CORS error          | Backend has CORS enabled by default       |
| Can't connect to DB | Verify MongoDB Atlas connection string    |
| 401 Unauthorized    | JWT_SECRET mismatch between requests      |

## 💾 Environment Variables

**Backend (Railway)**

```
PORT=4000
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/ethara?retryWrites=true&w=majority
JWT_SECRET=your_secret_key_12345
NODE_ENV=production
```

**Frontend (Vercel)**

```
VITE_API_BASE=https://your-backend-url/api
```

---

**Total Time**: ~20 minutes ⏱️

Done! Your app is live 🎉
