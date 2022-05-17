import React, { useState } from "react";
// import component

// import style
import "./Home.css";
import Hero from "../components/Hero";
import Information from "../components/Information";
import Navbar from "../components/Navbar";
import Symptom from "../components/Symptom";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

const Home = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="page">
      <Navbar />
      <Hero fn={() => setIsShow(true)} />
      <Information />
      <Symptom />
      <Feedback />
      <Footer />
      <Modal show={isShow} />
    </div>
  );
};

export default Home;
