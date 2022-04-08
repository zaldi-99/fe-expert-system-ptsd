import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const LandingAdmin = () => {
  const [symptom, setSymptom] = useState();
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
    </div>
  );
};

export default LandingAdmin;
