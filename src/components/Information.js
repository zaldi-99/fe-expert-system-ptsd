import React from "react";
import "./Information.css";

const Information = () => {
  return (
    <section className="information-container">
      <div className="information-image">
        <div className="video-box"></div>
      </div>
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
        <div className="btn">Lihat Artikel</div>
      </div>
    </section>
  );
};

export default Information;
