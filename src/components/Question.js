import React from "react";
import AnswerChoices from "./AnswerChoices";

const Question = ({ question, setState }) => {
  return (
    <div>
      <form>
        <div className="detection-question">
          <h1>{question}</h1>
          <p>
            (seperti kecelakaan, kejahatan seksual, orang yang dicintai
            meninggal karena pembunuhan atau bunuh diri)
          </p>
        </div>
        <div className="detection-answer">
          <AnswerChoices weight={1} answer="Ya" setState={setState} />
          <AnswerChoices weight={0} answer="Tidak" setState={setState} />
        </div>
      </form>
    </div>
  );
};

export default Question;
