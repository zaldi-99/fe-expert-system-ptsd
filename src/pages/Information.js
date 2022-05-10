import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ArticleItem from "../components/ArticleItem";
import "./Information.css";

const Information = () => {
  const [data, setData] = useState([]);

  const getArticleData = () => {
    axios
      .get("http://localhost:3001/api/article-list")
      .then(function (res) {
        setData(res.data);
        console.log(res.data);
      })
      .catch(function (err) {
        alert(err);
        console.log(err);
      });
  };

  useEffect(() => {
    getArticleData();
  }, []);
  return (
    <Fragment>
      <Navbar />
      <section className="information-page">
        <div className="information-headline">
          <h1>Post Traumatic Stress Disorder</h1>
          <div className="information-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              facilis nobis non, eligendi hic minima excepturi. Voluptate,
              laborum dolores? Sunt vel ea neque reprehenderit, perferendis modi
              et cumque rerum quia.
            </p>
          </div>
        </div>
        <div className="article-list">
          {data.map((data, index) => (
            <ArticleItem
              key={index}
              title={data.judul}
              description={data.deskripsi}
              source={data.sumber}
              url={data.url}
            />
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Information;
