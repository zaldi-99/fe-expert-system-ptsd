import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import AnswerChoices from "../components/AnswerChoices";

const ArousalDetection = () => {
  //   const navigate = useNavigate();
  const [arousalSymptom, setArousalSymptom] = useState([]);

  const handleProcess = () => {
    localStorage.clear();
  };

  const getSymptomData = () => {
    axios
      .get("http://localhost:3001/api/symptom")
      .then(function (res) {
        setArousalSymptom(res.data);
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
        {arousalSymptom
          .filter(arousal => arousal.kategori === "Arousal")
          .map((arousal, index) => (
            <div key={arousal.id_gejala}>
              <form>
                <div className="detection-question">
                  <p>Dalam satu bulan terakhir...</p>
                  <h1>{arousal.gejala}</h1>
                </div>
                <div className="detection-answer">
                  <AnswerChoices
                    weight={1}
                    answer="Ya"
                    fn={() => console.log("klik")}
                  />
                  <AnswerChoices weight={0} answer="Tidak" />
                </div>
              </form>
            </div>
          ))}

        <div className="next-btn" onClick={() => handleProcess()}>
          Lihat Hasil
        </div>
      </div>
    </div>
  );
};

export default ArousalDetection;
