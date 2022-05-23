import React from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

const AdminMessageList = () => {
  const navigate = useNavigate();

  const columns = [
    {
      name: "ID Artikel",
      selector: row => row.id_artikel,
    },
    {
      name: "Judul",
      cell: row => (
        <div>
          <p>{row.judul}</p>
        </div>
      ),
    },
    {
      name: "Deskripsi",
      cell: row => (
        <div>
          <p>{row.deskripsi}</p>
        </div>
      ),
    },
    {
      name: "Sumber",
      selector: row => row.sumber,
    },
    {
      name: "URL",
      selector: row => row.url,
    },
    {
      name: "Action",
      cell: row => (
        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            id={row.id_gejala}
            // onClick={() => {
            //   deleteData(row.id_gejala);
            // }}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
          <button id={row.id_gejala}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: 20 }}>Daftar Pesan</h1>
      <div
        className="add-symptom"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0rem 4rem",
        }}
      >
        <button onClick={() => navigate(-1)}>Kembali</button>
        <button onClick={() => navigate("/add-article")}>Tambah Artikel</button>
      </div>
      <section>
        <DataTable columns={columns} pagination />
      </section>
    </div>
  );
};

export default AdminMessageList;
