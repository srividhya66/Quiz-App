import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Quizz.css"; // import CSS

function Quizz() {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/questions").then((res) => {
      setQuestions(res.data);
    });
  }, []);

  const handleOptionChange = (qIndex, option) => {
    setUserAnswers({ ...userAnswers, [qIndex]: option });
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q, index) => {
      if (userAnswers[index] === q.answer) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  return (
    <div className="quiz-container">
      {questions.map((q, index) => (
        <div key={index} className="question-card">
          <h3>{index + 1}. {q.question}</h3>
          <div className="options">
            {q.options.map((opt, i) => (
              <label key={i} className="option">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={opt}
                  onChange={() => handleOptionChange(index, opt)}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}

      <button onClick={handleSubmit} className="submit-btn">
        Submit Quiz
      </button>

      {score !== null && (
        <div className="result">
          You scored {score} out of {questions.length}
        </div>
      )}
    </div>
  );
}

export default Quizz;
