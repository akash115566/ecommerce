import React from "react";
import { Link } from "react-router-dom";
import "../Styles/forbesarticle.css";

function ForbesArticle() {
  return (
    <main className="article-page">

      <div className="article-layout">

        {/* =================================
            LEFT - MAIN ARTICLE
        ================================= */}

        <article className="article-main">

          <h1>
            Forbes India | 10th July 2026
          </h1>

          <p className="article-date">
            July 29, 2026
          </p>

          {/* MAIN IMAGE */}

          <div className="article-image">
            <img
              src="/home/slide/tellus.jfif"
              alt="Forbes India"
            />
          </div>

          {/* FULL ARTICLE */}

          <a
            href="https://www.forbesindia.com/article/news/deep-dive/how-forest-essentials-put-heritage-into-a-bottle-and-on-the-global-map/2996315/1"
            target="_blank"
            rel="noopener noreferrer"
            className="article-full-link"
          >
            Click here to read the full article.
          </a>

          {/* AUTHOR */}

          <div className="article-author">

            <img
              src="/home/slide/tellussoap.jfif"
              alt="Forest Essentials"
            />

            <div>
              <span>By</span>

              <h3>
                Forest Essentials
              </h3>
            </div>

          </div>

          {/* TAGS */}

          <div className="article-tags">

            <h4>Tags</h4>

            <Link to="/tags/ayurveda">
              Ayurveda
            </Link>

            <Link to="/tags/forest-essentials">
              Forest Essentials
            </Link>

          </div>

        </article>


        {/* =================================
            RIGHT SIDEBAR
        ================================= */}

        <aside className="article-sidebar">

          <h3>
            Latest Reads
          </h3>

          {/* SIDEBAR ITEM 1 */}

          <div className="sidebar-post">

            <img
              src="/home/slide/tellusname.jfif"
              alt="Sustainability"
            />

            <div>
              <h4>
                NOTHING MEANT TO BE WASTED
              </h4>

              <p>
                July 25, 2026
              </p>
            </div>

          </div>


          {/* SIDEBAR ITEM 2 */}

          <div className="sidebar-post">

            <img
              src="/home/slide/tellusdrop.jfif"
              alt="Ayurvedic Ritual"
            />

            <div>
              <h4>
                EVERY DROP, THOUGHTFULLY
                RETURNED
              </h4>

              <p>
                July 20, 2026
              </p>
            </div>

          </div>


          {/* SIDEBAR ITEM 3 */}

          <div className="sidebar-post">

            <img
              src="/home/slide/tellussoap.jfif"
              alt="Beauty Ritual"
            />

            <div>
              <h4>
                BEAUTY ROOTED IN AYURVEDA
              </h4>

              <p>
                July 15, 2026
              </p>
            </div>

          </div>


          {/* WHAT'S NEW */}

          <h3 className="whats-new-title">
            What's New?
          </h3>

          <div className="whats-new">

            <img
              src="/home/slide/tellus.jfif"
              alt="What's New"
            />

          </div>

        </aside>

      </div>

    </main>
  );
}

export default ForbesArticle;