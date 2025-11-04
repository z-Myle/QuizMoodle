import db from "../utils/dbUtils.js";

db.prepare(`
CREATE TABLE IF NOT EXISTS attempts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  quizId INTEGER,
  score INTEGER,
  timestamp TEXT
)
`).run();

export function saveAttempt(quizId, score) {
  const stmt = db.prepare("INSERT INTO attempts (quizId, score, timestamp) VALUES (?, ?, ?)");
  const result = stmt.run(quizId, score, new Date().toISOString());
  return { id: result.lastInsertRowid, quizId, score };
}

export function getAttempts(quizId) {
  const stmt = db.prepare("SELECT * FROM attempts WHERE quizId = ?");
  return stmt.all(quizId);
}
