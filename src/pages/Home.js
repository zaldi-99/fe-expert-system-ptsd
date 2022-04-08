import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import component

// import style
import "./Home.css";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [nama_pengguna, setName] = useState("");
  const [email_pengguna, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/user", {
        nama_pengguna: nama_pengguna,
        email_pengguna: email_pengguna,
      })
      .then(() => {
        navigate("/detection");
      });
  };
  return (
    <>
      <div className="homepage">
        <div className="homepage-title">
          <h1>Selamat Datang</h1>
          <p className="homepage-subtitle">
            Aplikasi ini bertujuan untuk melakukan deteksi dini dari gangguan
            mental post-traumatic stress disorder
          </p>
        </div>
        <div className="btn">Mulai Test</div>
        <div>
          <h1>Masukan Nama dan Email</h1>
          <form
            onSubmit={e => {
              handleSubmit(e);
            }}
          >
            <label for="name">Nama:</label> <br />
            <input
              type="text"
              id="nama_pengguna"
              name="nama"
              onChange={e => {
                setName(e.target.value);
              }}
              required
            />
            <br />
            <label for="lname">Email:</label> <br />
            <input
              type="email"
              id="email_pengguna"
              name="email"
              onChange={e => {
                setEmail(e.target.value);
              }}
              required
            />
            <br />
            <input type="submit" value="Kirim" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
