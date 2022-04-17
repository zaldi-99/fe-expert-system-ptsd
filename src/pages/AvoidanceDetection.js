import React from "react";
import { useNavigate } from "react-router-dom";
import Question from "../components/Question";

const AvoidanceDetection = () => {
  const navigate = useNavigate();
  return (
    <div className="detection-page">
      <div className="detection-box">
        <Question question="Berusaha tidak memikirkan atau mengingat kembali peristiwa traumatis?" />
        <Question question="Menghindari situasi yang mengingatkan pada peristiwa traumatis?" />
        <div className="next-btn" onClick={() => navigate("/mood-detection")}>
          Selanjutnya
        </div>
      </div>
    </div>
  );
};

export default AvoidanceDetection;
