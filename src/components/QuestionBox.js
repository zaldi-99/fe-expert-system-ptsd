import React from "react";
import "./QuestionBox.css";

const QuestionBox = () => {
  return (
    <div className="question-box">
      <div className="question-text">
        <p>What Sex are You?</p>
      </div>
      <div className="question-answer">
        <div className="question-options">
          <p>Male</p>
        </div>
        <div className="question-options">
          <p>Female</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionBox;
