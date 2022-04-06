import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">PTSD</div>
      <div className="nav-items">
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Beranda{" "}
          </Link>
          <Link to="" className="nav-link">
            Tentang Kami{" "}
          </Link>
          <Link to="/about" className="nav-link">
            Hubungi Kami{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
