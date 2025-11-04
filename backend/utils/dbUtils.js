import Database from "better-sqlite3";

const db = new Database("./db/quizzes.db");

// Create table if not exists
db.prepare(`
CREATE TABLE IF NOT EXISTS quizzes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  type TEXT,
  data TEXT
)
`).run();

export default db;
