import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ArticleItem from "../components/ArticleItem";
import "./Article.css";
import swal from "@sweetalert/with-react";
import Footer from "../components/Footer";

const Article = () => {
  const [data, setData] = useState([]);
  const [headline, setHeadline] = useState([]);

  const [isFetch, setIsFetch] = useState(true);

  // const getArticleData = () => {
  //   axios
  //     .get("http://localhost:3001/api/article-list")
  //     .then(res => {
  //       setData(res.data);
  //       setHeadline(res.data[0]);
  //       setIsFetch(true);
  //       console.log(res.data);
  //     })
  //     .catch(err => {
  //       swal("Oops terjadi kesalahan", `${err}`, "error");
  //       setIsFetch(false);
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   getArticleData();
  // }, []);

  const truncateTitle = (str, num) => {
    if (num > str.length) {
      return str + "";
    } else {
      str = str.substring(0, num);
      return str + "...";
    }
  };
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
                  {/* {headline.judul} */}
                  Judul Artikel
                </p>
                <p className="article-headline-content-description">
                  {/* {headline.deskripsi} */}
                  {truncateTitle(
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaqueipsa quae ab illo inventore veritatis et quasi architectobeatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatemquia voluptas sit aspernatur aut odit aut fugit, sed quiaconsequuntur magni dolores eos qui ratione voluptatem sequinesciunt. Neque porro quisquam est, qui dolorem ipsum quia",
                    200
                  )}
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
              {/* {data.map((data, index) => (
                <ArticleItem
                  key={index}
                  title={data.judul}
                  desc={data.deskripsi}
                  source={data.sumber}
                  url={data.url}
                />
              ))} */}
              <ArticleItem
                title="Judul artikel"
                desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                source="kompas.com"
                url="https://www.kompas.com/"
              />
              <ArticleItem
                title="Judul artikel"
                desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                source="kompas.com"
                url="https://www.kompas.com/"
              />
              <ArticleItem
                title="Judul artikel"
                desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                source="kompas.com"
                url="https://www.kompas.com/"
              />
              <ArticleItem
                title="Judul artikel"
                desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                source="kompas.com"
                url="https://www.kompas.com/"
              />
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
