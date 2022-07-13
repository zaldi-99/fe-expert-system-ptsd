import React from "react";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import IntrusionDetection from "../pages/IntrusionDetection";
import NotFound from "../pages/NotFound";
import TraumaticDetection from "../pages/TraumaticDetection";
import AvoidanceDetection from "../pages/AvoidanceDetection";
import MoodDetection from "../pages/MoodDetection";
import ArousalDetection from "../pages/ArousalDetection";
import Result from "../pages/Result";
import Article from "../pages/Article";
import AboutSystem from "../pages/AboutSystem";

const Router = () => {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="article" element={<Article />} />
        <Route path="about" element={<AboutSystem />} />
        <Route path="traumatic-detection" element={<TraumaticDetection />} />
        <Route path="intrusion-detection" element={<IntrusionDetection />} />
        <Route path="avoidance-detection" element={<AvoidanceDetection />} />
        <Route path="mood-detection" element={<MoodDetection />} />
        <Route path="arousal-detection" element={<ArousalDetection />} />
        <Route path="result" element={<Result />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Routers>
  );
};

export default Router;
