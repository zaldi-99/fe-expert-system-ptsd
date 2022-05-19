import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ArticleItem from "../components/ArticleItem";
import "./Article.css";

const Article = () => {
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
    <div className="page">
      <Navbar />
      <section className="article-page">
        <div className="article-header">
          <p>Artikel Seputar PTSD</p>
        </div>
        <div className="article-headline">
          <div className="article-headline-image">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
              alt="article headline"
            />
          </div>
          <div className="article-headline-content">
            <p className="article-headline-content-title">Judul Artikel</p>
            <p className="article-headline-content-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
              repellendus! Distinctio nostrum ut quae asperiores similique
              dicta, aliquam mollitia tempora eaque nihil. Recusandae
              repellendus doloribus veniam consectetur exercitationem, iure
              inventore!
            </p>
            <button className="btn">Lihat</button>
          </div>
        </div>
        <div className="article-list">
          {data.map((data, index) => (
            <ArticleItem
              key={index}
              title={data.judul}
              desc={data.deskripsi}
              source={data.sumber}
              url={data.url}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Article;
