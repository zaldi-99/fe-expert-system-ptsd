import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const [result, setResult] = useState([]);
  const [trauma, setTrauma] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const d = JSON.parse(localStorage.getItem("temp"));
    setTrauma(d[0]);
    setResult(d);
  }, []);

  const forwardChaining = () => {
    const positif = "Hasil Positif";
    const negatif = "Hasil Negatif";
    // If user not experiencing trauma
    if (trauma.answer === 0) {
      return negatif;
    }
    // Experiencing one or more intrusion symptom
    if (result[1].answer === 1 || result[2].answer === 1) {
      return positif;
    }
    // Experiencing one or more avoidance symptom
    if (result[3].answer === 1 || result[4].answer === 1) {
      return positif;
    } else {
      return <p>Hasil ...</p>;
    }
  };

  return (
    <div>
      <p>Result</p>
      <div className="answer-conclusion">
        <p>Jawaban yang anda berikan sebagai berikut :</p>
        {result
          .filter(ans => ans.answer === 1)
          .map(ans => (
            <div>
              <ul>
                <li> {ans.question} </li>
              </ul>
            </div>
          ))}

        {result.length !== 0 && forwardChaining()}
      </div>

      {/* {result.map(ans => (
        <p key={ans.question}>
          {ans.answer} {ans.question}
        </p>
      ))} */}

      <button
        onClick={() => {
          navigate("/");
          localStorage.clear();
          window.location.reload();
        }}
      >
        Selesai
      </button>
    </div>
  );
};

export default Result;
