import axios from "axios";
import React, { useEffect, useState } from "react";
// import AvoidanceQuestion from "../components/AvoidanceQuestion";
// import IntrusionQuestion from "../components/IntrusionQuestion";
import TraumaticQuestion from "../components/TraumaticQuestion";

import "./Detection.css";

const Detection = () => {
  const [traumaticSymptom, setTraumaticSymptom] = useState([]);
  // const [intrusionSymptom, setIntrusionSymptom] = useState([]);
  const [question1, setQuestion1] = useState(0);
  
  const getAllSymptom = async () => {
    const res = await axios("http://localhost:3001/api/symptom");
    console.log(res.data);
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
        {/* <IntrusionQuestion />
        <AvoidanceQuestion /> */}
        <div className="next-btn">Selanjutnya</div>
      </div>
    </div>
  );
};

export default Detection;
