import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";
const Modal = ({ show, closeModal }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/user", {
        nama_pengguna: name,
        email_pengguna: email,
      })
      .then(() => {
        navigate("/traumatic-detection");
      });
  };
  if (!show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Masukan Nama dan Email</h4>
        </div>
        <div className="modal-body">
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

        <div className="modal-footer">
          <button onClick={closeModal}>Batal</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
