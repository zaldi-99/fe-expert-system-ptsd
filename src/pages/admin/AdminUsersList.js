import React, { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

const AdminUsersList = () => {
  const [users, setUsers] = useState();

  const navigate = useNavigate();

  const getAllUsers = () => {
    fetch("http://localhost:3001/api/user-list")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setUsers(res);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const columns = [
    {
      name: "ID",
      selector: row => row.id_pengguna,
    },
    {
      name: "Nama Pengguna",
      selector: row => row.nama,
    },
    {
      name: "Gender",
      selector: row => row.gender,
    },
    {
      name: "Action",
      cell: row => (
        <div style={{ display: "flex", gap: "1rem" }}>
          <button id={row.id}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      ),
    },
  ];
  return (
    <Fragment>
      <div>
        <h1 style={{ textAlign: "center", marginTop: 20 }}>Daftar Pengguna</h1>
        <div
          className="add-symptom"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0rem 4rem",
          }}
        >
          <button onClick={() => navigate(-1)}>Kembali</button>
        </div>
        <section>
          <DataTable columns={columns} data={users} pagination />
        </section>
      </div>
    </Fragment>
  );
};

export default AdminUsersList;
