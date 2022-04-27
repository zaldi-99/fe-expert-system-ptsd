import React, { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

const AdminListSymptom = () => {
  const [symptom, setSymptom] = useState();

  const navigate = useNavigate();

  const getAllSymptom = () => {
    fetch("http://localhost:3001/api/symptom")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setSymptom(res);
      });
  };
  useEffect(() => {
    getAllSymptom();
  }, []);

  const columns = [
    {
      name: "kode_gejala",
      selector: row => row.kode_gejala,
    },
    {
      name: "Gejala",
      cell: row => (
        <div>
          <p>{row.gejala}</p>
        </div>
      ),
    },
    {
      name: "Kategori",
      selector: row => row.kategori,
    },
    {
      name: "Action",
      cell: row => (
        <div style={{ display: "flex", gap: "1rem" }}>
          <button id={row.id}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
          <button id={row.id}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
      ),
    },
  ];
  return (
    <Fragment>
      <div>
        <h1 style={{ textAlign: "center", marginTop: 20 }}>Daftar Gejala</h1>
        <div
          className="add-symptom"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0rem 4rem",
          }}
        >
          <button onClick={() => navigate(-1)}>Kembali</button>
          <button onClick={() => navigate("/add-symptom")}>
            Tambah Gejala
          </button>
        </div>
        <section>
          <DataTable columns={columns} data={symptom} pagination />
        </section>
      </div>
    </Fragment>
  );
};

export default AdminListSymptom;
