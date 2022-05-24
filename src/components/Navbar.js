import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">PTSD</div>
      <div className="nav-items">
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Beranda{" "}
          </Link>
          <Link to="/article" className="nav-link">
            Artikel{" "}
          </Link>
          <Link to="/about" className="nav-link">
            Tentang
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
