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
            Home{" "}
          </Link>
          <Link to="/about" className="nav-link">
            About{" "}
          </Link>
          <Link to="" className="nav-link">
            Article{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
