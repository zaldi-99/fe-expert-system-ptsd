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
          <Link to="" className="nav-link">
            Informasi{" "}
          </Link>
          <Link to="" className="nav-link">
            Feedback
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
