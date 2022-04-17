import React from "react";
import { useNavigate } from "react-router-dom";
import Question from "../components/Question";

import "./Detection.css";

const Detection = () => {
  const navigate = useNavigate();
  return (
    <div className="detection-page">
      <div className="detection-box">
        <Question question="Apakah anda pernah mengalami peristiwa traumatis?" />
        <div
          className="next-btn"
          onClick={() => navigate("/intrusion-detection")}
        >
          Selanjutnya
        </div>
      </div>
    </div>
  );
};

export default Detection;
