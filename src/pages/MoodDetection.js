import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Question from "../components/Question";

const MoodDetection = () => {
  const navigate = useNavigate();
  const [moodSymptom, setMoodSymptom] = useState([]);

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
            <Question question={mood.gejala} key={index} />
          ))}

        <div
          className="next-btn"
          onClick={() => navigate("/arousal-detection")}
        >
          Selanjutnya
        </div>
      </div>
    </div>
  );
};

export default MoodDetection;
