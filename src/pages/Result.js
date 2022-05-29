import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css";

const Result = () => {
  const [result, setResult] = useState([]);
  const [trauma, setTrauma] = useState();
  const [showDetail, setShowDetail] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const d = JSON.parse(localStorage.getItem("temp"));
    setTrauma(d[0]);
    setResult(d);
  }, []);

  const forwardChaining = () => {
    const positif = "Positif";
    const negatif = "Negatif";

    // for (let i = 1; i < result.length; i++) {
    //   if (result[i].answer === 0) {
    //     return negatif;
    //   }
    // }

    // If user not experiencing trauma (Rule 1)
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
      (result[5].answer === 1 && result[7].answer === 1) ||
      (result[5].answer === 1 && result[8].answer === 1) ||
      (result[6].answer === 1 && result[7].answer === 1) ||
      (result[6].answer === 1 && result[8].answer === 1) ||
      (result[7].answer === 1 && result[8].answer === 1)
    ) {
      return positif;
    }
    if (
      (result[9].answer === 1 && result[10].answer === 1) ||
      (result[9].answer === 1 && result[11].answer === 1) ||
      (result[9].answer === 1 && result[12].answer === 1) ||
      (result[10].answer === 1 && result[11].answer === 1) ||
      (result[10].answer === 1 && result[12].answer === 1) ||
      (result[11].answer === 1 && result[12].answer === 1)
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
        <div className="diagnose-result">
          {result.length !== 0 && (
            <h3>
              Berdasarkan jawaban yang anda berikan, sistem memberikan hasil :{" "}
              <span>{forwardChaining()}</span>
            </h3>
          )}
          {showDetail ? (
            <button onClick={() => setShowDetail(false)}>Tutup</button>
          ) : null}
        </div>
        {showDetail ? (
          <div className="user-answer">
            <p>Jawaban yang anda berikan sebagai berikut :</p>
            {result
              .filter(ans => ans.answer === 1)
              .map(ans => (
                <div key={ans.question}>
                  <ul>
                    <li>
                      {" "}
                      {ans.question} ({ans.code})
                    </li>
                  </ul>
                </div>
              ))}
            <p>Kesimpulan : Memenuhi aturan ketiga</p>
            <div className="diagnose-information">
              <p>
                Informasi lebih lanjut dapat dilihat pada halaman{" "}
                <a
                  href="/information"
                  onClick={() => {
                    localStorage.clear();
                  }}
                >
                  Informasi
                </a>
              </p>
            </div>
          </div>
        ) : (
          <div>
            <button onClick={() => setShowDetail(true)}>Lihat Detail</button>
          </div>
        )}
      </div>

      <button
        onClick={() => {
          navigate("/");
          localStorage.clear();
        }}
      >
        Beranda
      </button>
    </section>
  );
};

export default Result;
