import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ArticleItem from "../components/ArticleItem";
import "./Article.css";
import swal from "@sweetalert/with-react";
import Footer from "../components/Footer";

import DefaultImage from "../assets/default-article.jpg";

const Article = () => {
  const [data, setData] = useState([]);
  const [headline, setHeadline] = useState([]);

  const [isFetch, setIsFetch] = useState(true);

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
                <img src={DefaultImage} alt="article headline" />
              </div>
              <div className="article-headline-content">
                <p className="article-headline-content-title">
                  {headline.judul}
                </p>
                <p className="article-headline-content-description">
                  {headline.deskripsi}
                </p>
                <button className="btn">
                  <a
                    href="https://www.kompas.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
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
      <Footer />
    </div>
  );
};

export default Article;
