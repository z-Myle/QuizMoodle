import express from "express";
import cors from "cors";
import quizzesRoutes from "./routes/quizzes.js";
import attemptsRoutes from "./routes/attempts.js";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/quizzes", quizzesRoutes);
app.use("/api/attempts", attemptsRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
