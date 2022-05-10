import React from "react";

const ArticleItem = ({ title, description, source, url }) => {
  return (
    <div className="article-item">
      <div className="article-content">
        <div className="article-title">
          <h1>{title}</h1>
        </div>
        <div className="article-desc">
          <p>{description}</p>
        </div>
        <div className="article-source">
          <p>sumber : {source}</p>
        </div>
      </div>
      <div className="btn">
        <a href={`${url}`} target="_blank" rel="noreferrer">
          Baca Artikel
        </a>
      </div>
    </div>
  );
};

export default ArticleItem;
