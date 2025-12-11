import React, { useEffect, useState } from "react";

function Dashboard({ user, onLogout }) {
  const [tasks, setTasks] = useState(0);
  const [messages, setMessages] = useState(0);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/dashboard`)
      .then((res) => res.json())
      .then((data) => {
        setTasks(data.tasksAssigned);
        setMessages(data.messages);
      })
      .catch((err) => console.log("Error:", err));
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