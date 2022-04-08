import axios from "axios";
import React, { useEffect, useState } from "react";
import AvoidanceQuestion from "../components/AvoidanceQuestion";
import IntrusionQuestion from "../components/IntrusionQuestion";
import TraumaticQuestion from "../components/TraumaticQuestion";

import "./Detection.css";

const Detection = () => {
  const [symptom, setSymptom] = useState();
  const getAllSymptom = async () => {
    const res = await axios("http://localhost:3001/api/symptom");
    console.log(res.data);
    setSymptom(res.data);
  };
  useEffect(() => {
    getAllSymptom();
  }, []);
  return (
    <div className="detection-page">
      <div className="detection-box">
        {/* <TraumaticQuestion />
        <IntrusionQuestion />
        <AvoidanceQuestion /> */}
        <div className="next-btn">Selanjutnya</div>
      </div>
    </div>
  );
};

export default Detection;
