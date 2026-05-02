# Ethara — Project & Task Tracker

A modern, full-stack project management application built with **React**, **Node.js**, and **MongoDB**.

## ✨ Features

- 🔐 JWT Authentication (Signup/Login)
- 📁 Project Management
- ✓ Task Creation & Assignment
- 📊 Dashboard with statistics
- 👥 Role-based Access Control
- 🎨 Professional, responsive UI

## 🏃 Quick Start (Local)

### Backend

```bash
cd backend
cp .env.example .env
# Edit .env with MongoDB Atlas URI and JWT secret
npm install
npm run dev
```

Server runs on http://localhost:4000

### Frontend

```bash
cd frontend
npm install
npm run dev
```

App runs on http://localhost:5173

## 🚀 Deployment

**See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete Railway deployment guide**

Quick summary:

1. Deploy backend to Railway (Node.js + Procfile)
2. Deploy frontend to Vercel or Railway (React + Vite)
3. Connect MongoDB Atlas
4. Update environment variables

## 📦 Tech Stack

- **Backend**: Node.js, Express, MongoDB, JWT
- **Frontend**: React 18, Vite, React Router
- **Styling**: Modern CSS with design system
- **Database**: MongoDB Atlas (free tier)

## 🔗 Live Demo

Coming soon...

## 📄 License

MIT
