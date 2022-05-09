import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Question from "../components/Question";

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
            <Question question={avoidance.gejala} key={index} />
          ))}

        <div
          className="next-btn"
          onClick={() => navigate("/avoidance-detection")}
        >
          Selanjutnya
        </div>
      </div>
    </div>
  );
};

export default AvoidanceDetection;
