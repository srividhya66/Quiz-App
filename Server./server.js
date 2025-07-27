const express = require("express");
const cors = require("cors");

const app = express(); // ✅ This must come before app.get()

app.use(cors());

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "London", "Paris", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "Java", "C", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "Who developed React.js?",
    options: ["Google", "Microsoft", "Facebook", "Twitter"],
    answer: "Facebook",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style System",
      "Computer Styled Syntax",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which company developed Java?",
    options: ["Apple", "Sun Microsystems", "Google", "Microsoft"],
    answer: "Sun Microsystems",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Seoul", "Beijing", "Tokyo", "Osaka"],
    answer: "Tokyo",
  },
  {
    question: "What is 2 + 2 * 2?",
    options: ["6", "8", "4", "10"],
    answer: "6",
  },
  {
    question: "What does HTTP stand for?",
    options: [
      "HyperText Transfer Protocol",
      "HyperTool Transfer Protocol",
      "HighText Transfer Protocol",
      "None of these",
    ],
    answer: "HyperText Transfer Protocol",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Which HTML tag is used for a line break?",
    options: ["<lb>", "<break>", "<br>", "<line>"],
    answer: "<br>",
  },
];

// 🔁 Get 5 random questions
function getRandomQuestions(n = 5) {
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

app.get("/api/questions", (req, res) => {
  res.json(getRandomQuestions());
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
