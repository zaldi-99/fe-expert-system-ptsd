import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import AnswerChoices from "../components/AnswerChoices";

import "./Detection.css";
import { AnswerContext } from "../components/Context";

const TraumaticDetection = () => {
  const navigate = useNavigate();
  const [traumaticSymptom, setTraumaticSymptom] = useState([]);
  const [traumaticAnswer, setTraumaticAnswer] = useState(null);
  const [isFetch, setIsFetch] = useState(false);

  const answers = useContext(AnswerContext);

  const [isLoading, setIsLoading] = useState(false);

  const handleProcess = () => {
    if (traumaticAnswer === null) {
      alert("Jawaban tidak boleh kosong");
    }
    // when experiencing trauma then navigate to another question
    if (traumaticAnswer === 1) {
      navigate("/intrusion-detection");
    }

    // when no experiencing trauma then show result negatif ptsd
    if (traumaticAnswer === 0) {
      navigate("/result");
    }
  };

  const getTraumaticSymptom = () => {
    axios
      .get("https://expert-system-ptsd.herokuapp.com/api/symptom")
      .then(res => {
        setIsLoading(true);
        setTraumaticSymptom(res.data[0]);
        console.log(res);
        setIsLoading(false);
        setIsFetch(true);
      })
      .catch(err => {
        alert(err);
        console.log(err);
        setIsLoading(false);
        setIsFetch(false);
      });
  };

  useEffect(() => {
    getTraumaticSymptom();
  }, []);

  return (
    <section className="detection-page">
      <div className="criteria-header">
        <h1>Kriteria 1 : Diagnosa Trauma</h1>
      </div>
      {isFetch ? (
        <div className="detection-form">
          <form onChange={e => console.log(e.target.checked)}>
            <div className="detection-question">
              <p>Apakah anda...</p>
              <h1>{traumaticSymptom.gejala}</h1>
            </div>
            <div className="detection-question-desc">
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
                fn={() => {
                  setTraumaticAnswer(1);
                  answers.addAnswer(
                    traumaticSymptom.id_gejala,
                    traumaticSymptom.kode_gejala,
                    traumaticSymptom.gejala,
                    1
                  );
                }}
              />
              <AnswerChoices
                weight={0}
                answer="Tidak"
                question={traumaticSymptom.gejala}
                fn={() => {
                  setTraumaticAnswer(0);
                  answers.addAnswer(
                    traumaticSymptom.id_gejala,
                    traumaticSymptom.kode_gejala,
                    traumaticSymptom.gejala,
                    0
                  );
                }}
              />
            </div>
          </form>
          <div
            className="btn btn-process"
            onClick={() => {
              localStorage.setItem("temp", JSON.stringify(answers.answers));
              handleProcess();
            }}
          >
            Proses
          </div>
        </div>
      ) : null}
      <Loading isShow={isLoading} />
    </section>
  );
};

export default TraumaticDetection;
