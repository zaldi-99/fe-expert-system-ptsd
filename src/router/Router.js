import React from "react";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import LandingAdmin from "../pages/admin/LandingAdmin";
import Home from "../pages/Home";
import IntrusionDetection from "../pages/IntrusionDetection";
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
import AdminEditSymptom from "../pages/admin/AdminEditSymptom";
import Article from "../pages/Article";
import AdminMessageList from "../pages/admin/AdminMessageList";
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
        <Route path="admin-login" element={<AdminLogin />} />
        <Route path="admin" element={<LandingAdmin />} />
        <Route path="admin-symptom-list" element={<AdminSymptomList />} />
        <Route path="admin-add-symptom" element={<AdminAddSymptom />} />
        <Route path="admin-edit-symptom/:id" element={<AdminEditSymptom />} />
        <Route path="admin-user-list" element={<AdminUsersList />} />
        <Route path="admin-article-list" element={<AdminArticleList />} />
        <Route path="admin-add-article" element={<AdminAddArticle />} />
        <Route path="admin-message-list" element={<AdminMessageList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Routers>
  );
};

export default Router;
