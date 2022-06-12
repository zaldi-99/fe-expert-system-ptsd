import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminEditSymptom = () => {
  const navigate = useNavigate();

  const [kode_gejala, setKodeGejala] = useState("");
  const [gejala, setGejala] = useState("");
  const [kategori, setKategori] = useState("");

  const updateSymptom = () => {
    axios.put("http://localhost:3001/api/edit-symptom", {
      kode_gejala: kode_gejala,
      gejala: gejala,
      kategori: kategori,
    });
  };

  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     axios
  //       .post("http://localhost:3001/api/insert-symptom", {
  //         kode_gejala: kode_gejala,
  //         gejala: gejala,
  //         kategori: kategori,
  //       })
  //       .then(() => {
  //         navigate("/symptom-list");
  //       });
  //   };
  return (
    <div className="add-symptom-page">
      <div className="add-symptom-header">
        <h1>Edit Gejala</h1>
        <p>Silakan masukkan data gejala sesuai dengan panduan dari pakar</p>
      </div>
      <section className="add-symptom-content">
        <div className="back-button">
          <button className="btn" onClick={() => navigate(-1)}>
            Kembali
          </button>
        </div>
        <div className="add-symptom-form">
          <form
            onSubmit={() => updateSymptom()}
            // onSubmit={e => {
            //   handleSubmit(e);
            // }}
          >
            <label for="name">Kode Gejala:</label> <br />
            <input
              className="input-uppercase"
              type="text"
              id="kode_gejala"
              name="kode_gejala"
              onChange={e => {
                setKodeGejala(e.target.value);
              }}
              required
            />
            <label for="lname">Kategori:</label> <br />
            <select
              name="kategori"
              id="kategori"
              onChange={e => {
                setKategori(e.target.value);
              }}
            >
              <option value="default" hidden>
                Pilih Kategori
              </option>
              <option value="Intrusi">Intrusi</option>
              <option value="Penghindaran">Penghindaran</option>
              <option value="Mood">Perubahan Mood</option>
              <option value="Gairah">Perubahan Gairah</option>
            </select>
            <label for="lname">Gejala:</label> <br />
            <textarea
              type="text"
              id="gejala"
              name="gejala"
              onChange={e => {
                setGejala(e.target.value);
              }}
              required
              className="admin-form-long"
            />
            <input type="submit" value="Simpan" className="submit-btn" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default AdminEditSymptom;
