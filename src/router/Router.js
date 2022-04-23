import React from "react";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import LandingAdmin from "../pages/admin/LandingAdmin";
import Detection from "../pages/Detection";
import Home from "../pages/Home";
import IntrusionDetection from "../pages/IntrusionDetection";

const Router = () => {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="traumatic-detection" element={<Detection />} />
        <Route path="intrusion-detection" element={<IntrusionDetection />} />
        <Route path="admin" element={<LandingAdmin />} />
      </Routes>
    </Routers>
  );
};

export default Router;
