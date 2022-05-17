import React from "react";
import "./styles/Hero.css";

const Hero = ({ fn }) => {
  return (
    <section className="hero-container">
      <div className="hero-text">
        <div className="hero-title">
          <h1>Selamat Datang</h1>
        </div>
        <div className="hero-subtitle">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, iure?
            Blanditiis sequi laudantium corrupti obcaecati neque deleniti modi
            possimus saepe corporis, labore expedita, iure, harum perferendis
            placeat autem nobis perspiciatis?
          </p>
        </div>
        <div className="btn" onClick={fn}>
          Mulai Test
        </div>
      </div>
      <div className="hero-video">
        <div className="video-box"></div>
      </div>
    </section>
  );
};

export default Hero;
