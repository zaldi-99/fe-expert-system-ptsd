import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import AnswerChoices from "../components/AnswerChoices";
import { AnswerContext } from "../components/Context";
import Loading from "../components/Loading";

const ArousalDetection = () => {
  const navigate = useNavigate();

  const [arousalSymptom, setArousalSymptom] = useState([]);
  const [answer, setAnswer] = useState(null);
  const [isFetch, setIsFetch] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const answers = useContext(AnswerContext);

  const getSymptomData = () => {
    axios
      .get("http://localhost:3001/api/symptom")
      .then(function (res) {
        setArousalSymptom(res.data);
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
      localStorage.setItem("temp", JSON.stringify(answers.answers));
      console.log(answers.answers);
      navigate("/result");
    }
  };

  useEffect(() => {
    getSymptomData();
  }, []);

  return (
    <section className="detection-page">
      <div className="criteria-header">
        <h1>Kriteria 4 : Diagnosa Perubahan Gairah</h1>
      </div>
      {isFetch ? (
        <div>
          {arousalSymptom
            .filter(data => data.kategori === "Arousal")
            .map(arousal => (
              <div key={arousal.id_gejala}>
                <form>
                  <div className="detection-question">
                    <p>Dalam satu bulan terakhir, apakah anda...</p>
                    <h1>{arousal.gejala}</h1>
                  </div>
                  <div className="detection-answer">
                    <AnswerChoices
                      question={arousal.gejala}
                      weight={1}
                      answer="Ya"
                      fn={() => {
                        setAnswer(1);
                        answers.addAnswer(arousal.id_gejala, arousal.gejala, 1);
                      }}
                    />
                    <AnswerChoices
                      question={arousal.gejala}
                      weight={0}
                      answer="Tidak"
                      fn={() => {
                        setAnswer(0);
                        answers.addAnswer(arousal.id_gejala, arousal.gejala, 0);
                      }}
                    />
                  </div>
                </form>
              </div>
            ))}
          <div className="btn btn-process" onClick={handleSubmit}>
            Lihat Hasil
          </div>
        </div>
      ) : null}
      <Loading isShow={isLoading} />
    </section>
  );
};

export default ArousalDetection;
