import React, { useEffect, useState } from "react";
import api from "../api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", description: "" });

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const res = await api.get("/projects");
      setProjects(res.data);
    } catch (err) {
      console.error(err);
      if (err.response?.status === 401) window.location = "/login";
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/projects", formData);
      setFormData({ name: "", description: "" });
      setShowForm(false);
      loadProjects();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to create project");
    }
  };

  if (loading)
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
      </div>
    );

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <h1 style={{ margin: 0 }}>Projects</h1>
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          + New Project
        </button>
      </div>

      {showForm && (
        <div className="card" style={{ marginBottom: "24px" }}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Project Name</label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="e.g. Website Redesign"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Describe your project..."
                rows="4"
              />
            </div>
            <div style={{ display: "flex", gap: "12px" }}>
              <button type="submit" className="btn btn-primary">
                Create Project
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {projects.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">📁</div>
          <h3>No projects yet</h3>
          <p>Create your first project to get started</p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "16px",
          }}
        >
          {projects.map((project) => (
            <div key={project._id} className="card">
              <div className="card-header">
                <h3 style={{ margin: 0 }}>{project.name}</h3>
              </div>
              <p
                style={{ color: "var(--text-secondary)", marginBottom: "12px" }}
              >
                {project.description || "No description"}
              </p>
              <div style={{ display: "flex", gap: "8px" }}>
                <span className="badge badge-primary">
                  {project.members?.length || 0} members
                </span>
                <span className="badge badge-secondary">Owner</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
