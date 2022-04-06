import React from "react";

const AnswerChoices = ({ question, weight, answer }) => {
  return (
    <label className="custom-radio">
      <input type="radio" name={question} />
      <span className="radio-btn">
        <i className="fas fa-check"></i>
        <div className="answer-icon">
          {weight === 0 ? (
            <i class="fa-solid fa-thumbs-down"></i>
          ) : weight === 1 ? (
            <i class="fa-solid fa-thumbs-up"></i>
          ) : (
            <i class="fa-solid fa-thumbs-up"></i>
          )}
          <h3 className="">
            {answer}
          </h3>
        </div>
      </span>
    </label>
  );
};

export default AnswerChoices;
