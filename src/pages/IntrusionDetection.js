import axios from "axios";
import React, { useEffect, useState } from "react";
import Question from "../components/Question";

const IntrusionDetection = () => {
  const [intrusionSymptom, setIntrusionSymptom] = useState([]);
  const getAllSymptom = async () => {
    const res = await axios("http://localhost:3001/api/symptom");
    setIntrusionSymptom(res.data[1]);
  };
  useEffect(() => {
    getAllSymptom();
  }, []);
  return (
    <div className="detection-page">
      <div className="detection-box">
        <Question question={intrusionSymptom.gejala} />
        <div className="next-btn">Selanjutnya</div>
      </div>
    </div>
  );
};

export default IntrusionDetection;
