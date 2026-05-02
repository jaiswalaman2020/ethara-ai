# 📋 Railway Deployment Checklist

Use this checklist to ensure everything is ready for deployment.

## ✅ Pre-Deployment

### Code Preparation

- [ ] Code is tested locally and working
- [ ] `.env.example` exists with all required variables
- [ ] `backend/Procfile` exists (contains: `web: npm start`)
- [ ] `backend/package.json` has all dependencies
- [ ] `frontend/.env` has `VITE_API_BASE` configured
- [ ] Git is initialized: `git init`
- [ ] All files are committed: `git add .` and `git commit -m "message"`

---

## ✅ GitHub Setup

- [ ] GitHub account created
- [ ] Repository created: `https://github.com/YOUR_USERNAME/ethara`
- [ ] Code pushed to main branch
  ```bash
  git remote add origin https://github.com/YOUR_USERNAME/ethara.git
  git push -u origin main
  ```
- [ ] GitHub repo is public (or Railway has access)
- [ ] Verify code appears on GitHub (refresh page)

---

## ✅ MongoDB Atlas Setup

- [ ] MongoDB Atlas account created
- [ ] Free M0 cluster created
- [ ] Cluster status: **Active** (green checkmark)
- [ ] Database user created
  - [ ] Username: `ethara_user`
  - [ ] Password: (saved securely)
- [ ] IP Whitelist configured
  - [ ] Includes: `0.0.0.0/0` (for production)
- [ ] Connection string copied
  - Format: `mongodb+srv://ethara_user:PASSWORD@cluster0.xxxxx.mongodb.net/ethara?retryWrites=true&w=majority`
  - [ ] PASSWORD replaced with actual password
  - [ ] `/ethara` at the end (database name)

---

## ✅ Railway Backend Deployment

### Account & Project Setup

- [ ] Railway account created
- [ ] Railway authorized to access GitHub
- [ ] New Railway project created
- [ ] GitHub repository selected and connected

### Build Configuration

- [ ] Root Directory set to: `backend`
- [ ] Build runs successfully (check logs)
- [ ] No build errors in deployment log

### Environment Variables (Railway)

- [ ] `PORT` = `4000`
- [ ] `MONGO_URI` = (MongoDB connection string from Atlas)
- [ ] `JWT_SECRET` = (secure random string)
- [ ] `NODE_ENV` = `production`
- [ ] All variables saved and applied
- [ ] Service redeployed after env vars set

### Verification

- [ ] Deployment status: ✅ **Success**
- [ ] Railway backend domain/URL visible
- [ ] Example URL: `https://ethara-backend-prod.up.railway.app`
- [ ] Test endpoint works:
  ```bash
  curl https://your-railway-url/api/auth/signup \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"name":"Test","email":"test@example.com","password":"pass123"}'
  ```

  - [ ] Returns JSON with `token` and `user` fields

---

## ✅ Frontend Deployment (Vercel)

### Account & Project Setup

- [ ] Vercel account created
- [ ] Vercel authorized to access GitHub
- [ ] GitHub repository imported

### Build Configuration

- [ ] Framework detected: **React**
- [ ] Build Command: `cd frontend && npm run build`
- [ ] Output Directory: `frontend/dist`
- [ ] Install Command: `cd frontend && npm install`
- [ ] Build completes successfully

### Environment Variables (Vercel)

- [ ] `VITE_API_BASE` = `https://your-railway-backend-url/api`
  - [ ] URL doesn't end with trailing slash
  - [ ] Matches your actual Railway backend URL
- [ ] Environment variable saved
- [ ] Project redeployed after env var set

### Verification

- [ ] Deployment status: ✅ **Deployment Complete**
- [ ] Vercel deployment URL visible
- [ ] Example URL: `https://ethara-xxx.vercel.app`
- [ ] Can access frontend in browser (no 404)

---

## ✅ End-to-End Testing

### Frontend Access

- [ ] Frontend loads without errors (F12 console clear)
- [ ] **Sign Up** page displays correctly
- [ ] All UI elements visible (buttons, forms, logo)

### Authentication Flow

- [ ] Can create new account
  - [ ] Fill form with test credentials
  - [ ] Click **Create Account**
  - [ ] No errors in console
- [ ] Redirected to **Dashboard**
- [ ] Can log back out (Logout button visible)

### Core Functionality

- [ ] **Dashboard** page loads
  - [ ] Stats cards visible (Todo, In Progress, Done, Overdue)
  - [ ] No 401/403 errors
- [ ] **Projects** page loads
  - [ ] Can click **+ New Project**
  - [ ] Form appears
  - [ ] Can create project
- [ ] **Tasks** page loads
  - [ ] Can click **+ New Task**
  - [ ] Can create task
  - [ ] Task appears in list

### Data Persistence

- [ ] Refresh page → data still visible
- [ ] Log out → log back in → data still visible
- [ ] Different browser → can log in → see same data

---

## ✅ Troubleshooting Checks

If something isn't working, check:

### Frontend Issues

- [ ] Browser console (F12) for error messages
- [ ] `VITE_API_BASE` environment variable is set on Vercel
- [ ] `VITE_API_BASE` matches Railway backend URL exactly
- [ ] Frontend is redeployed after env var changes

### API/Backend Issues

- [ ] Railway logs show no errors (red text)
- [ ] All Railway environment variables are set
- [ ] `MONGO_URI` includes password correctly
- [ ] MongoDB Atlas connection string is valid
- [ ] IP whitelist on MongoDB includes 0.0.0.0/0

### Database Issues

- [ ] MongoDB Atlas cluster is **Active** (green)
- [ ] Database user exists and is enabled
- [ ] Password contains no special chars that need escaping
- [ ] Connection string has `/ethara` database at the end

---

## ✅ Post-Deployment

### Documentation

- [ ] Saved your Railway backend URL
- [ ] Saved your Vercel frontend URL
- [ ] Saved MongoDB connection details
- [ ] Saved JWT_SECRET (keep secret!)

### Monitoring

- [ ] Checked Railway logs for any warnings
- [ ] Verified Vercel deployment was successful
- [ ] Tested app one more time as a user

### Team Communication

- [ ] Documented URLs for team
- [ ] Shared credentials securely (password manager)
- [ ] Documented environment variables

---

## 🎯 Final Status

When all boxes are checked:

```
✅ Code on GitHub
✅ Backend deployed to Railway
✅ Frontend deployed to Vercel
✅ Database connected (MongoDB Atlas)
✅ All environment variables set
✅ End-to-end testing passed
✅ App is live and working!
```

---

## 📞 If Something Breaks

Check in this order:

1. **Browser console** (F12) for error messages
2. **Railway logs** (Backend Service → Deployments → Logs)
3. **Vercel logs** (Deployments → View Build Logs)
4. **MongoDB Atlas** (check cluster status and connections)
5. **Environment variables** (are they all set correctly?)

Common errors and fixes are in [DEPLOYMENT.md](./DEPLOYMENT.md) troubleshooting section.

---

**You're ready to deploy! 🚀**

If you get stuck, check the [Step-by-Step Guide](./RAILWAY_STEP_BY_STEP.md) or [Quick Reference](./RAILWAY_QUICK_START.md).
