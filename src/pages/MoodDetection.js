import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import AnswerChoices from "../components/AnswerChoices";
import { AnswerContext } from "../components/Context";
import Loading from "../components/Loading";

const MoodDetection = () => {
  const navigate = useNavigate();

  const [moodSymptom, setMoodSymptom] = useState([]);
  const [answer, setAnswer] = useState(null);
  const [isFetch, setIsFetch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const answers = useContext(AnswerContext);

  const getSymptomData = () => {
    axios
      .get("https://expert-system-ptsd.herokuapp.com/api/symptom")
      .then(function (res) {
        setIsLoading(true);
        setMoodSymptom(res.data);
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
      navigate("/arousal-detection");
    }
  };

  useEffect(() => {
    getSymptomData();
  }, []);
  return (
    <section className="detection-page">
      <div className="criteria-header">
        <h1>Kriteria 4 : Diagnosa Perubahan Mood</h1>
      </div>
      {isFetch ? (
        <div>
          {moodSymptom
            .filter(data => data.kategori === "Mood")
            .map(mood => (
              <div key={mood.id_gejala}>
                <form>
                  <div className="detection-question">
                    <p>Dalam satu bulan terakhir, apakah anda...</p>
                    <h1>{mood.gejala}</h1>
                  </div>
                  <div className="detection-answer">
                    <AnswerChoices
                      question={mood.gejala}
                      weight={1}
                      answer="Ya"
                      fn={() => {
                        setAnswer(1);
                        answers.addAnswer(
                          mood.id_gejala,
                          mood.kode_gejala,
                          mood.gejala,
                          1
                        );
                      }}
                    />
                    <AnswerChoices
                      question={mood.gejala}
                      weight={0}
                      answer="Tidak"
                      fn={() => {
                        setAnswer(0);
                        answers.addAnswer(
                          mood.id_gejala,
                          mood.kode_gejala,
                          mood.gejala,
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

export default MoodDetection;
