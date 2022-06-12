import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminEditArticle = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [source, setSource] = useState("");
  const [url, setUrl] = useState("");

  return (
    <div className="add-symptom-page">
      <div className="add-symptom-header">
        <h1>Edit Artikel</h1>
      </div>
      <section className="add-symptom-content">
        <div className="back-button">
          <button className="btn" onClick={() => navigate(-1)}>
            Kembali
          </button>
        </div>
        <div className="add-symptom-form">
          <form>
            <label for="name">Judul Artikel:</label> <br />
            <input
              className="input-uppercase"
              type="text"
              id="title"
              name="title"
              onChange={e => {
                setTitle(e.target.value);
              }}
              required
            />
            <br />
            <label for="lname">Deskripsi:</label> <br />
            <input
              type="text"
              id="description"
              name="description"
              onChange={e => {
                setDescription(e.target.value);
              }}
              required
            />
            <br />
            <label for="lname">Sumber:</label> <br />
            <input
              type="text"
              id="source"
              name="source"
              onChange={e => {
                setSource(e.target.value);
              }}
              required
            />
            <label for="lname">URL:</label> <br />
            <input
              type="text"
              id="url"
              name="url"
              onChange={e => {
                setUrl(e.target.value);
              }}
              required
            />
            <br />
            <input type="submit" value="Simpan" className="submit-btn" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default AdminEditArticle;
