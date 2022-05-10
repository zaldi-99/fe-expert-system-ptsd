import React, { Fragment } from "react";
import ArticleItem from "../components/ArticleItem";
import Navbar from "../components/Navbar";
import "./Information.css";

const Information = () => {
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
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
        </div>
      </section>
    </Fragment>
  );
};

export default Information;
