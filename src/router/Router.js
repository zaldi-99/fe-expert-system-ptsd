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
import AvoidanceDetection from "../pages/AvoidanceDetection";
import MoodDetection from "../pages/MoodDetection";
import ArousalDetection from "../pages/ArousalDetection";
import AdminAddArticle from "../pages/admin/AdminAddArticle";
import Result from "../pages/Result";

const Router = () => {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="information" element={<Information />} />
        <Route path="traumatic-detection" element={<TraumaticDetection />} />
        <Route path="intrusion-detection" element={<IntrusionDetection />} />
        <Route path="avoidance-detection" element={<AvoidanceDetection />} />
        <Route path="mood-detection" element={<MoodDetection />} />
        <Route path="arousal-detection" element={<ArousalDetection />} />
        <Route path="result" element={<Result />} />
        <Route path="login-admin" element={<AdminLogin />} />
        <Route path="admin" element={<LandingAdmin />} />
        <Route path="symptom-list" element={<AdminSymptomList />} />
        <Route path="add-symptom" element={<AdminAddSymptom />} />
        <Route path="user-list" element={<AdminUsersList />} />
        <Route path="article-list" element={<AdminArticleList />} />
        <Route path="add-article" element={<AdminAddArticle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Routers>
  );
};

export default Router;
