import React from "react";
import "../components/styles/SymptomCriteria.css";

const SymptomCriteria = () => {
  return (
    <section className="symptom-container">
      <div className="information-title">
        <h1>Kriteria Gejala PTSD</h1>
      </div>
      <div className="criteria-content">
        <div className="criteria-desc">
          <p>
            Berdasarkan buku DSM-5 kriteria gejala PTSD adalah sebagai berikut :
          </p>
        </div>

        <div className="symptom-list">
          <ol type="A">
            <li>
              Mengalami peristiwa traumatis seperti cedera serius, kekerasan
              fisik atau seksual, bencana alam, perang, melihat seseorang
              terbunuh atau luka parah, melihat orang yang dicintai meninggal
              dunia, dan lain sebagainya
            </li>
            <br />
            <li>
              Mengalami gejala intrusi (ingatan intrusif) yaitu ingatan yang
              tidak diinginkan, bersifat mengganggu dan datang berulang. Salah
              satunya mimpi buruk tentang peristiwa tersebut.
            </li>
            <br />
            <li>
              Mencoba menghindari berpikir atau berbicara tentang peristiwa
              traumatis, ataupun menghindari tempat, kegiatan atau orang yang
              mengingatkan seseorang pada kejadian traumatis.
            </li>
            <br />
            <li>
              Adanya perubahan negatif pada suasana hati, seperti pikiran
              negatif tentang orang lain, diri sendiri, lingkungan, serta kurang
              minat dalam melakukan aktivitas sehari hari
            </li>
            <br />
            <li>
              Adanya perubahan reaksi dan gairah seperti menjadi mudah kaget
              atau ketakutan, selalu waspada dan mudah terkejut, sulit
              berkonsentrasi, dan mengalami kesulitan tidur.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default SymptomCriteria;
