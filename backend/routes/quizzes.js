import express from "express";
import { getAllQuizzes, saveQuiz, deleteQuiz } from "../models/quizModel.js";

const router = express.Router();

// Get all quizzes
router.get("/", (req, res) => {
  res.json(getAllQuizzes());
});

// Create new quiz (with category support)
router.post("/", (req, res) => {
  const quiz = saveQuiz(req.body);
  res.json(quiz);
});

// Delete quiz
router.delete("/:id", (req, res) => {
  res.json(deleteQuiz(req.params.id));
});

export default router;
