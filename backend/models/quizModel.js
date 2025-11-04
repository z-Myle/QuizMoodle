import db from "../utils/dbUtils.js";

// Get all quizzes
export const getAllQuizzes = () => {
  const stmt = db.prepare("SELECT * FROM quizzes");
  return stmt.all();
};

// Create a new quiz (with category)
export function createQuiz({ title, type, data, category }) {
  const stmt = db.prepare(
    "INSERT INTO quizzes (title, type, category, data) VALUES (?, ?, ?, ?)"
  );
  const result = stmt.run(title, type, category || "Uncategorized", JSON.stringify(data));
  return { id: result.lastInsertRowid, title, type, category, data };
}

// Update existing quiz
export function updateQuiz(id, { title, type, category, data }) {
  const stmt = db.prepare(`
    UPDATE quizzes
    SET title = ?, type = ?, category = ?, data = ?
    WHERE id = ?
  `);
  stmt.run(title, type, category, JSON.stringify(data), id);
  return { id, title, type, category, data };
}

// Delete quiz by ID
export const deleteQuiz = (id) => {
  const stmt = db.prepare("DELETE FROM quizzes WHERE id = ?");
  return stmt.run(id);
};
