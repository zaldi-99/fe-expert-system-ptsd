import React from "react";
import "./styles/Hero.css";
import Logo from "../assets/hello.svg";

const Hero = ({ fn }) => {
  return (
    <section className="hero-container">
      <div className="hero-text">
        <div className="hero-title">
          <h1>Selamat Datang</h1>
        </div>
        <div className="hero-subtitle">
          <p>
            Website ini merupakan sebuah sistem pakar yang dapat melakukan
            diagnosa dari kemungkinan pengguna menderita posttraumatic stress
            disorder. Silakan klik 'Mulai Test' untuk menggunakan fitur
            diagnosa.
          </p>
        </div>
        <div className="btn" onClick={fn}>
          Mulai Test
        </div>
        <div className="hero-disclaimer">
          <p className="disclaimer-title">Disclaimer</p>
          <p className="disclaimer-message">
            Sistem ini tidak direkomendasikan apabila anda dalam kondisi krisis
            yang mengancam hidup Anda.
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
