import React from "react";
import "../components/styles/Loading.css";

const Loading = ({ isShow }) => {
  return (
    <div className={`${isShow ? "show-loading" : "hide-loading"} loading`}>
      <p>Memuat...</p>
    </div>
  );
};

export default Loading;
