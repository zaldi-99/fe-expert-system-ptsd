import React from "react";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import LandingAdmin from "../pages/admin/LandingAdmin";
import ArousalDetection from "../pages/ArousalDetection";
import AvoidanceDetection from "../pages/AvoidanceDetection";
import Detection from "../pages/Detection";
import Home from "../pages/Home";
import IntrusionDetection from "../pages/IntrusionDetection";
import MoodDetection from "../pages/MoodDetection";

const Router = () => {
  return (
    <Routers>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="traumatic-detection" element={<Detection />} />
        <Route path="intrusion-detection" element={<IntrusionDetection />} />
        <Route path="avoidance-detection" element={<AvoidanceDetection />} />
        <Route path="mood-detection" element={<MoodDetection />} />
        <Route path="arousal-detection" element={<ArousalDetection />} />
        <Route path="about" element={<About />} />
        <Route path="admin" element={<LandingAdmin />} />
      </Routes>
    </Routers>
  );
};

export default Router;
