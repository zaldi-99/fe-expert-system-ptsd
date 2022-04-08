import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const LandingAdmin = () => {
  const [symptom, setSymptom] = useState();
  // new symptom state
  const [kode_gejala, setKodeGejala] = useState("");
  const [gejala, setGejala] = useState("");
  const [kategori, setKategori] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/insert", {
        kode_gejala: kode_gejala,
        gejala: gejala,
        kategori: kategori,
      })
      .then(() => {
        alert("success");
      });
  };

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
      selector: row => row.gejala,
    },
    {
      name: "Kategori",
      selector: row => row.kategori,
    },
    {
      name: "Action",
      cell: row => (
        <div>
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
    <div>
      <button>Tambah Gejala</button>
      <DataTable columns={columns} data={symptom} pagination />
      <div>
        <h1>Tambah Gejala</h1>
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

export default LandingAdmin;
