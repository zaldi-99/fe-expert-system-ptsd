import swal from "@sweetalert/with-react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AnswerChoices from "../components/AnswerChoices";
import { AnswerContext } from "../components/Context";
import Loading from "../components/Loading";

const IntrusionDetection = () => {
  const navigate = useNavigate();
  const [intrusionSymptom, setIntrusionSymptom] = useState([]);
  const [answer, setAnswer] = useState(null);
  const [isFetch, setIsFetch] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const answers = useContext(AnswerContext);

  const getIntrusionSymptom = () => {
    axios
      .get("http://localhost:3001/api/symptom")
      .then(function (res) {
        setIntrusionSymptom(res.data);
        setIsFetch(true);
        setIsLoading(false);
        console.log(res);
      })
      .catch(function (err) {
        swal("Oops terjadi kesalahan", "Silakan coba muat ulang", "error");
        setIsFetch(false);
        setIsLoading(false);
        console.log(err);
      });
  };

  const handleSubmit = () => {
    if (answer === null) {
      alert("jawaban tidak boleh kosong");
    } else {
      console.log(answers.answers);
      navigate("/avoidance-detection");
    }
  };

  useEffect(() => {
    getIntrusionSymptom();
  }, []);

  return (
    <section className="detection-page">
      <div className="criteria-header">
        <h1>Kriteria 2 : Diagnosa Intrusi</h1>
      </div>
      {isFetch ? (
        <div>
          {intrusionSymptom
            .filter(data => data.kategori === "Intrusi")
            .map(intrusion => (
              <div key={intrusion.id_gejala}>
                <form>
                  <div className="detection-question">
                    <p>Dalam satu bulan terakhir, apakah anda...</p>
                    <h1>{intrusion.gejala}</h1>
                  </div>
                  <div className="detection-answer">
                    <AnswerChoices
                      question={intrusion.gejala}
                      weight={1}
                      answer="Ya"
                      fn={() => {
                        setAnswer(1);
                        answers.addAnswer(
                          intrusion.id_gejala,
                          intrusion.gejala,
                          1
                        );
                      }}
                    />
                    <AnswerChoices
                      question={intrusion.gejala}
                      weight={0}
                      answer="Tidak"
                      fn={() => {
                        setAnswer(0);
                        answers.addAnswer(
                          intrusion.id_gejala,
                          intrusion.gejala,
                          0
                        );
                      }}
                    />
                  </div>
                </form>
              </div>
            ))}
          <div className="btn btn-process" onClick={handleSubmit}>
            Proses
          </div>
        </div>
      ) : null}
      <Loading isShow={isLoading} />
    </section>
  );
};

export default IntrusionDetection;
