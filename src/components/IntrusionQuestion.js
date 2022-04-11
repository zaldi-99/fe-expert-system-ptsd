import React from "react";
import AnswerChoices from "./AnswerChoices";

const IntrusionQuestion = ({ question }) => {
  return (
    <div>
      <form>
        <div className="detection-question">
          <h1>{question}</h1>
        </div>
        <div className="detection-answer">
          <AnswerChoices weight={1} answer="Ya" />
          <AnswerChoices weight={0} answer="Tidak" />
        </div>
      </form>
    </div>
  );
};

export default IntrusionQuestion;
