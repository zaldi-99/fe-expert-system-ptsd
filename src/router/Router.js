import React from "react";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import LandingAdmin from "../pages/admin/LandingAdmin";
import Home from "../pages/Home";
import IntrusionDetection from "../pages/IntrusionDetection";
import Information from "../pages/Information";
import NotFound from "../pages/NotFound";
import AdminSymptomList from "../pages/admin/AdminSymptomList";
import AdminAddSymptom from "../pages/admin/AdminAddSymptom";
import AdminUsersList from "../pages/admin/AdminUsersList";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminArticleList from "../pages/admin/AdminArticleList";
import TraumaticDetection from "../pages/TraumaticDetection";

const Router = () => {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="information" element={<Information />} />
        <Route path="traumatic-detection" element={<TraumaticDetection />} />
        <Route path="intrusion-detection" element={<IntrusionDetection />} />
        <Route path="login-admin" element={<AdminLogin />} />
        <Route path="admin" element={<LandingAdmin />} />
        <Route path="symptom-list" element={<AdminSymptomList />} />
        <Route path="add-symptom" element={<AdminAddSymptom />} />
        <Route path="user-list" element={<AdminUsersList />} />
        <Route path="article-list" element={<AdminArticleList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Routers>
  );
};

export default Router;
