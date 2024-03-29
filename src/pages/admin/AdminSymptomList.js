import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const AdminListSymptom = () => {
  const [symptom, setSymptom] = useState();

  const navigate = useNavigate();

  const getAllSymptom = () => {
    axios
      .get("https://expert-system-ptsd.herokuapp.com/api/symptom")
      .then(res => {
        console.log(res.data);
        setSymptom(res.data);
      });
  };
  useEffect(() => {
    getAllSymptom();
  }, []);

  const deleteData = id_gejala => {
    axios.delete(
      `https://expert-system-ptsd.herokuapp.com/api/delete/symptom/${id_gejala}`
    );
  };

  const columns = [
    {
      name: "Kode Gejala",
      selector: row => row.kode_gejala,
    },
    {
      name: "Gejala",
      cell: row => (
        <div>
          <p>{row.gejala}</p>
        </div>
      ),
    },
    {
      name: "Kategori",
      selector: row => row.kategori,
    },
    {
      name: "Action",
      cell: row => (
        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            id={row.id_gejala}
            onClick={() =>
              swal({
                title: "Hapus Data",
                text: "Apakah anda yakin?",
                icon: "warning",
                dangerMode: true,
                buttons: ["Batal", "Ok"],
              }).then(willDelete => {
                if (willDelete) {
                  deleteData(row.id_gejala);
                  swal(
                    "Berhasil Hapus Data!",
                    "Sistem akan memuat ulang halaman",
                    {
                      icon: "success",
                    }
                  );
                  window.location.reload(true);
                } else {
                  swal("Data batal dihapus!");
                }
              })
            }
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
          <button
            id={row.id_gejala}
            onClick={() => navigate(`/admin-edit-symptom/${row.id_gejala}`)}
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
      ),
    },
  ];
  return (
    <Fragment>
      <div>
        <h1 style={{ textAlign: "center", marginTop: 20 }}>Daftar Gejala</h1>
        <div
          className="add-symptom"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0rem 4rem",
          }}
        >
          <button className="btn" onClick={() => navigate("/admin")}>
            Beranda
          </button>
          <button
            className="btn-green"
            onClick={() => navigate("/admin-add-symptom")}
          >
            Tambah Gejala
          </button>
        </div>
        <section>
          <DataTable columns={columns} data={symptom} pagination />
        </section>
      </div>
    </Fragment>
  );
};

export default AdminListSymptom;
