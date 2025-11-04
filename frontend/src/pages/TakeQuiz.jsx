import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function TakeQuiz() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/quizzes").then((res) => {
      const found = res.data.find((q) => q.id === parseInt(id));
      if (found) {
        found.data = JSON.parse(found.data);
        setQuiz(found);
      }
    });
  }, [id]);

  if (!quiz) return <p>Loading quiz...</p>;

  const handleAnswer = (qIndex, optionIndex) => {
    setAnswers({ ...answers, [qIndex]: optionIndex });
  };

  const handleSubmit = async () => {
    const correctCount = quiz.data.questions.reduce((acc, q, i) => {
      return acc + (q.correctIndex === answers[i] ? 1 : 0);
    }, 0);
    const total = quiz.data.questions.length;
    const resultScore = Math.round((correctCount / total) * 100);

    await axios.post("http://localhost:5000/api/attempts", {
      quizId: quiz.id,
      score: resultScore,
    });

    setScore(resultScore);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{quiz.title}</h1>
      <p>Category: {quiz.category}</p>
      {quiz.data.questions.map((q, i) => (
        <div key={i} style={{ marginBottom: "1rem" }}>
          <h3>{q.question}</h3>
          {q.options.map((opt, j) => (
            <label key={j} style={{ display: "block" }}>
              <input
                type="radio"
                name={`q-${i}`}
                value={j}
                checked={answers[i] === j}
                onChange={() => handleAnswer(i, j)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}

      <button onClick={handleSubmit} style={{ padding: "0.5rem 1rem" }}>
        Submit Quiz
      </button>

      {score !== null && (
        <p style={{ marginTop: "1rem" }}>
          You scored <strong>{score}%</strong>!
        </p>
      )}
    </div>
  );
}