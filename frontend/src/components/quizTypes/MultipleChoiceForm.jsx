import React, { useState } from "react";

export default function MultipleChoiceForm({ onSave }) {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], correctIndex: 0 },
  ]);

  const addQuestion = () => {
    setQuestions([...questions, { question: "", options: ["", "", "", ""], correctIndex: 0 }]);
  };

  const handleSave = () => {
    onSave({ title, type: "multipleChoice", data: { questions } });
  };

  return (
    <div>
      <h2>Create Multiple Choice Quiz</h2>
      <input
        type="text"
        placeholder="Quiz title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {questions.map((q, qi) => (
        <div key={qi}>
          <input
            type="text"
            placeholder="Question"
            value={q.question}
            onChange={(e) => {
              const copy = [...questions];
              copy[qi].question = e.target.value;
              setQuestions(copy);
            }}
          />
          {q.options.map((opt, oi) => (
            <input
              key={oi}
              type="text"
              placeholder={`Option ${oi + 1}`}
              value={opt}
              onChange={(e) => {
                const copy = [...questions];
                copy[qi].options[oi] = e.target.value;
                setQuestions(copy);
              }}
            />
          ))}
          <label>
            Correct answer:
            <select
              value={q.correctIndex}
              onChange={(e) => {
                const copy = [...questions];
                copy[qi].correctIndex = Number(e.target.value);
                setQuestions(copy);
              }}
            >
              {q.options.map((_, i) => (
                <option key={i} value={i}>
                  {`Option ${i + 1}`}
                </option>
              ))}
            </select>
          </label>
        </div>
      ))}

      <button onClick={addQuestion}>Add Question</button>
      <button onClick={handleSave}>Save Quiz</button>
    </div>
  );
}
