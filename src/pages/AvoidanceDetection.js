import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import AnswerChoices from "../components/AnswerChoices";

const AvoidanceDetection = () => {
  const navigate = useNavigate();
  const [avoidanceSymptom, setAvoidanceSymptom] = useState([]);

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
                    weight={1}
                    answer="Ya"
                    fn={() => console.log("klik")}
                  />
                  <AnswerChoices weight={0} answer="Tidak" />
                </div>
              </form>
            </div>
          ))}

        <div className="next-btn" onClick={() => navigate("/mood-detection")}>
          Selanjutnya
        </div>
      </div>
    </div>
  );
};

export default AvoidanceDetection;
