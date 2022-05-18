import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

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

  // const deleteData = id_gejala => {
  //   axios.delete(`http://localhost:3001/api/delete/symptom/${id_gejala}`);
  // };

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
            id={row.id_gejala}
            // onClick={() => {
            //   deleteData(row.id_gejala);
            // }}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
          <button id={row.id_gejala}>
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
          <button onClick={() => navigate("/add-article")}>
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
