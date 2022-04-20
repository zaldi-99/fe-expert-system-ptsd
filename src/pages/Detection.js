import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AnswerChoices from "../components/AnswerChoices";

import "./Detection.css";

const Detection = () => {
  const navigate = useNavigate();
  const [traumaticSymptom, setTraumaticSymptom] = useState([]);
  const [choices, setChoices] = useState(false);

  const processAnswer = () => {
    
  };

  const getAllSymptom = async () => {
    const res = await axios("http://localhost:3001/api/symptom");
    setTraumaticSymptom(res.data[0]);
  };
  useEffect(() => {
    getAllSymptom();
  }, []);
  return (
    <div className="detection-page">
      <div className="detection-box">
        <div>
          <form>
            <div className="detection-question">
              <h1>{traumaticSymptom.gejala}</h1>
              <p>
                (seperti kecelakaan, kejahatan seksual, orang yang dicintai
                meninggal karena pembunuhan atau bunuh diri)
              </p>
            </div>
            <div className="detection-answer">
              <AnswerChoices weight={1} answer="Ya" />
              <AnswerChoices weight={0} answer="Tidak" />
            </div>
          </form>
        </div>
        <div
          className="next-btn"
          onClick={() => navigate("/intrusion-detection")}
        >
          Proses
        </div>
      </div>
    </div>
  );
};

export default Detection;
