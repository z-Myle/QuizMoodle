import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function QuizAttempts() {
  const { id } = useParams();
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/attempts/${id}`)
      .then((res) => setAttempts(res.data))
      .catch((err) => console.error("Error loading attempts:", err));
  }, [id]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Past Scores for Quiz #{id}</h1>

      {attempts.length === 0 ? (
        <p>No attempts yet. Take the quiz to see your progress!</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f9c5d1" }}>
              <th style={{ padding: "0.5rem", border: "1px solid #ccc" }}>Attempt #</th>
              <th style={{ padding: "0.5rem", border: "1px solid #ccc" }}>Score</th>
              <th style={{ padding: "0.5rem", border: "1px solid #ccc" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {attempts.map((a, index) => (
              <tr key={a.id}>
                <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{index + 1}</td>
                <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{a.score}</td>
                <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                  {new Date(a.timestamp).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div style={{ marginTop: "1rem" }}>
        <Link to={`/quiz/${id}`}>Take Quiz Again</Link> | <Link to="/">Back to All Quizzes</Link>
      </div>
    </div>
  );
}
