import React from "react";

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
          <div className="detection-answer-choice">
            <input type="radio" name="Ya" id="" /> Ya
          </div>
          <div className="detection-answer-choice">
            <input type="radio" name="Ya" id="" /> Tidak
          </div>
        </div>
        <div className="detection-question">
          <h1>
            Menghindari situasi yang mengingatkan pada peristiwa traumatis?
          </h1>
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

export default AvoidanceQuestion;
