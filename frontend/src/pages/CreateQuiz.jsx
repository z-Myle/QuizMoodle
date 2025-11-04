import React, { useState } from "react";
import axios from "axios";
import MultipleChoiceForm from "../components/quizTypes/MultipleChoiceForm";

export default function CreateQuiz() {
  const [category, setCategory] = useState("");

  const handleSave = async (quiz) => {
    await axios.post("http://localhost:5000/api/quizzes", { ...quiz, category });
    alert("Quiz saved!");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Create Quiz</h1>

      <label>
        Category:
        <input
          type="text"
          placeholder="e.g. Math, History, Science"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            marginLeft: "1rem",
            padding: "0.4rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </label>

      <MultipleChoiceForm onSave={handleSave} />
    </div>
  );
}
