import React from "react";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Detection from "../pages/Detection";
import Home from "../pages/Home";

const Router = () => {
  return (
    <Routers>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detection" element={<Detection />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Routers>
  );
};

export default Router;
