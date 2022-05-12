import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import TraumaticQuestion from "../components/TraumaticQuestion";

import "./Detection.css";

const TraumaticDetection = () => {
  const navigate = useNavigate();
  const [traumaticSymptom, setTraumaticSymptom] = useState([]);
  const [traumaticAnswer, setTraumaticAnswer] = useState(0 | 1);

  const [isLoading, setIsLoading] = useState(true);

  const handleProcess = () => {
    // when experiencing trauma then navigate to another question
    if (traumaticAnswer === 1) {
      navigate("/intrusion-detection");
      localStorage.setItem("Question1", traumaticAnswer);
    }
    // when no experiencing trauma then show result negatif ptsd
    if (traumaticAnswer === 0) {
      navigate("/");
    }
  };

  const getTraumaticSymptom = () => {
    axios
      .get("http://localhost:3001/api/symptom")
      .then(res => {
        setTraumaticSymptom(res.data[0]);
        console.log(res);
        setIsLoading(false);
      })
      .catch(err => {
        alert(err);
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getTraumaticSymptom();
  }, []);
  return (
    <div className="detection-page">
      {traumaticSymptom ? (
        <div className="detection-box">
          <TraumaticQuestion
            question={traumaticSymptom.gejala}
            setState={setTraumaticAnswer}
          />
          <div className="next-btn" onClick={() => handleProcess()}>
            Proses
          </div>
        </div>
      ) : null}

      <Loading isShow={isLoading} />
    </div>
  );
};

export default TraumaticDetection;
