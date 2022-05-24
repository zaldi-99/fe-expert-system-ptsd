import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import AnswerChoices from "../components/AnswerChoices";
import { AnswerContext } from "../components/Context";

const AvoidanceDetection = () => {
  const navigate = useNavigate();
  const [avoidanceSymptom, setAvoidanceSymptom] = useState([]);
  const [answer, setAnswer] = useState(null);
  const [isFetch, setIsFetch] = useState(false);

  const answers = useContext(AnswerContext);

  const handleSubmit = () => {
    if (answer === null) {
      alert("Jawaban tidak boleh kosong");
    } else {
      console.log(answers.answers);
      navigate("/mood-detection");
    }
  };

  const getAvoidanceSymptom = () => {
    axios
      .get("http://localhost:3001/api/symptom")
      .then(function (res) {
        setAvoidanceSymptom(res.data);
        setIsFetch(true);
        console.log(res);
      })
      .catch(function (err) {
        swal("Oops terjadi kesalahan", "Silakan coba muat ulang", "error");
        setIsFetch(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getAvoidanceSymptom();
  }, []);

  return (
    <section className="detection-page">
      <div className="criteria-header">
        <h1>Kriteria 3 : Diagnosa Penghindaran</h1>
      </div>
      {isFetch ? (
        <div className="question-container">
          {avoidanceSymptom
            .filter(data => data.kategori === "Penghindaran")
            .map(avoidance => (
              <div key={avoidance.id_gejala}>
                <form>
                  <div className="detection-question">
                    <p>Dalam satu bulan terakhir, apakah anda...</p>
                    <h1>{avoidance.gejala}</h1>
                  </div>
                  <div className="detection-answer">
                    <AnswerChoices
                      question={avoidance.gejala}
                      weight={1}
                      answer="Ya"
                      fn={() => {
                        setAnswer(1);
                        answers.addAnswer(
                          avoidance.id_gejala,
                          avoidance.kode_gejala,
                          avoidance.gejala,
                          1
                        );
                      }}
                    />
                    <AnswerChoices
                      question={avoidance.gejala}
                      weight={0}
                      answer="Tidak"
                      fn={() => {
                        setAnswer(0);
                        answers.addAnswer(
                          avoidance.id_gejala,
                          avoidance.kode_gejala,
                          avoidance.gejala,
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
    </section>
  );
};

export default AvoidanceDetection;
