import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (!token) {
      navigate("/login");
    } else {
      setUser(userData ? JSON.parse(userData) : null);
      setLoading(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (loading)
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
      </div>
    );

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <h1>✨ Ethara</h1>
        </div>
        <nav className="sidebar-nav">
          <li>
            <Link
              to="/dashboard"
              className={location.pathname === "/dashboard" ? "active" : ""}
            >
              📊 Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={location.pathname === "/projects" ? "active" : ""}
            >
              📁 Projects
            </Link>
          </li>
          <li>
            <Link
              to="/tasks"
              className={location.pathname === "/tasks" ? "active" : ""}
            >
              ✓ Tasks
            </Link>
          </li>
        </nav>
        <div className="sidebar-logout">
          <button
            onClick={handleLogout}
            className="btn btn-secondary btn-sm"
            style={{ width: "100%" }}
          >
            Logout
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header className="header">
          <h2 style={{ margin: 0 }}>Ethara</h2>
          <div className="header-user">
            <span style={{ fontSize: "14px", color: "var(--text-secondary)" }}>
              {user?.name || "User"}
            </span>
            <div className="header-user-avatar">
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </div>
          </div>
        </header>

        <div className="content">
          <Outlet context={{ user, onLogout: handleLogout }} />
        </div>
      </main>
    </div>
  );
}
