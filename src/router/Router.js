import React from "react";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import LandingAdmin from "../pages/admin/LandingAdmin";
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
        <Route path="admin" element={<LandingAdmin />} />
      </Routes>
    </Routers>
  );
};

export default Router;
