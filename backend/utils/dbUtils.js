import Database from "better-sqlite3";

const db = new Database("./db/quizzes.db");

// Create table if not exists
db.prepare(`
CREATE TABLE IF NOT EXISTS quizzes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  type TEXT,
  category TEXT,
  data TEXT
)
`).run();

// Optional safety: if the table existed before without 'category', add it
try {
  db.prepare("ALTER TABLE quizzes ADD COLUMN category TEXT").run();
  console.log("✅ Added missing 'category' column to quizzes table");
} catch {
  // Ignore if it already exists
}

const info = db.prepare("PRAGMA table_info(quizzes)").all();
console.log("🧠 Table structure:", info);

export default db;
