import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TraumaticQuestion from "../components/TraumaticQuestion";

import "./Detection.css";

const Detection = () => {
  const navigate = useNavigate();
  const [traumaticSymptom, setTraumaticSymptom] = useState([]);
  const [question1, setQuestion1] = useState(0 | 1);

  const calculate = () => {
    if (question1 === 1) {
      navigate("/intrusion-detection");
    }
    if (question1 === 0) {
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
          setState={setQuestion1}
        />
        <div className="next-btn" onClick={() => calculate()}>
          Proses
        </div>
      </div>
    </div>
  );
};

export default Detection;
