import React, { useState } from "react";
import "./App.css";
import questions from "./questions";
import QuestionBox from "./COMPONENTS/QuestionBox";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <>
      <div
        className={`appBackground ${isDarkMode ? "darkMode" : "lightMode"}`}
      >
        <div className="appHeader">
          <h1 style={{ color: isDarkMode ? "red" : "black" }}>Kalvium</h1>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? "Light" : "Dark"}
          </button>
        </div>
        <QuestionBox data={questions} />
      </div>
    </>
  );
}

export default App;


