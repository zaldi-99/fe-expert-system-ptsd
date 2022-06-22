import React, { Fragment, useEffect, useState } from "react";
import moment from "moment";
import Moment from "react-moment";
import AdminNavbar from "../../components/admin/AdminNavbar";

import "../admin/Admin.css";

const LandingAdmin = () => {
  const currentDateTime = moment();
  const [dateToFormat, setdateToFormat] = useState(currentDateTime);

  // const updateTime = () => {
  //   let clock = currentDateTime;
  // };

  setInterval(currentDateTime, 1000);

  useEffect(() => {
    let time = currentDateTime;
    setdateToFormat(time);
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <AdminNavbar />
      <section className="admin-landing">
        <div className="admin-landing-greetings">
          <h1>Selamat datang, admin</h1>
        </div>
        <div className="time">
          <Moment interval={1} unit="seconds" format="HH:mm">
            {dateToFormat}
          </Moment>
        </div>
        <div className="date">
          <Moment format="dddd, MMMM Do YYYY">{currentDateTime}</Moment>
        </div>
      </section>
    </Fragment>
  );
};

export default LandingAdmin;
