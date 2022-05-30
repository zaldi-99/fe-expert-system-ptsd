import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const AdminUsersList = () => {
  const [users, setUsers] = useState();

  const navigate = useNavigate();

  const getAllUsers = () => {
    axios
      .get("https://expert-system-ptsd.herokuapp.com/api/user-list")
      .then(res => {
        setUsers(res.data);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteUser = id_pengguna => {
    axios.delete(`https://expert-system-ptsd.herokuapp.com/api/delete/user/${id_pengguna}`);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const columns = [
    {
      name: "ID Pengguna",
      selector: row => row.id_pengguna,
    },
    {
      name: "Nama Pengguna",
      selector: row => row.nama,
    },
    {
      name: "Gender",
      selector: row => row.gender,
    },
    {
      name: "Action",
      cell: row => (
        <div>
          <button
            id={row.id_pengguna}
            onClick={() =>
              swal({
                title: "Hapus Data",
                text: "Apakah anda yakin?",
                icon: "warning",
                dangerMode: true,
                buttons: ["Batal", "Ok"],
              }).then(willDelete => {
                if (willDelete) {
                  deleteUser(row.id_pengguna);
                  swal("Berhasil Hapus Data!", "Silakan muat ulang halaman", {
                    icon: "success",
                  });
                } else {
                  swal("Data batal dihapus!");
                }
              })
            }
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      ),
    },
  ];
  return (
    <Fragment>
      <div>
        <h1 style={{ textAlign: "center", marginTop: 20 }}>Daftar Pengguna</h1>
        <div
          className="add-symptom"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0rem 4rem",
          }}
        >
          <button onClick={() => navigate(-1)}>Kembali</button>
        </div>
        <section>
          <DataTable columns={columns} data={users} pagination />
        </section>
      </div>
    </Fragment>
  );
};

export default AdminUsersList;
