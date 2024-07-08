import { useState } from "react";
import "./Question.css";
import Result from "./Result";

function QuestionBox(props) {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionClick = (e) => {
    setQuestionNumber(questionNumber + 1);
    setIsHighlighted(false);

    if (e.target.getAttribute('data-is-correct') === "true") {
      setScore(score + 1);
    }
  };

  const handleHighlight = () => {
    setIsHighlighted(!isHighlighted);
  };

  const resetState = () => {
    setQuestionNumber(0);
    setIsHighlighted(false);
    setScore(0);
  };

  return (
    <div>
      {questionNumber < 5 ? (
        <div className={`question-container ${isHighlighted ? "light-mode" : "dark-mode"}`}>
          <h2>Question: {questionNumber + 1} of 5</h2>
          <h2 style={{ color: isHighlighted ? "red" : "black" }}>
            {props.data[questionNumber].text}
          </h2>
          <div className="options-container">
            {props.data[questionNumber].options.map((option, index) => (
              <p
                key={index}
                className="option"
                onClick={handleOptionClick}
                data-is-correct={`${option.isCorrect}`}
              >
                {option.text}
              </p>
            ))}
          </div>
          <div className="highlight-container">
            <button onClick={handleHighlight}>
              {isHighlighted ? "Remove Highlight" : "Highlight"}
            </button>{" "}
          </div>
        </div>
      ) : (
        <Result score={score} reset={resetState} />
      )}
    </div>
  );
}

export default QuestionBox;