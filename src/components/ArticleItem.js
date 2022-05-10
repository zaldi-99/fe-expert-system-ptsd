import React from "react";

const ArticleItem = () => {
  return (
    <div className="article-item">
      <div className="article-content">
        <div className="article-title">
          <h1>Artikel 1</h1>
        </div>
        <div className="article-desc">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim illo
            ratione nam ea. Facilis dolore tenetur, blanditiis totam error sunt
            est! Animi enim eum quaerat ullam itaque officiis? Placeat, sint?
          </p>
        </div>
        <div className="article-source">
          <p>sumber : satupersen.net</p>
        </div>
      </div>
      <div className="btn">Baca Artikel</div>
    </div>
  );
};

export default ArticleItem;
