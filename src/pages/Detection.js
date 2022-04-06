import React from "react";
import AvoidanceQuestion from "../components/AvoidanceQuestion";
import IntrusionQuestion from "../components/IntrusionQuestion";
import TraumaticQuestion from "../components/TraumaticQuestion";

import "./Detection.css";

const Detection = () => {
  return (
    <div className="detection-page">
      <div className="detection-box">
        <TraumaticQuestion />
        {/* <IntrusionQuestion />
        <AvoidanceQuestion /> */}
        <div className="next-btn">Selanjutnya</div>
      </div>
    </div>
  );
};

export default Detection;
