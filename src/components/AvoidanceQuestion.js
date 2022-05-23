import React from "react";
import AnswerChoices from "./AnswerChoices";

const AvoidanceQuestion = () => {
  return (
    <div>
      <form>
        <div className="detection-question">
          <h1>
            Berusaha tidak memikirkan atau mengingat kembali peristiwa
            traumatis?
          </h1>
        </div>
        <div className="detection-answer">
          <AnswerChoices weight={1} answer="Ya" />
          <AnswerChoices weight={0} answer="Tidak" />
        </div>
        <div className="detection-question">
          <h1>
            Menghindari situasi yang mengingatkan pada peristiwa traumatis?
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

export default AvoidanceQuestion;
