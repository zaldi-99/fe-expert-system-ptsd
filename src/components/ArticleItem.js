import React from "react";
import "../pages/Article.css";
import DefaultImage from "../assets/default-article.jpg";

const ArticleItem = ({ title, desc, source, url }) => {
  const truncateText = (str, num) => {
    if (num > str.length) {
      return str + "... ";
    } else {
      str = str.substring(0, num);
      return str + "... ";
    }
  };

  const truncateTitle = (str, num) => {
    if (num > str.length) {
      return str + "";
    } else {
      str = str.substring(0, num);
      return str + "...";
    }
  };
  return (
    <div className="article-card">
      <div className="article-card-image">
        <img src={DefaultImage} alt="article" />
      </div>
      <div className="article-card-content">
        <p className="article-card-title">{truncateTitle(`${title}`, 75)}</p>
        <p className="article-card-subtitle">
          {truncateText(`${desc}`, 120)}{" "}
          <span>
            <a href={`${url}`} target="_blank" rel="noreferrer">
              Selengkapnya
            </a>
          </span>
        </p>
        <div className="article-card-source">
          <p>Sumber : {source}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
