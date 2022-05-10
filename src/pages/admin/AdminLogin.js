import React from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login Admin Sistem Pakar PTSD</h1>
      <button onClick={() => navigate("/admin")}>Masuk</button>
    </div>
  );
};

export default AdminLogin;
