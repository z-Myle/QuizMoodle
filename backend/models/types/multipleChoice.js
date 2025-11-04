export function createMultipleChoiceQuiz(title, questions) {
  return {
    title,
    type: "multipleChoice",
    data: {
      questions, // Array of { question, options: [a,b,c,d], correctIndex }
    },
  };
}

export function evaluateMultipleChoiceQuiz(quizData, answers) {
  let score = 0;
  quizData.questions.forEach((q, i) => {
    if (answers[i] === q.correctIndex) score++;
  });
  return score;
}
