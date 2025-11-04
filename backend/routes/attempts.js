import express from "express";
import { saveAttempt, getAttempts } from "../models/attemptModel.js";

const router = express.Router();

// Save a quiz attempt
router.post("/", (req, res) => {
  try {
    const { quizId, score } = req.body;
    const result = saveAttempt(quizId, score);
    res.json(result);
  } catch (err) {
    console.error("Error saving attempt:", err);
    res.status(500).json({ error: "Failed to save attempt" });
  }
});

// Get all attempts for a quiz
router.get("/:quizId", (req, res) => {
  try {
    const attempts = getAttempts(req.params.quizId);
    res.json(attempts);
  } catch (err) {
    console.error("Error fetching attempts:", err);
    res.status(500).json({ error: "Failed to fetch attempts" });
  }
});

export default router;
