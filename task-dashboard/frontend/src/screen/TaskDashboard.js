import React, { useEffect, useState } from "react";

const API_BASE = "http://localhost:8080";

export default function TaskDashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [editingId, setEditingId] = useState(null);
  const [filter, setFilter] = useState("All");

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#0f172a",
      color: "white",
      fontFamily: "Arial",
      display: "flex",
      justifyContent: "center",
      paddingTop: "60px",
    },
    container: {
      width: "900px",
      maxWidth: "95%",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "30px",
    },
    title: {
      fontSize: "34px",
      fontWeight: "bold",
    },
    filter: {
      padding: "8px",
      borderRadius: "6px",
      backgroundColor: "#1f2937",
      color: "white",
      border: "none",
    },
    card: {
      backgroundColor: "#111827",
      padding: "30px",
      borderRadius: "18px",
      marginBottom: "40px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
      width: "100%",
    },
    input: {
      width: "100%",
      padding: "14px",
      borderRadius: "10px",
      border: "none",
      backgroundColor: "#1f2937",
      color: "white",
      marginBottom: "16px",
      fontSize: "15px",
    },
    row: {
      display: "flex",
      gap: "12px",
      marginBottom: "16px",
    },
    btn: {
      padding: "14px 22px",
      borderRadius: "10px",
      border: "none",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "16px",
    },
    primary: {
      backgroundColor: "#2563eb",
      color: "white",
    },
    danger: {
      backgroundColor: "#ef4444",
      color: "white",
    },
    taskGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "18px",
    },
    task: {
      padding: "18px",
      borderRadius: "16px",
      color: "white",
      boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "140px",
    },
    actions: {
      marginTop: "12px",
      display: "flex",
      gap: "8px",
    },
  };

  const fetchTasks = async () => {
    const res = await fetch(`${API_BASE}/api/tasks`);
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const submitTask = async () => {
    if (!title.trim()) return;

    const body = { title, description, dueDate, priority };

    if (editingId === null) {
      await fetch(`${API_BASE}/api/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } else {
      await fetch(`${API_BASE}/api/tasks/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    }

    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("Medium");
    setEditingId(null);
    fetchTasks();
  };

  const startEdit = (task) => {
    setTitle(task.title);
    setDescription(task.description || "");
    setDueDate(task.dueDate || "");
    setPriority(task.priority || "Medium");
    setEditingId(task.id);
  };

  const deleteTask = async (id) => {
    await fetch(`${API_BASE}/api/tasks/${id}`, {
      method: "DELETE",
    });
    fetchTasks();
  };

  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter((t) => (t.priority || "Medium") === filter);

  const getTaskColor = (p) => {
    if (p === "Low") return "#065f46";
    if (p === "High") return "#7f1d1d";
    return "#78350f";
  };

  return React.createElement(
    "div",
    { style: styles.page },
    React.createElement(
      "div",
      { style: styles.container },
      [
        // Header
        React.createElement(
          "div",
          { key: "header", style: styles.header },
          [
            React.createElement(
              "div",
              { key: "title", style: styles.title },
              "Task Management Dashboard"
            ),
            React.createElement(
              "select",
              {
                key: "filter",
                style: styles.filter,
                value: filter,
                onChange: (e) => setFilter(e.target.value),
              },
              [
                React.createElement("option", { key: "All" }, "All"),
                React.createElement("option", { key: "Low" }, "Low"),
                React.createElement("option", { key: "Medium" }, "Medium"),
                React.createElement("option", { key: "High" }, "High"),
              ]
            ),
          ]
        ),

        // Form
        React.createElement(
          "div",
          { key: "form", style: styles.card },
          [
            React.createElement("input", {
              key: "title",
              style: styles.input,
              placeholder: "Task title",
              value: title,
              onChange: (e) => setTitle(e.target.value),
            }),
            React.createElement("textarea", {
              key: "desc",
              style: styles.input,
              placeholder: "Description",
              value: description,
              onChange: (e) => setDescription(e.target.value),
            }),
            React.createElement(
              "div",
              { key: "row", style: styles.row },
              [
                React.createElement("input", {
                  key: "date",
                  type: "date",
                  style: styles.input,
                  value: dueDate,
                  onChange: (e) => setDueDate(e.target.value),
                }),
                React.createElement(
                  "select",
                  {
                    key: "priority",
                    style: styles.input,
                    value: priority,
                    onChange: (e) => setPriority(e.target.value),
                  },
                  [
                    React.createElement("option", { key: "Low" }, "Low"),
                    React.createElement("option", { key: "Medium" }, "Medium"),
                    React.createElement("option", { key: "High" }, "High"),
                  ]
                ),
              ]
            ),
            React.createElement(
              "button",
              {
                key: "submit",
                style: { ...styles.btn, ...styles.primary },
                onClick: submitTask,
              },
              editingId === null ? "Add Task" : "Update Task"
            ),
          ]
        ),

        // Task grid
        React.createElement(
          "div",
          { key: "grid", style: styles.taskGrid },
          filteredTasks.map((task) =>
            React.createElement(
              "div",
              {
                key: task.id,
                style: {
                  ...styles.task,
                  backgroundColor: getTaskColor(task.priority),
                },
              },
              [
                React.createElement("strong", { key: "title" }, task.title),
                React.createElement("p", { key: "desc" }, task.description),
                React.createElement("small", { key: "date" }, task.dueDate),
                React.createElement(
                  "div",
                  { key: "actions", style: styles.actions },
                  [
                    React.createElement(
                      "button",
                      {
                        key: "edit",
                        style: styles.btn,
                        onClick: () => startEdit(task),
                      },
                      "Edit"
                    ),
                    React.createElement(
                      "button",
                      {
                        key: "delete",
                        style: { ...styles.btn, ...styles.danger },
                        onClick: () => deleteTask(task.id),
                      },
                      "Delete"
                    ),
                  ]
                ),
              ]
            )
          )
        ),
      ]
    )
  );
}
