import swal from "@sweetalert/with-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "../components/Question";

const IntrusionDetection = () => {
  const navigate = useNavigate();
  const [intrusionSymptom, setIntrusionSymptom] = useState([]);

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
          .map((intrusion, index) => (
            <Question question={intrusion.gejala} key={index} />
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

export default IntrusionDetection;
