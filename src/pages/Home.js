import React, { Fragment } from "react";
// import component

// import style
import "./Home.css";
import Hero from "../components/Hero";
import Information from "../components/Information";
import Navbar from "../components/Navbar";
import Symptom from "../components/Symptom";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Information />
      <Symptom />
      <Feedback />
      <Footer />
    </Fragment>
  );
};

export default Home;
