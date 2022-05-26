import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const burgerHandler = () => {
    setIsOpen(!isOpen)
  }

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

        <button className={isOpen ? "menu-burger opened-burger" : "menu-burger"} onClick={burgerHandler} aria-label="Main Menu">
          <svg width="30" height="30" viewBox="0 0 100 100">
            <path className="line-burger line-burger1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
            <path className="line-burger line-burger2" d="M 20,50 H 80" />
            <path className="line-burger line-burger3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
          </svg>
        </button>
      </div>

      <div className={isOpen ? "nav-items-responsive nav-items-active" : "nav-items-responsive"}>
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
  );
};

export default Navbar;
