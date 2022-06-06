import React, { useEffect, useState } from "react";
import "./styles/Hero.css";
import Logo from "../assets/hello.svg";
import axios from "axios";

const Hero = ({ fn }) => {
  const [isClose, setIsClose] = useState(false);

  const initiate = () => {
    axios.get("https://expert-system-ptsd.herokuapp.com/");
  };

  useEffect(() => {
    initiate();
  }, []);

  const closeHandler = () => {
    setIsClose(!isClose);
  };

  return (
    <section
      className={
        isClose ? "hero-container hero-container-close" : "hero-container"
      }
    >
      <div className="hero-text">
        <div className="hero-title">
          <h1>Selamat Datang</h1>
        </div>
        <div className="hero-subtitle">
          <p>
            Website ini merupakan sebuah sistem pakar yang dapat melakukan
            deteksi dini dari kemungkinan seseorang menderita posttraumatic
            stress disorder. Proses diagnosa dilakukan berdasarkan kriteria
            gejala dari PTSD yaitu diagnosa trauma, diagnosa intrusi/intrusif,
            diagnosa penghindaran, diagnosa perubahan suasana hati, dan
            perubahan gairah dan reaktivitas. Silakan klik 'Mulai Test' untuk
            menggunakan fitur diagnosa.
          </p>
        </div>
        <div className="btn" onClick={fn}>
          Mulai Test
        </div>
        <div
          className={
            isClose
              ? "hero-disclaimer hero-disclaimer--active"
              : "hero-disclaimer"
          }
        >
          <div className="hero-disclaimer-wrapper">
            <p className="disclaimer-title">Disclaimer:</p>
            <p className="disclaimer-message">
              {/* Sistem ini tidak direkomendasikan apabila anda dalam kondisi
              krisis yang mengancam hidup Anda. */}
              Sistem ini bukan merupakan layanan darurat, sistem ini ditujukan
              untuk melakukan deteksi dini dari adanya kemungkinan gangguan
              PTSD.
            </p>
          </div>
          <p className="hero-disclaimer-close" onClick={closeHandler}>
            X
          </p>
        </div>
      </div>
      <div className="hero-image">
        <img src={Logo} alt="logo" />
      </div>
    </section>
  );
};

export default Hero;
