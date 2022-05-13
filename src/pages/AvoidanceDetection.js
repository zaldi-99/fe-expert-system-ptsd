import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import AnswerChoices from "../components/AnswerChoices";
import { AnswerContext } from "../components/Context";

const AvoidanceDetection = () => {
  const navigate = useNavigate();
  const [avoidanceSymptom, setAvoidanceSymptom] = useState([]);
  const answers = useContext(AnswerContext);

  const getAvoidanceSymptom = () => {
    axios
      .get("http://localhost:3001/api/symptom")
      .then(function (res) {
        setAvoidanceSymptom(res.data);
        console.log(res);
      })
      .catch(function (err) {
        swal("Oops terjadi kesalahan", "Silakan coba muat ulang", "error");
        console.log(err);
      });
  };
  useEffect(() => {
    getAvoidanceSymptom();
  }, []);

  return (
    <div className="detection-page">
      <div className="detection-box">
        {avoidanceSymptom
          .filter(avoidance => avoidance.kategori === "Avoidance")
          .map((avoidance, index) => (
            <div key={avoidance.id_gejala}>
              <form>
                <div className="detection-question">
                  <p>Dalam satu bulan terakhir...</p>
                  <h1>{avoidance.gejala}</h1>
                </div>
                <div className="detection-answer">
                  <AnswerChoices
                    question={avoidance.gejala}
                    weight={1}
                    answer="Ya"
                    fn={() =>
                      answers.addAnswer(
                        avoidance.id_gejala,
                        avoidance.gejala,
                        1
                      )
                    }
                  />
                  <AnswerChoices
                    question={avoidance.gejala}
                    weight={0}
                    answer="Tidak"
                    fn={() =>
                      answers.addAnswer(
                        avoidance.id_gejala,
                        avoidance.gejala,
                        0
                      )
                    }
                  />
                </div>
              </form>
            </div>
          ))}

        <div
          className="next-btn"
          onClick={() => {
            navigate("/mood-detection");
            console.log(answers.answers);
          }}
        >
          Selanjutnya
        </div>
      </div>
    </div>
  );
};

export default AvoidanceDetection;
