# 📋 Ethara — Project & Task Tracker

A modern, full-stack web application for managing projects and tracking tasks with team collaboration features. Built with **React**, **Node.js**, and **MongoDB**.

---

## ✨ Features

### 🔐 Authentication & Security

- **Secure Signup/Login** - User registration with email and password
- **JWT Authentication** - Token-based session management
- **Password Hashing** - bcrypt encryption for data security
- **Role-Based Access** - Admin and Member roles with different permissions

### 📁 Project Management

- **Create Projects** - Start new projects for team collaboration
- **Add Team Members** - Invite team members to projects
- **Project Overview** - View all projects you own or participate in
- **Team Visibility** - See who's on your project

### ✓ Task Management

- **Create Tasks** - Add tasks with title, description, and due dates
- **Task Assignment** - Assign tasks to team members
- **Status Tracking** - Track progress (To Do, In Progress, Done)
- **Due Dates** - Set priorities with deadline tracking
- **Task Details** - Add descriptions to provide context

### 📊 Dashboard & Analytics

- **Task Statistics** - View count of Todo, In Progress, and Done tasks
- **Overdue Tracking** - Identify and prioritize overdue tasks
- **Recent Activity** - See latest tasks at a glance
- **Quick Overview** - Stats cards showing project metrics

### 🎨 User Experience

- **Modern UI** - Professional, clean design system
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Intuitive Navigation** - Sidebar menu with quick navigation
- **Beautiful Components** - Cards, badges, and tables with consistent styling
- **Real-time Feedback** - Loading states and error handling

---

## 🛠️ Tech Stack

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin requests
- **Mongoose** - MongoDB ODM

### Frontend

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **React Router** - Navigation
- **Axios** - HTTP client
- **CSS3** - Custom styling with design system

### Database

- **MongoDB Atlas** - Cloud database (free tier)

---

## 📦 Project Structure

```
ethara/
├── backend/
│   ├── src/
│   │   ├── models/          # MongoDB schemas
│   │   │   ├── User.js
│   │   │   ├── Project.js
│   │   │   └── Task.js
│   │   ├── controllers/     # Business logic
│   │   │   ├── authController.js
│   │   │   ├── projectController.js
│   │   │   └── taskController.js
│   │   ├── routes/          # API endpoints
│   │   │   ├── auth.js
│   │   │   ├── projects.js
│   │   │   └── tasks.js
│   │   ├── middleware/      # Authentication & validation
│   │   │   ├── auth.js
│   │   │   └── roles.js
│   │   ├── config/          # Configuration
│   │   │   └── db.js
│   │   └── index.js         # Server entry point
│   ├── package.json
│   ├── .env.example
│   └── Procfile
│
├── frontend/
│   ├── src/
│   │   ├── pages/           # Page components
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Tasks.jsx
│   │   ├── api.js           # API client
│   │   ├── App.jsx          # Main layout
│   │   ├── main.jsx         # React entry point
│   │   └── index.css        # Design system
│   ├── vite.config.js
│   ├── package.json
│   └── index.html
│
└── Deployment Guides/       # Complete deployment documentation
    ├── DEPLOYMENT_START_HERE.md
    ├── RAILWAY_STEP_BY_STEP.md
    ├── DEPLOYMENT_CHECKLIST.md
    ├── GITHUB_PUSH_GUIDE.md
    └── ... (4 more guides)
```

---

## 🚀 Getting Started (Local Development)

### Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account (free tier)
- Git installed
- Terminal/Command line access

### Backend Setup

1. **Navigate to backend folder:**

   ```bash
   cd backend
   ```

2. **Copy environment template:**

   ```bash
   cp .env.example .env
   ```

3. **Edit `.env` file** with your MongoDB credentials:

   ```
   PORT=4000
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/ethara?retryWrites=true&w=majority
   JWT_SECRET=your_secret_key_here_change_this
   NODE_ENV=development
   ```

4. **Install dependencies:**

   ```bash
   npm install
   ```

5. **Start development server:**

   ```bash
   npm run dev
   ```

   Backend will run on **http://localhost:4000**

### Frontend Setup

1. **Open new terminal, navigate to frontend:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

   Frontend will run on **http://localhost:5173**

### Testing the App

1. Open **http://localhost:5173** in your browser
2. Click **Create Account**
3. Sign up with email and password
4. You're logged in! Start creating projects and tasks

