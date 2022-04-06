import React from "react";

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
          <div className="detection-answer-choice">
            <input type="radio" name="Ya" id="" /> Ya
          </div>
          <div className="detection-answer-choice">
            <input type="radio" name="Tidak" id="" /> Tidak
          </div>
        </div>
        <div className="detection-question">
          <h1>
            Mengalami mimpi buruk yang berulang terkait peristiwa traumatis?
          </h1>
        </div>
        <div className="detection-answer">
          <div className="detection-answer-choice">
            <input type="radio" name="Ya" id="" /> Ya
          </div>
          <div className="detection-answer-choice">
            <input type="radio" name="Tidak" id="" /> Tidak
          </div>
        </div>
      </form>
    </div>
  );
};

export default IntrusionQuestion;
