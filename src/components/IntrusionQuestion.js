import React from "react";
import AnswerChoices from "./AnswerChoices";

const IntrusionQuestion = () => {
  return (
    <div>
      <form>
        <div className="detection-question">
          <h1>
            Apakah anda merasa terganggu dengan ingatan yang menyedihkan pada
            peristiwa traumatis?
          </h1>
        </div>
        <div className="detection-answer">
          <AnswerChoices weight={1} answer="Ya" />
          <AnswerChoices weight={0} answer="Tidak" />
        </div>
        <div className="detection-question">
          <h1>
            Mengalami mimpi buruk yang berulang terkait peristiwa traumatis?
          </h1>
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
