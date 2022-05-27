import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const AdminArticleList = () => {
  const [articleList, setArticleList] = useState();

  const navigate = useNavigate();

  const getAllArticle = () => {
    axios.get("http://localhost:3001/api/article-list").then(res => {
      console.log(res.data);
      setArticleList(res.data);
    });
  };
  useEffect(() => {
    getAllArticle();
  }, []);

  const deleteData = id_artikel => {
    axios.delete(`http://localhost:3001/api/delete/article/${id_artikel}`);
  };

  const columns = [
    {
      name: "ID Artikel",
      selector: row => row.id_artikel,
    },
    {
      name: "Judul",
      cell: row => (
        <div>
          <p>{row.judul}</p>
        </div>
      ),
    },
    {
      name: "Deskripsi",
      cell: row => (
        <div>
          <p>{row.deskripsi}</p>
        </div>
      ),
    },
    {
      name: "Sumber",
      selector: row => row.sumber,
    },
    {
      name: "URL",
      selector: row => row.url,
    },
    {
      name: "Action",
      cell: row => (
        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            id={row.id_artikel}
            onClick={() =>
              swal({
                title: "Hapus Data",
                text: "Apakah anda yakin?",
                icon: "warning",
                dangerMode: true,
                buttons: ["Batal", "Ok"],
              }).then(willDelete => {
                if (willDelete) {
                  deleteData(row.id_artikel);
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
          <button id={row.id_artikel}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
      ),
    },
  ];
  return (
    <Fragment>
      <div>
        <h1 style={{ textAlign: "center", marginTop: 20 }}>Daftar Artikel</h1>
        <div
          className="add-symptom"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0rem 4rem",
          }}
        >
          <button onClick={() => navigate(-1)}>Kembali</button>
          <button onClick={() => navigate("/admin-add-article")}>
            Tambah Artikel
          </button>
        </div>
        <section>
          <DataTable columns={columns} data={articleList} pagination />
        </section>
      </div>
    </Fragment>
  );
};

export default AdminArticleList;
