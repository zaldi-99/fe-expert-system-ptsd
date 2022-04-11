import axios from "axios";
import React, { useEffect, useState } from "react";
import IntrusionQuestion from "../components/IntrusionQuestion";

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
        <IntrusionQuestion question={intrusionSymptom.gejala} />
        <div className="next-btn">Selanjutnya</div>
      </div>
    </div>
  );
};

export default IntrusionDetection;
