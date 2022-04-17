import React from "react";
import { useNavigate } from "react-router-dom";
import Question from "../components/Question";

const MoodDetection = () => {
  const navigate = useNavigate();
  return (
    <div className="detection-page">
      <div className="detection-box">
        <Question question="Merasa bersalah atau menyalahkan diri sendiri atau orang lain atas peristiwa traumatis" />
        <Question question="Mengalami emosi negatif secara berlebihan (takut, marah, bersalah, atau malu)" />
        <Question question="Kurang minat dalam melakukan aktivitas sehari hari" />
        <Question question="Tidak dapat mengingat aspek penting dari peristiwa traumatis" />
        <div
          className="next-btn"
          onClick={() => navigate("/arousal-detection")}
        >
          Selanjutnya
        </div>
      </div>
    </div>
  );
};

export default MoodDetection;
