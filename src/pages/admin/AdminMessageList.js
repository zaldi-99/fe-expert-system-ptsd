import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

const AdminMessageList = () => {
  const navigate = useNavigate();

  const [feedback, setFeedback] = useState();

  const getAllFeedback = () => {
    axios.get("https://expert-system-ptsd.herokuapp.com/api/feedback-list").then(res => {
      console.log(res.data);
      setFeedback(res.data);
    });
  };

  useEffect(() => {
    getAllFeedback();
  }, []);

  const columns = [
    {
      name: "ID Feedback",
      selector: row => row.id_feedback,
    },
    {
      name: "Nama Pengguna",
      selector: row => row.nama,
    },
    {
      name: "Email Pengguna",
      selector: row => row.email,
    },
    {
      name: "Subjek",
      selector: row => row.subjek,
    },
    {
      name: "Pesan",
      cell: row => (
        <div>
          <p>{row.pesan}</p>
        </div>
      ),
    },
    {
      name: "Action",
      cell: row => (
        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            id={row.id_feedback}
            // onClick={() => {
            //   deleteData(row.id_gejala);
            // }}
          >
            <i className="fa-solid fa-trash-can"></i>
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
      </div>
      <section>
        <DataTable columns={columns} data={feedback} pagination />
      </section>
    </div>
  );
};

export default AdminMessageList;
