import React from "react";

const ArticleItem = ({ title, description, source, url }) => {
  const truncateText = (str, num) => {
    if (num > str.length) {
      return str + " ...Selengkapnya";
    } else {
      str = str.substring(0, num);
      return str + " ...Selengkapnya";
    }
  };
  return (
    <div className="article-item">
      <div className="article-content">
        <div className="article-title">
          <h1>{title}</h1>
        </div>
        <div className="article-desc">
          <a href={`${url}`} target="_blank" rel="noreferrer">
            {truncateText(`${description}`, 120)}
          </a>
        </div>
        <div className="article-source">
          <p>sumber : {source}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
