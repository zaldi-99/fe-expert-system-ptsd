import React, { useState } from "react";
// import component

// import style
import "./Home.css";
import Modal from "../components/Modal";

const Home = () => {
  const [isShowModal, setIsShowModal] = useState(false);

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
        <div className="btn" onClick={() => setIsShowModal(true)}>
          Mulai Test
        </div>
        <Modal show={isShowModal} closeModal={() => setIsShowModal(false)} />
      </div>
    </>
  );
};

export default Home;
