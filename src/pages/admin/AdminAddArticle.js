import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminAddArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [source, setSource] = useState("");
  const [url, setUrl] = useState("");

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/article", {
        judul: title,
        deskripsi: description,
        sumber: source,
        url: url,
      })
      .then(res => {
        console.log(res);
        navigate("/article-list");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="add-symptom-page">
      <div className="add-symptom-header">
        <h1>Tambah Artikel</h1>
      </div>
      <section className="add-symptom-content">
        <div className="back-button">
          <button onClick={() => navigate(-1)}>Kembali</button>
        </div>
        <div className="add-symptom-form">
          <form
            onSubmit={e => {
              handleSubmit(e);
            }}
          >
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
            <input type="submit" value="Kirim" className="submit-btn" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default AdminAddArticle;
