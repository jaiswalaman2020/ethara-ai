import React, { useEffect, useState } from "react";
import api from "../api";

export default function Dashboard() {
  const [data, setData] = useState({
    tasks: [],
    overdue: [],
    counts: { todo: 0, inprogress: 0, done: 0 },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await api.get("/tasks/dashboard");
        setData(res.data);
      } catch (err) {
        console.error(err);
        if (err.response?.status === 401) window.location = "/login";
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading)
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
      </div>
    );

  const getStatusBadge = (status) => {
    const badges = {
      Todo: "badge-primary",
      "In Progress": "badge-warning",
      Done: "badge-success",
    };
    return badges[status] || "badge-primary";
  };

  return (
    <div>
      <h1 style={{ marginBottom: "24px" }}>Dashboard</h1>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">📋 To Do</div>
          <div className="stat-value">{data.counts.todo}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">⚡ In Progress</div>
          <div className="stat-value">{data.counts.inprogress}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">✅ Completed</div>
          <div className="stat-value">{data.counts.done}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">⏰ Overdue</div>
          <div className="stat-value" style={{ color: "var(--danger)" }}>
            {data.overdue.length}
          </div>
        </div>
      </div>

      {/* Overdue Section */}
      {data.overdue.length > 0 && (
        <div
          className="card"
          style={{
            marginBottom: "24px",
            borderLeft: "4px solid var(--danger)",
          }}
        >
          <div className="card-header">
            <h3 style={{ margin: 0 }}>⏰ Overdue Tasks</h3>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table className="table">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Assignee</th>
                  <th>Due Date</th>
                </tr>
              </thead>
              <tbody>
                {data.overdue.map((t) => (
                  <tr key={t._id}>
                    <td>
                      <strong>{t.title}</strong>
                      <p
                        style={{
                          margin: "4px 0 0 0",
                          color: "var(--text-secondary)",
                          fontSize: "12px",
                        }}
                      >
                        {t.description?.substring(0, 60)}...
                      </p>
                    </td>
                    <td>{t.assignee?.name || "Unassigned"}</td>
                    <td>
                      <span className="badge badge-danger">
                        {t.dueDate
                          ? new Date(t.dueDate).toLocaleDateString()
                          : "—"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* All Tasks Section */}
      <div className="card">
        <div className="card-header">
          <h3 style={{ margin: 0 }}>📊 Recent Tasks</h3>
          <span style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
            {data.tasks.length} tasks
          </span>
        </div>

        {data.tasks.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">📭</div>
            <h3>No tasks yet</h3>
            <p>Create your first task to get started</p>
          </div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Assignee</th>
                  <th>Status</th>
                  <th>Due Date</th>
                </tr>
              </thead>
              <tbody>
                {data.tasks.slice(0, 10).map((t) => (
                  <tr key={t._id}>
                    <td>
                      <strong>{t.title}</strong>
                      <p
                        style={{
                          margin: "4px 0 0 0",
                          color: "var(--text-secondary)",
                          fontSize: "12px",
                        }}
                      >
                        {t.description?.substring(0, 50)}...
                      </p>
                    </td>
                    <td>{t.assignee?.name || "—"}</td>
                    <td>
                      <span className={`badge ${getStatusBadge(t.status)}`}>
                        {t.status}
                      </span>
                    </td>
                    <td>
                      {t.dueDate
                        ? new Date(t.dueDate).toLocaleDateString()
                        : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
