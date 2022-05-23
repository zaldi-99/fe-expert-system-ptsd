import React, { Fragment } from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";

import "../admin/Admin.css";

const LandingAdmin = () => {
  return (
    <Fragment>
      <AdminNavbar />
      <section>
        <h1>Selamat Datang Kembali, Admin sayang</h1>
      </section>
    </Fragment>
  );
};

export default LandingAdmin;
