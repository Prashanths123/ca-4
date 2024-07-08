import React from "react";
import "./Result.css";
function UniqueResultComponent(props) {
  const handleRestartClick = () => {
    props.reset();
  };

  return (
    <div className="uniqueResultCard">
      <h2>Final Outcome</h2>
      <h2>
        {props.score} out of 5 correct - ({(props.score / 5) * 100}%)
      </h2>
      <button onClick={handleRestartClick}>Restart</button>
    </div>
  );
}

export default UniqueResultComponent;