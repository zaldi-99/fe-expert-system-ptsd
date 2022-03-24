import React from "react";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";

const Router = () => {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Routers>
  );
};

export default Router;
