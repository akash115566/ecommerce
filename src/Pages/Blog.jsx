import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../Styles/blog.css";
import WhySkinCare from "./WhySkinCare";

const blogs = [
  {
    id: 1,
    category: "SKINCARE",
    date: "19 SEP 2026",
    title: "Why Skin Care Is Important",
    text: "Discover why a consistent skincare routine is essential for healthy, glowing and youthful-looking skin.",
    image: "/home/serum/serumwhite.jfif",
    link: "/why-skin-care",
  },
  {
    id: 2,
    category: "BEAUTY RITUALS",
    date: "17 SEP 2026",
    title: "The Secret Behind Healthy Glowing Skin",
    text: "Simple daily rituals that can help your skin maintain its natural radiance and softness.",
    image: "/home/scrub/skinscrub.jfif",
    link: "/blog/healthy-glowing-skin",
  },
  {
    id: 3,
    category: "AYURVEDA",
    date: "15 SEP 2026",
    title: "Benefits of Ayurvedic Skin Care",
    text: "Explore the timeless beauty wisdom of Ayurveda and its role in modern skincare rituals.",
    image: "/home/serum/serumdot.jfif",
    link: "/blog/ayurvedic-skin-care",
  },
  {
    id: 4,
    category: "SKIN HEALTH",
    date: "12 SEP 2026",
    title: "How to Build the Perfect Skin Care Routine",
    text: "A simple guide to creating a skincare routine that works beautifully with your everyday lifestyle.",
    image: "/home/serum/serumwhite.jfif",
    link: "/blog/skin-care-routine",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Blog() {
  return (
    <section className="blog-section">

      {/* Decorative background */}
      <div className="blog-glow blog-glow-one"></div>
      <div className="blog-glow blog-glow-two"></div>

      <div className="blog-container">

        {/* Heading */}
        <motion.div
          className="blog-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="blog-small-title">
            THE TELLUS JOURNAL
          </span>

          <h2>
            Beauty, Rituals
            <em> &amp; Skin Wisdom</em>
          </h2>

          <p>
            Discover thoughtful skincare insights, beauty rituals and
            timeless wellness wisdom curated for your skin.
          </p>
        </motion.div>


        {/* Blog Cards */}
        <motion.div
          className="blog-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >

          {blogs.map((blog) => (
            <motion.article
              className="blog-card"
              key={blog.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: {
                  duration: 0.3,
                },
              }}
            >

              {/* Image */}
              <Link
                to={blog.link}
                className="blog-image"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                />

                <div className="blog-image-overlay">
                  <span>READ ARTICLE</span>
                </div>
              </Link>


              {/* Content */}
              <div className="blog-content">

                <div className="blog-meta">
                  <span>{blog.category}</span>
                  <i></i>
                  <span>{blog.date}</span>
                </div>

                <h3>
                  {blog.title}
                </h3>

                <p>
                  {blog.text}
                </p>

                <Link
                  to={blog.link}
                  className="blog-read-more"
                >
                  READ MORE
                  <span>→</span>
                </Link>

              </div>

            </motion.article>
          ))}

        </motion.div>

      </div>
    </section>
  );
}

export default Blog;