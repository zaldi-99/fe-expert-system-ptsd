import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

import "../../pages/admin/Admin.css";

const AdminNavbar = () => {
  return (
    <nav className="a-navbar">
      <div className="a-navbar__wrapper">
        <div className="a-navbar__container-1">
          <Link to="/admin" className="a-navbar__link">
            <div className="a-navbar__item">
              <i class="fa-solid fa-house"></i>
            </div>
          </Link>
          <div className="a-navbar__menu">
            <Link to="/admin-symptom-list" className="a-navbar__link">
              <div className="a-navbar__item">
                <p>Gejala</p>
              </div>
            </Link>
            <Link to="/admin-user-list" className="a-navbar__link">
              <div className="a-navbar__item">
                <p>Pengguna</p>
              </div>
            </Link>
            <Link to="/admin-article-list" className="a-navbar__link">
              <div className="a-navbar__item">
                <p>Artikel</p>
              </div>
            </Link>
            <Link to="/admin-message-list" className="a-navbar__link">
              <div className="a-navbar__item">
                <p>Pesan</p>
              </div>
            </Link>
            <button
              className="btn-red"
              onClick={() => swal("Keluar", "Apakah anda yakin?", "warning")}
            >
              <i class="fa-solid fa-power-off"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
