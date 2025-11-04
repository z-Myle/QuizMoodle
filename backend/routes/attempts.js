import express from "express";
import { saveAttempt, getAttempts } from "../models/attemptModel.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { quizId, score } = req.body;
  const attempt = saveAttempt(quizId, score);
  res.json(attempt);
});

router.get("/:quizId", (req, res) => {
  res.json(getAttempts(req.params.quizId));
});

export default router;
