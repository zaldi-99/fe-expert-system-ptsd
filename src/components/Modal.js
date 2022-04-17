import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./Modal.css";
const Modal = ({ show, closeModal }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/user", {
        nama: name,
        gender: gender,
      })
      .then(() => {
        swal({
          title: "Berhasil!",
          text: "Silakan menjawab!",
          icon: "success",
        }).then(() => {
          navigate("/traumatic-detection");
        });
      });
  };
  if (!show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Masukan Nama dan Gender</h4>
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
            />
            <br />
            <label for="lname">Gender:</label> <br />
            <input
              type="radio"
              id="male"
              name="gender"
              onChange={e => {
                setGender(e.target.value);
              }}
              value="laki-laki"
            />
            Laki-laki
            <input
              type="radio"
              id="female"
              name="gender"
              onChange={e => {
                setGender(e.target.value);
              }}
              value="perempuan"
            />
            Perempuan
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
