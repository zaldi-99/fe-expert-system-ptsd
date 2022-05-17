import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css";

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
    const positif = "Positif";
    const negatif = "Negatif";

    for (let i = 0; i < result.length; i++) {
      if (result[i].answer === 0) {
        return negatif;
      }
    }

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
    }
    // Experiencing two or more changing mood
    if (
      (result[5].answer === 1 && result[6].answer === 1) ||
      (result[7].answer === 1 && result[8].answer === 1) ||
      (result[5].answer === 1 && result[7].answer === 1) ||
      (result[5].answer === 1 && result[8].answer === 1) ||
      (result[6].answer === 1 && result[7].answer === 1)
    ) {
      return positif;
    } else {
      return <p>Hasil ...</p>;
    }
  };

  return (
    <section className="result-page">
      <div className="criteria-header">
        <h1>Hasil</h1>
      </div>
      <div className="greetings">
        {
          <h1>
            Halo, {localStorage.getItem("user")} <br />{" "}
            <span>
              Terima kasih telah menggunakan sistem pakar diagnosa PTSD.
            </span>{" "}
          </h1>
        }
      </div>
      <div className="result-conclusion">
        <div className="user-answer">
          <p>Sebagai informasi, jawaban yang anda berikan sebagai berikut :</p>
          {result
            .filter(ans => ans.answer === 1)
            .map(ans => (
              <div>
                <ul>
                  <li> {ans.question} </li>
                </ul>
              </div>
            ))}
        </div>
        <div className="diagnose-result">
          {result.length !== 0 && (
            <h3>
              Berdasarkan jawaban yang anda berikan, sistem memberikan hasil :{" "}
              <span>{forwardChaining()}</span>
            </h3>
          )}
        </div>
        <div className="diagnose-source">
          <p>
            Hasil yang diberikan berdasarkan pada buku DSM-V. Disebutkan dalam
            buku tersebut kriteria penderita dari PTSD yaitu
          </p>
          <p>
            Mengalami peristiwa traumatis yang diikuti dengan gejala berikut :
          </p>
          <ol>
            <li>Mengalami satu atau lebih gejala intrusi</li>
            <li>Mengalami satu atau lebih gejala penghindaran</li>
            <li>
              Mengalami dua atau lebih gejala perubahan kognisi mood dan emosi
            </li>
            <li>Mengalami dua atau lebih gejala perubahan gairah</li>
          </ol>
        </div>
        <div className="diagnose-information">
          <p>
            Informasi lebih lanjut dapat dilihat pada halaman{" "}
            <a
              href="/information"
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              Informasi
            </a>
          </p>
        </div>
      </div>

      <button
        onClick={() => {
          navigate("/");
          localStorage.clear();
          window.location.reload();
        }}
      >
        Beranda
      </button>
    </section>
  );
};

export default Result;
