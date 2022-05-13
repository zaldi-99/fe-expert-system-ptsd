import swal from "@sweetalert/with-react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AnswerChoices from "../components/AnswerChoices";
import { AnswerContext } from "../components/Context";

const IntrusionDetection = () => {
  const navigate = useNavigate();
  const [intrusionSymptom, setIntrusionSymptom] = useState([]);
  const answers = useContext(AnswerContext);

  const getIntrusionSymptom = () => {
    axios
      .get("http://localhost:3001/api/symptom")
      .then(function (res) {
        setIntrusionSymptom(res.data);
        console.log(res);
      })
      .catch(function (err) {
        swal("Oops terjadi kesalahan", "Silakan coba muat ulang", "error");
        console.log(err);
      });
  };

  useEffect(() => {
    getIntrusionSymptom();
  }, []);

  return (
    <div className="detection-page">
      <div className="detection-box">
        {intrusionSymptom
          .filter(intrusion => intrusion.kategori === "Intrusi")
          .map(intrusion => (
            <div key={intrusion.id_gejala}>
              <form>
                <div className="detection-question">
                  <p>Dalam satu bulan terakhir...</p>
                  <h1>{intrusion.gejala}</h1>
                </div>
                <div className="detection-answer">
                  <AnswerChoices
                    question={intrusion.gejala}
                    weight={1}
                    answer="Ya"
                    fn={() =>
                      answers.addAnswer(
                        intrusion.id_gejala,
                        intrusion.gejala,
                        1
                      )
                    }
                  />
                  <AnswerChoices
                    question={intrusion.gejala}
                    weight={0}
                    answer="Tidak"
                    fn={() =>
                      answers.addAnswer(
                        intrusion.id_gejala,
                        intrusion.gejala,
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
            console.log(answers.answers);
            navigate("/avoidance-detection");
          }}
        >
          Selanjutnya
        </div>
      </div>
    </div>
  );
};

export default IntrusionDetection;
