import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

export default function QuizList() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/quizzes").then((res) => setQuizzes(res.data));
  }, []);

  const grouped = quizzes.reduce((acc, quiz) => {
    const cat = quiz.category || "Uncategorized";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(quiz);
    return acc;
  }, {});

  return (
    <div style={{ padding: "3rem" }}>
      <h1 style={{ textAlign: "center", color: "#a5526c", marginBottom: "2rem" }}>
        My Quizzes
      </h1>

      {Object.keys(grouped).length === 0 ? (
        <p style={{ textAlign: "center", color: "#777" }}>No quizzes yet. Create one!</p>
      ) : (
        Object.keys(grouped).map((category) => (
          <div key={category} style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ color: "#d86b92", borderBottom: "2px solid #f7b8c6", paddingBottom: "0.3rem" }}>
              {category}
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1rem",
              }}
            >
              {grouped[category].map((q) => (
                <Card key={q.id}>
                  <h3 style={{ color: "#a5526c" }}>{q.title}</h3>
                  <p>Type: {q.type}</p>

                  <div style={{ marginTop: "0.8rem", display: "flex", gap: "0.5rem" }}>
                    <Link to={`/quiz/${q.id}`}>
                      <Button>Take</Button>
                    </Link>
                    <Link to={`/quiz/${q.id}/attempts`}>
                      <Button>Scores</Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}