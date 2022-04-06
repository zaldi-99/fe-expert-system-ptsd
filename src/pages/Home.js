import React from "react";
import { Link } from "react-router-dom";
// import component

// import style
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="homepage">
        <div className="homepage-title">
          <h1>Selamat Datang</h1>
          <p className="homepage-subtitle">
            Aplikasi ini bertujuan untuk melakukan deteksi dini dari gangguan
            mental post-traumatic stress disorder
          </p>
        </div>
        <Link to="/detection">
          <div className="btn">Mulai Test</div>
        </Link>
      </div>
    </>
  );
};

export default Home;
