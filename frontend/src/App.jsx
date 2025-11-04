import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import QuizList from "./pages/QuizList";
import CreateQuiz from "./pages/CreateQuiz";
import TakeQuiz from "./pages/TakeQuiz";
import QuizAttempts from "./pages/QuizAttempts";
import ManageQuizzes from "./pages/ManageQuizzes";
import SakuraBackground from "./components/SakuraBackground";
import NavBar from "./components/layout/NavBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SakuraBackground />
      <Router>
        <NavBar
          style={{
            padding: "1rem 2rem",
            background: "rgba(255, 250, 252, 0.85)",
            boxShadow: "0 2px 10px rgba(247, 184, 198, 0.25)",
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid rgba(247, 184, 198, 0.4)",
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}
        >
          <Link
            to="/"
            style={{
              fontWeight: 500,
              color: theme.colors.muted,
              transition: "0.3s",
            }}
          >
            All Quizzes
          </Link>
          <Link
            to="/create"
            style={{
              fontWeight: 500,
              color: theme.colors.muted,
              transition: "0.3s",
            }}
          >
            Create Quiz
          </Link>
          <Link
            to="/manage"
            style={{
              fontWeight: 500,
              color: theme.colors.muted,
              transition: "0.3s",
            }}
          >
            Manage
          </Link>
        </NavBar>

        <Routes>
          <Route path="/" element={<QuizList />} />
          <Route path="/create" element={<CreateQuiz />} />
          <Route path="/quiz/:id" element={<TakeQuiz />} />
          <Route path="/quiz/:id/attempts" element={<QuizAttempts />} />
          <Route path="/manage" element={<ManageQuizzes />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
