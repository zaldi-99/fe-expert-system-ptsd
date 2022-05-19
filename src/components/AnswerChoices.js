import React from "react";

const AnswerChoices = ({ fn, question, weight, answer }) => {
  return (
    <label className="custom-radio">
      <input type="radio" name={question} onClick={fn} />
      <span className="radio-btn">
        <i className="fas fa-check"></i>
        <div className="answer-icon">
          {weight === 0 ? (
            <i className="fa-solid fa-thumbs-down"></i>
          ) : weight === 1 ? (
            <i className="fa-solid fa-thumbs-up"></i>
          ) : null}
          <h3 className="radio-answer-text">{answer}</h3>
        </div>
      </span>
    </label>
  );
};

export default AnswerChoices;
