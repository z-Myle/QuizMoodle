import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ManageQuizzes() {
  const [quizzes, setQuizzes] = useState([]);
  const [editingQuiz, setEditingQuiz] = useState(null);
  const [form, setForm] = useState({ title: "", category: "", type: "", data: "" });

  // Fetch all quizzes
  useEffect(() => {
    loadQuizzes();
  }, []);

  const loadQuizzes = async () => {
    const res = await axios.get("http://localhost:5000/api/quizzes");
    setQuizzes(res.data);
  };

  // Delete a quiz
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this quiz?")) {
      await axios.delete(`http://localhost:5000/api/quizzes/${id}`);
      loadQuizzes();
    }
  };

  // Start editing
  const handleEdit = (quiz) => {
    setEditingQuiz(quiz.id);
    setForm({
      title: quiz.title,
      category: quiz.category,
      type: quiz.type,
      data: JSON.stringify(JSON.parse(quiz.data), null, 2),
    });
  };

  // Save edited quiz
  const handleSave = async () => {
    await axios.put(`http://localhost:5000/api/quizzes/${editingQuiz}`, {
      ...form,
      data: JSON.parse(form.data),
    });
    setEditingQuiz(null);
    loadQuizzes();
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Manage Quizzes</h1>

      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id} style={{ marginBottom: "1rem" }}>
            <strong>{quiz.title}</strong> ({quiz.category})
            <button onClick={() => handleEdit(quiz)} style={{ marginLeft: "1rem" }}>
              Edit
            </button>
            <button
              onClick={() => handleDelete(quiz.id)}
              style={{ marginLeft: "0.5rem", color: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {editingQuiz && (
        <div style={{ marginTop: "2rem" }}>
          <h3>Edit Quiz</h3>
          <input
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <input
            placeholder="Category"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />
          <textarea
            rows={6}
            cols={60}
            value={form.data}
            onChange={(e) => setForm({ ...form, data: e.target.value })}
          />
          <br />
          <button onClick={handleSave}>💾 Save Changes</button>
          <button onClick={() => setEditingQuiz(null)} style={{ marginLeft: "1rem" }}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
