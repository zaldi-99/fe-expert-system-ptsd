import React from "react";
import AnswerChoices from "./AnswerChoices";

const TraumaticQuestion = ({ question }) => {
  return (
    <div>
      <form>
        <div className="detection-question">
          <h1>
            Dalam sebulan terakhir...
            <br /> {question}
          </h1>
          <p>
            (seperti kecelakaan, kejahatan seksual, orang yang dicintai
            meninggal karena pembunuhan atau bunuh diri)
          </p>
        </div>
        <div className="detection-answer">
          <AnswerChoices weight={1} answer="Ya" />
          <AnswerChoices weight={0} answer="Tidak" />
        </div>
      </form>
    </div>
  );
};

export default TraumaticQuestion;
