import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import QuestionBox from "../components/QuestionBox";
import "./Home.css";

const Home = () => {
  // const [gejala, setGejala] = useState([]);

  // const getAllGejala = async () => {
  //   const res = await axios("http://localhost:3001/api/gejala");
  //   setGejala(res.data);
  // };

  // useEffect(() => {
  //   getAllGejala();
  // }, []);

  return (
    <>
      <Navbar />
      <div className="home-question">
        <QuestionBox />
      </div>
    </>
  );
};

export default Home;
