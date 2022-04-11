import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TraumaticQuestion from "../components/TraumaticQuestion";

import "./Detection.css";

const Detection = () => {
  const navigate = useNavigate();
  const [traumaticSymptom, setTraumaticSymptom] = useState([]);

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
        <TraumaticQuestion question={traumaticSymptom.gejala} />
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
