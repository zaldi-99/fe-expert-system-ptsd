import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import AnswerChoices from "../components/AnswerChoices";
import { AnswerContext } from "../components/Context";

const MoodDetection = () => {
  const navigate = useNavigate();
  const [moodSymptom, setMoodSymptom] = useState([]);
  const answers = useContext(AnswerContext);

  const getSymptomData = () => {
    axios
      .get("http://localhost:3001/api/symptom")
      .then(function (res) {
        setMoodSymptom(res.data);
        console.log(res);
      })
      .catch(function (err) {
        swal("Oops terjadi kesalahan", "Silakan coba muat ulang", "error");
        console.log(err);
      });
  };
  useEffect(() => {
    getSymptomData();
  }, []);
  return (
    <div className="detection-page">
      <div className="detection-box">
        {moodSymptom
          .filter(mood => mood.kategori === "Mood")
          .map((mood, index) => (
            <div key={mood.id_gejala}>
              <form>
                <div className="detection-question">
                  <p>Dalam satu bulan terakhir...</p>
                  <h1>{mood.gejala}</h1>
                </div>
                <div className="detection-answer">
                  <AnswerChoices
                    question={mood.gejala}
                    weight={1}
                    answer="Ya"
                    fn={() => answers.addAnswer(mood.id_gejala, mood.gejala, 1)}
                  />
                  <AnswerChoices
                    question={mood.gejala}
                    weight={0}
                    answer="Tidak"
                    fn={() => answers.addAnswer(mood.id_gejala, mood.gejala, 0)}
                  />
                </div>
              </form>
            </div>
          ))}

        <div
          className="next-btn"
          onClick={() => {
            navigate("/arousal-detection");
            console.log(answers.answers);
          }}
        >
          Selanjutnya
        </div>
      </div>
    </div>
  );
};

export default MoodDetection;
