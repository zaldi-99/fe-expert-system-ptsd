import React from "react";

const AnswerChoices = ({ fn, question, weight, answer }) => {
  return (
    <label className="custom-radio" onClick={fn}>
      <input type="radio" name={question} />
      <span className="radio-btn">
        <i className="fas fa-check"></i>
        <div className="answer-icon">
          {weight === 0 ? (
            <i className="fa-solid fa-thumbs-down"></i>
          ) : weight === 1 ? (
            <i className="fa-solid fa-thumbs-up"></i>
          ) : null}
          <h3 className="">{answer}</h3>
        </div>
      </span>
    </label>
  );
};

export default AnswerChoices;
