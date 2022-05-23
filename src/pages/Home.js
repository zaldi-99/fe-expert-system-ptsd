import React, { useState } from "react";
// import component

// import style
import "./Home.css";
import Hero from "../components/Hero";
import Information from "../components/Information";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import ContactForm from "../components/ContactForm";

const Home = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="page">
      <Navbar />
      <Hero
        fn={() => {
          window.localStorage.clear();
          setIsShow(true);
        }}
      />
      <Information />
      <ContactForm />
      <Footer />
      <Modal show={isShow} closeModal={() => setIsShow(false)} />
    </div>
  );
};

export default Home;
