import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminAddSymptom = () => {
  // new symptom state
  const [kode_gejala, setKodeGejala] = useState("");
  const [gejala, setGejala] = useState("");
  const [kategori, setKategori] = useState("");

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/insert-symptom", {
        kode_gejala: kode_gejala,
        gejala: gejala,
        kategori: kategori,
      })
      .then(() => {
        navigate("/symptom-list");
      });
  };

  return (
    <div className="add-symptom-page">
      <div className="add-symptom-title">
        <h1>Tambah Gejala</h1>
      </div>
      <div className="back-button">
        <button onClick={() => navigate(-1)}>Kembali</button>
      </div>
      <div className="add-symptom-form">
        <form
          onSubmit={e => {
            handleSubmit(e);
          }}
        >
          <label for="name">Kode Gejala:</label> <br />
          <input
            type="text"
            id="kode_gejala"
            name="kode_gejala"
            onChange={e => {
              setKodeGejala(e.target.value);
            }}
            required
          />
          <br />
          <label for="lname">Gejala:</label> <br />
          <input
            type="text"
            id="gejala"
            name="gejala"
            onChange={e => {
              setGejala(e.target.value);
            }}
            required
          />
          <br />
          <label for="lname">Kategori:</label> <br />
          <input
            type="text"
            id="kategori"
            name="kategori"
            onChange={e => {
              setKategori(e.target.value);
            }}
            required
          />
          <br />
          <input type="submit" value="Kirim" />
        </form>
      </div>
    </div>
  );
};

export default AdminAddSymptom;