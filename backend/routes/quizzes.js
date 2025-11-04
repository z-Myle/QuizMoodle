import express from "express";
import { getAllQuizzes, createQuiz, deleteQuiz, updateQuiz } from "../models/quizModel.js";

const router = express.Router();

// Get all quizzes
router.get("/", (req, res) => {
  try {
    const quizzes = getAllQuizzes();
    res.json(quizzes);
  } catch (err) {
    console.error("Error fetching quizzes:", err);
    res.status(500).json({ error: "Failed to fetch quizzes" });
  }
});

// Create new quiz
router.post("/", (req, res) => {
  try {
    const quiz = createQuiz(req.body);
    res.json(quiz);
  } catch (err) {
    console.error("Error creating quiz:", err);
    res.status(500).json({ error: "Failed to create quiz" });
  }
});

// Update existing quiz
router.put("/:id", (req, res) => {
  try {
    const updated = updateQuiz(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    console.error("Error updating quiz:", err);
    res.status(500).json({ error: "Failed to update quiz" });
  }
});

// Delete quiz
router.delete("/:id", (req, res) => {
  try {
    const result = deleteQuiz(req.params.id);
    res.json(result);
  } catch (err) {
    console.error("Error deleting quiz:", err);
    res.status(500).json({ error: "Failed to delete quiz" });
  }
});

export default router;
