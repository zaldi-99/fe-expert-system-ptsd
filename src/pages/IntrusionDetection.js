import React from "react";
import { useNavigate } from "react-router-dom";
import Question from "../components/Question";

const IntrusionDetection = () => {
  const navigate = useNavigate();
  return (
    <div className="detection-page">
      <div className="detection-box">
        <Question question="Apakah anda merasa terganggu dengan ingatan yang menyedihkan pada peristiwa traumatis?" />
        <Question question="Mengalami mimpi buruk yang berulang terkait peristiwa traumatis?" />
        <div
          className="next-btn"
          onClick={() => navigate("/avoidance-detection")}
        >
          Selanjutnya
        </div>
      </div>
    </div>
  );
};

export default IntrusionDetection;
