import React, { useEffect, useState } from "react";

function Dashboard({ user = "User", onLogout }) {
  const [tasks, setTasks] = useState(0);
  const [messages, setMessages] = useState(0);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/dashboard`)
      .then((res) => {
        if (!res.ok) throw new Error(`Status ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setTasks(data.tasksAssigned ?? 0);
        setMessages(data.messages ?? 0);
      })
      .catch((err) => {
        console.error("Dashboard fetch error:", err);
        setTasks(0);
        setMessages(0);
      });
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <p>Welcome, {user}</p>

      <button>Tasks Assigned: {tasks}</button>
      <button>Messages: {messages}</button>

      <br /><br />
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;