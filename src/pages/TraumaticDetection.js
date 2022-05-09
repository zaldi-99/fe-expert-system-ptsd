import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TraumaticQuestion from "../components/TraumaticQuestion";

import "./Detection.css";

const TraumaticDetection = () => {
  const navigate = useNavigate();
  const [traumaticSymptom, setTraumaticSymptom] = useState([]);
  const [traumaticAnswer, setTraumaticAnswer] = useState(0 | 1);

  const handleProcess = () => {
    // when experiencing trauma then navigate to another question
    if (traumaticAnswer === 1) {
      navigate("/intrusion-detection");
    }
    // when no experiencing trauma then show result negatif ptsd
    if (traumaticAnswer === 0) {
      navigate("/");
    }
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
        <TraumaticQuestion
          question={traumaticSymptom.gejala}
          setState={setTraumaticAnswer}
        />
        <div className="next-btn" onClick={() => handleProcess()}>
          Proses
        </div>
      </div>
    </div>
  );
};

export default TraumaticDetection;
