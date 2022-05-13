import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import AnswerChoices from "../components/AnswerChoices";

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
          <div>
            <form onChange={e => console.log(e.target.checked)}>
              <div className="detection-question">
                <h1>{traumaticSymptom.gejala}</h1>
                <p>
                  (seperti kecelakaan, kejahatan seksual, orang yang dicintai
                  meninggal karena pembunuhan atau bunuh diri)
                </p>
              </div>
              <div className="detection-answer">
                <AnswerChoices
                  weight={1}
                  answer="Ya"
                  question={traumaticSymptom.gejala}
                  fn={() => setTraumaticAnswer(1)}
                />
                <AnswerChoices
                  weight={0}
                  answer="Tidak"
                  question={traumaticSymptom.gejala}
                  fn={() => setTraumaticAnswer(0)}
                />
              </div>
            </form>
          </div>
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
