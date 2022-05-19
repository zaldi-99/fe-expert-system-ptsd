import React from "react";
import "../pages/Article.css";

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
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
          alt="article"
        />
      </div>
      <div className="article-card-content">
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
    </div>
  );
};

export default ArticleItem;
