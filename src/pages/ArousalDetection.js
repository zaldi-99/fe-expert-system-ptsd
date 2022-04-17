import React from "react";
import { useNavigate } from "react-router-dom";
import Question from "../components/Question";

const ArousalDetection = () => {
  const navigate = useNavigate();
  return (
    <div className="detection-page">
      <div className="detection-box">
        <Question question="Mudah tersinggung dan emosi yang meledak (dengan sedikit provokasi atau tanpa provokasi)" />
        <Question question="Selalu waspada dan mudah terkejut" />
        <Question question="Sulit berkonsentrasi" />
        <Question question="Mengalami gangguan tidur (gelisah atau sulit tidur)" />
        <div className="next-btn">Selanjutnya</div>
      </div>
    </div>
  );
};

export default ArousalDetection;
