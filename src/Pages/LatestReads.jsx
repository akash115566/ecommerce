import React from "react";
import { Link } from "react-router-dom";
import "../Styles/latestreads.css";

const articles = [
  {
    id: "forbes-india",
    category: "Media & Press",
    title: "FORBES INDIA | 10TH JULY 2026",
    image: "/home/slide/tellus.jfif",
  },
  {
    id: "nothing-meant-to-be-wasted",
    category: "Sustainability",
    title: "NOTHING MEANT TO BE WASTED",
    image: "/home/slide/tellusdrop.jfif",
  },
  {
    id: "every-drop-thoughtfully-returned",
    category: "Sustainability",
    title: "EVERY DROP, THOUGHTFULLY RETURNED",
    image: "/home/slide/tellussoap.jfif",
  },
];

function LatestReads() {
  return (
    <section className="latest-reads-section">

      {/* HEADER */}
      <div className="latest-reads-header">
        <h2>LATEST READS</h2>

        <Link
          to="/latest-reads"
          className="latest-view-all"
        >
          VIEW ALL <span>→</span>
        </Link>
      </div>

      {/* 3 CARDS */}
      <div className="latest-reads-grid">

       {articles.map((article) => (
  <Link
    key={article.id}
    to="/forbes-article"
    className="latest-read-card"
  >
    <div className="latest-read-image">
      <img
        src={article.image}
        alt={article.title}
      />
    </div>

    <div className="latest-read-content">
      <span className="latest-read-category">
        {article.category}
      </span>

      <h3>{article.title}</h3>

      <div className="read-more">
        Read More <span>→</span>
      </div>
    </div>
  </Link>
))}

      </div>

    </section>
  );
}

export default LatestReads;