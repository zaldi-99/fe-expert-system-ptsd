import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ArticleItem from "../components/ArticleItem";
import "./Article.css";
import swal from "@sweetalert/with-react";

const Article = () => {
  const [data, setData] = useState([]);
  const [headline, setHeadline] = useState([]);

  const [isFetch, setIsFetch] = useState(false);

  const getArticleData = () => {
    axios
      .get("http://localhost:3001/api/article-list")
      .then(res => {
        setData(res.data);
        setHeadline(res.data[0]);
        setIsFetch(true);
        console.log(res.data);
      })
      .catch(err => {
        swal("Oops terjadi kesalahan", `${err}`, "error");
        setIsFetch(false);
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
          <h1>Artikel Seputar PTSD</h1>
        </div>
        {isFetch ? (
          <div>
            <div className="article-headline">
              <div className="article-headline-image">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
                  alt="article headline"
                />
              </div>
              <div className="article-headline-content">
                <p className="article-headline-content-title">
                  {headline.judul}
                </p>
                <p className="article-headline-content-description">
                  {headline.deskripsi}
                </p>
                <button className="btn">
                  <a href={headline.url} target="_blank" rel="noreferrer">
                    Lihat
                  </a>
                </button>
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
          </div>
        ) : (
          <div>
            <p>Terjadi Kesalahan</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Article;
