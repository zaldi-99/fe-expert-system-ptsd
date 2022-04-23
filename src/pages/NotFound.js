import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Halaman Tidak Ditemukan</h1>
      <div className="btn" onClick={() => navigate("/")}>
        Kembali
      </div>
    </div>
  );
};

export default NotFound;
