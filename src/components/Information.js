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
          <h1>Mengenal PTSD</h1>
        </div>
        <div className="information-subtitle">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus tenetur molestiae, corporis asperiores laudantium
            veniam quae ex quasi soluta aspernatur nam a earum obcaecati!
            Deserunt molestiae nihil facilis corrupti quasi?
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