---

## 📚 Key Functionalities

### Authentication Flow

```
Signup → Email & Password → Hashed in DB → JWT Token Generated
   ↓
Login → Email & Password → Verify Against DB → JWT Token Issued
   ↓
Protected Routes → Token Verified → Access Granted
```

### Project & Task Workflow

```
1. Create Project → Provide name & description
2. Add Members → Invite team members by email
3. Create Tasks → Assign to members, set due dates
4. Track Progress → Update status from Todo → Done
5. Monitor Dashboard → View stats and overdue tasks
```

### Role-Based Access

- **Admin** - Full access to all features
- **Member** - Can create and manage tasks in assigned projects

---

## 🔗 API Endpoints

All endpoints require JWT authentication (except signup/login).

### Authentication

- `POST /api/auth/signup` - Create account
- `POST /api/auth/login` - Login and get token

### Projects

- `GET /api/projects` - List user's projects
- `POST /api/projects` - Create new project
- `GET /api/projects/:id` - Get project details
- `POST /api/projects/:id/members` - Add member to project

### Tasks

- `POST /api/tasks` - Create task
- `GET /api/tasks/project/:projectId` - Get project tasks
- `PATCH /api/tasks/:id/status` - Update task status
- `GET /api/tasks/dashboard` - Get dashboard data

---

## 🎯 Use Cases

### For Teams

- Organize team projects
- Assign work to team members
- Track progress in real-time
- Meet deadlines with due date tracking

### For Project Managers

- Oversee multiple projects
- Monitor task completion rates
- Identify bottlenecks (overdue tasks)
- Manage team workload

### For Individual Developers

- Organize personal projects
- Track learning goals
- Build portfolio projects
- Practice full-stack development

---

## 🔒 Security Features

- ✅ **Password Hashing** - bcryptjs for secure password storage
- ✅ **JWT Tokens** - Secure session management
- ✅ **CORS Protection** - Cross-origin request control
- ✅ **Input Validation** - Server-side validation on all endpoints
- ✅ **Environment Variables** - Secrets never hardcoded
- ✅ **Role-Based Access** - Permission checks on protected routes
- ✅ **HTTPS Ready** - Secure communication when deployed

---

## 📱 Responsive Design

- **Desktop** - Full featured interface
- **Tablet** - Optimized layout
- **Mobile** - Touch-friendly navigation
- **All Browsers** - Cross-browser compatible

---

## 🚢 Deployment

For complete deployment instructions to Railway, see:

- **[DEPLOYMENT_START_HERE.md](./DEPLOYMENT_START_HERE.md)** - Overview
- **[RAILWAY_STEP_BY_STEP.md](./RAILWAY_STEP_BY_STEP.md)** - Detailed guide
- **[GITHUB_PUSH_GUIDE.md](./GITHUB_PUSH_GUIDE.md)** - Push to GitHub
- **[DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)** - Verification

---

## 📈 Future Enhancements

Potential features to add:

- Real-time notifications
- File attachments to tasks
- Comments and discussions
- Time tracking
- Task templates
- Advanced filtering and search
- Export reports
- Mobile app (React Native)
- Dark mode
- Email notifications

---

## 👨‍💻 Development

### ESLint & Formatting

```bash
# Format code
npm run format

# Lint check
npm run lint
```

### Building for Production

```bash
cd frontend
npm run build
```

Output will be in `frontend/dist/`

---

## 📝 License

MIT License - Feel free to use this project for learning or commercial purposes.

---

## 🤝 Contributing

This is a personal project. Feel free to fork it for your own use!

---

## 📞 Need Help?

### Local Development Issues

1. Ensure Node.js 18+ is installed
2. Verify MongoDB connection string
3. Check `.env` file has all required variables
4. Clear node_modules: `rm -rf node_modules && npm install`



## ✨ What Makes Ethara Special

- **Production-Ready Code** - Follows best practices
- **Modern Stack** - Latest versions of popular libraries
- **Professional UI** - Design system with consistent styling
- **Comprehensive Docs** - Deployment guides, API reference, troubleshooting
- **Security First** - Passwords hashed, tokens managed safely
- **Scalable Architecture** - Easy to add features and grow
- **Full-Stack Example** - Great learning resource

---

**Built with ❤️ for developers who want to ship projects.**

Start building today! 🚀
