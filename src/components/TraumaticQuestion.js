import React from "react";

const TraumaticQuestion = () => {
  return (
    <div>
      <form>
        <div className="detection-question">
          <h1>Apakah anda pernah mengalami peristiwa traumatis?</h1>
        </div>
        <div className="detection-answer">
          <div className="detection-answer-choice">
            <input type="radio" name="Ya" id="" /> Ya
          </div>
          <div className="detection-answer-choice">
            <input type="radio" name="Ya" id="" /> Tidak
          </div>
        </div>
      </form>
    </div>
  );
};

export default TraumaticQuestion;
