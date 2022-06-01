import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css";

const Result = () => {
  // Answer state
  const [result, setResult] = useState([]);
  const [trauma, setTrauma] = useState();
  const [intrusion1, setIntrusion1] = useState();
  const [intrusion2, setIntrusion2] = useState();
  const [avoidance1, setAvoidance1] = useState();
  const [avoidance2, setAvoidance2] = useState();
  const [mood1, setMood1] = useState();
  const [mood2, setMood2] = useState();
  const [mood3, setMood3] = useState();
  const [mood4, setMood4] = useState();
  const [arousal1, setArousal1] = useState();
  const [arousal2, setArousal2] = useState();
  const [arousal3, setArousal3] = useState();
  const [arousal4, setArousal4] = useState();

  // const [showDetail, setShowDetail] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const d = JSON.parse(localStorage.getItem("temp"));
    setTrauma(d[0]);
    setIntrusion1(d[1]);
    setIntrusion2(d[2]);
    setAvoidance1(d[3]);
    setAvoidance2(d[4]);
    setMood1(d[5]);
    setMood2(d[6]);
    setMood3(d[7]);
    setMood4(d[8]);
    setArousal1(d[9]);
    setArousal2(d[10]);
    setArousal3(d[11]);
    setArousal4(d[12]);
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
    if (intrusion1.answer === 1 || intrusion2.answer === 1) {
      return positif;
    }
    // Experiencing one or more avoidance symptom
    if (avoidance1.answer === 1 || avoidance2.answer === 1) {
      return positif;
    }
    // Experiencing two or more changing mood
    if (
      (mood1.answer === 1 && mood2.answer === 1) ||
      (mood1.answer === 1 && mood3.answer === 1) ||
      (mood1.answer === 1 && mood4.answer === 1) ||
      (mood2.answer === 1 && mood3.answer === 1) ||
      (mood2.answer === 1 && mood4.answer === 1) ||
      (mood3.answer === 1 && mood4.answer === 1)
    ) {
      return positif;
    }
    if (
      (arousal1.answer === 1 && arousal2.answer === 1) ||
      (arousal1.answer === 1 && arousal3.answer === 1) ||
      (arousal1.answer === 1 && arousal4.answer === 1) ||
      (arousal2.answer === 1 && arousal3.answer === 1) ||
      (arousal2.answer === 1 && arousal4.answer === 1) ||
      (arousal3.answer === 1 && arousal4.answer === 1)
    ) {
      return positif;
    } else {
      return <p>Hasil ...</p>;
    }
  };

  const checkRule = () => {
    const rule1 = "Memenuhi aturan pertama";
    const rule2 = "Memenuhi aturan kedua";
    const rule3 = "Memenuhi aturan ketiga";
    const rule4 = "Memenuhi aturan keempat";
    const rule5 = "Memenuhi aturan kelima";

    // for (let i = 1; i < result.length; i++) {
    //   if (result[i].answer === 0) {
    //     return negatif;
    //   }
    // }

    // If user not experiencing trauma (Rule 1)
    if (trauma.answer === 0) {
      return rule1;
    }
    // Experiencing one or more intrusion symptom
    if (intrusion1.answer === 1 || intrusion2.answer === 1) {
      return rule2;
    }
    // Experiencing one or more avoidance symptom
    if (avoidance1.answer === 1 || avoidance2.answer === 1) {
      return rule3;
    }
    // Experiencing two or more changing mood
    if (
      (mood1.answer === 1 && mood2.answer === 1) ||
      (mood1.answer === 1 && mood3.answer === 1) ||
      (mood1.answer === 1 && mood4.answer === 1) ||
      (mood2.answer === 1 && mood3.answer === 1) ||
      (mood2.answer === 1 && mood4.answer === 1) ||
      (mood3.answer === 1 && mood4.answer === 1)
    ) {
      return rule4;
    }
    if (
      (arousal1.answer === 1 && arousal2.answer === 1) ||
      (arousal1.answer === 1 && arousal3.answer === 1) ||
      (arousal1.answer === 1 && arousal4.answer === 1) ||
      (arousal2.answer === 1 && arousal3.answer === 1) ||
      (arousal2.answer === 1 && arousal4.answer === 1) ||
      (arousal3.answer === 1 && arousal4.answer === 1)
    ) {
      return rule5;
    } else {
      return <p>Hasil ...</p>;
    }
  };

  return (
    <section className="result-page">
      <div className="criteria-header">
        <h1>Hasil</h1>
      </div>
      <div className="result-top-section">
        <div className="result-conclusion">
          <div className="result-user-name">
            <p>
              Halo, <span>{localStorage.getItem("user")}</span>
            </p>
          </div>
          <div className="result-user-desc">
            <p>
              Berdasarkan jawaban yang anda berikan, sistem memberikan hasil :
            </p>
          </div>
          {result.length !== 0 && (
            <div className="result-diagnose">
              <p>{forwardChaining()}</p>
            </div>
          )}
          <div className="result-warning">
            <p>Perhatian!!!</p>
          </div>
        </div>
        <div className="result-answer-list">
          <p>Jawaban yang anda berikan sebagai berikut :</p>
          {result
            .filter(ans => ans.answer === 1)
            .map(ans => (
              <div key={ans.question}>
                <ul>
                  <li>{ans.question}</li>
                </ul>
              </div>
            ))}
        </div>
      </div>
      <div className="result-bottom-section">
        <div className="bottom-conclusion">
          {result.length !== 0 && (
            <div className="rule-conclusion">
              <p>Kesimpulan : {checkRule()}</p>
            </div>
          )}
          <div className="divider"></div>
          <div className="more-info">
            <p>
              Informasi lebih lanjut mengenai aturan dapat dilihat{" "}
              <a href="/about" onClick={() => localStorage.clear()}>
                di sini
              </a>
            </p>
          </div>
        </div>
        <div className="btn-conclusion">
          <button
            className="btn"
            onClick={() => {
              navigate("/");
              localStorage.clear();
            }}
          >
            Beranda
          </button>
        </div>
      </div>
      {/* <div className="greetings">
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
      </button> */}
    </section>
  );
};

export default Result;
