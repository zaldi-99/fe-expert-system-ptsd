import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Information.css";

const Information = () => {
  const navigate = useNavigate();
  return (
    <section className="information-container">
      <iframe
        className="information-video"
        src="https://www.youtube.com/embed/CLyZjUVkhEQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="information-text">
        <div className="information-title">
          <h1>Seputar PTSD</h1>
        </div>
        <div className="information-subtitle">
          <p>
            Posttraumatic stress disorder (PTSD) atau gangguan stress
            pascatrauma adalah gangguan mental yang terjadi setelah seseorang
            mengalami atau menyaksikan peristiwa traumatis. Gejala yang identik
            dengan PTSD adalah teringat kembali pada kejadian traumatis, namun
            tidak semua orang yang teringat dengan peristiwa traumatis berarti
            terserang PTSD. Silahkan simak video dan informasi lebih lanjut
            seputar PTSD pada halaman artikel.
          </p>
        </div>
        <div className="btn" onClick={() => navigate("/article")}>
          Lihat Artikel
        </div>
      </div>
    </section>
  );
};

export default Information;
