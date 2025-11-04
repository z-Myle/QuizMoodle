import db from "../utils/dbUtils.js";

db.prepare(`
CREATE TABLE IF NOT EXISTS quizzes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  type TEXT,
  category TEXT,
  data TEXT
)
`).run();


export const getAllQuizzes = () => {
  const stmt = db.prepare("SELECT * FROM quizzes");
  return stmt.all();
};

export const createQuiz = (quiz) => {
  const { title, type, data } = quiz;
  const stmt = db.prepare("INSERT INTO quizzes (title, type, data) VALUES (?, ?, ?)");
  const result = stmt.run(title, type, JSON.stringify(data));
  return { id: result.lastInsertRowid, ...quiz };
};

export const deleteQuiz = (id) => {
  const stmt = db.prepare("DELETE FROM quizzes WHERE id = ?");
  return stmt.run(id);
};

export function saveQuiz({ title, type, data, category }) {
  const stmt = db.prepare("INSERT INTO quizzes (title, type, category, data) VALUES (?, ?, ?, ?)");
  const result = stmt.run(title, type, category || "Uncategorized", JSON.stringify(data));
  return { id: result.lastInsertRowid, title, type, category, data };
}
