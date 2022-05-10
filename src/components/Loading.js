import React from "react";

const Loading = ({ isShow }) => {
  if (!isShow) {
    return null;
  }
  return <div>Loading...</div>;
};

export default Loading;
