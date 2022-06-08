import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
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

  const navigate = useNavigate();

  useEffect(() => {
    const d = JSON.parse(localStorage.getItem("temp"));
    setResult(d);
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
  }, []);

  const forwardChaining = () => {
    const positif = "Positif";
    const negatif = "Negatif";

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
      mood1.answer === 1 ||
      mood2.answer === 1 ||
      mood3.answer === 1 ||
      mood4.answer === 1
    ) {
      return negatif;
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
    }
    if (
      arousal1.answer === 1 ||
      arousal2.answer === 1 ||
      arousal3.answer === 1 ||
      arousal4.answer === 1
    ) {
      return negatif;
    } else {
      for (let i = 1; i < result.length; i++) {
        if (result[i].answer === 0) {
          return negatif;
        }
      }
    }
  };

  const checkRule = () => {
    const rule1 = "Tidak mengalami peristiwa traumatis";
    const rule2 = "Mengalami peristiwa traumatis diikuti dengan gejala intrusi";
    const rule3 =
      "Mengalami peristiwa traumatis diikuti dengan gejala penghindaran";
    const rule4 =
      "Mengalami peristiwa traumatis diikuti dengan gejala perubahan suasana hati";
    const rule5 =
      "Mengalami peristiwa traumatis tetapi hanya diikuti dengan satu gejala penghindaran";
    const rule6 =
      "Mengalami peristiwa traumatis diikuti dengan gejala perubahan gairah dan reaktivitas";
    const rule7 =
      "Mengalami peristiwa traumatis tetapi hanya diikuti dengan satu gejala perubahan gairah dan reaktivitas";
    const rule8 =
      "Mengalami peristiwa traumatis tetapi tidak diikuti gejala PTSD";

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
      mood1.answer === 1 ||
      mood2.answer === 1 ||
      mood3.answer === 1 ||
      mood4.answer === 1
    ) {
      return rule5;
    }
    if (
      (arousal1.answer === 1 && arousal2.answer === 1) ||
      (arousal1.answer === 1 && arousal3.answer === 1) ||
      (arousal1.answer === 1 && arousal4.answer === 1) ||
      (arousal2.answer === 1 && arousal3.answer === 1) ||
      (arousal2.answer === 1 && arousal4.answer === 1) ||
      (arousal3.answer === 1 && arousal4.answer === 1)
    ) {
      return rule6;
    }
    if (
      arousal1.answer === 1 ||
      arousal2.answer === 1 ||
      arousal3.answer === 1 ||
      arousal4.answer === 1
    ) {
      return rule7;
    } else {
      for (let i = 1; i < result.length; i++) {
        if (result[i].answer === 0) {
          return rule8;
        }
      }
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
            <p>
              Hasil di atas merupakan hasil dari sistem, dimana sistem hanya
              melakukan diagnosa berdasarkan gejala yang dialami. Penanganan
              lebih lanjut segera temukan bantuan profesional yang anda percaya.
            </p>
          </div>
        </div>
        <div className="result-answer-list">
          <div className="result-answer-list-title">
            <p>Gejala yang anda alami adalah sebagai berikut* :</p>
            <p className="term">*berdasarkan jawaban yang anda berikan</p>
          </div>
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
              Informasi lebih lanjut dapat dilihat{" "}
              <a href="/about" target="_blank">
                di sini
              </a>
            </p>
          </div>
        </div>
        <div className="btn-conclusion">
          <button
            className="btn"
            onClick={() => {
              swal({
                title: "Terima kasih!",
                text: "Semoga sehat selalu",
                icon: "success",
              }).then(() => {
                navigate("/");
              });
              localStorage.clear();
            }}
          >
            Beranda
          </button>
        </div>
      </div>
      <div className="regards">
        <i class="fa-solid fa-circle-info"></i>{" "}
        <span>Sistem tidak menyimpan riwayat hasil diagnosa</span>
      </div>
      {/* <div className="regards">
        <p>Terima kasih telah menggunakan sistem pakar diagnosa PTSD</p>
      </div> */}
    </section>
  );
};

export default Result;
