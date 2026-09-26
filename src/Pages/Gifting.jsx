import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../Styles/gifting.css";

const corporateGifts = [
  {
    image: "/home/gift/giftcamel.jfif",
    title: "Luxury Corporate Hampers",
    text: "Thoughtfully curated luxury hampers for clients, teams and business partners.",
  },
  {
    image: "/home/gift/giftfour.jfif",
    title: "Employee Appreciation",
    text: "Beautiful gifting options to celebrate and appreciate your employees.",
  },
  {
    image: "/home/gift/giftgoat.jfif",
    title: "Festive Corporate Gifts",
    text: "Elegant festive gifts designed to create meaningful business relationships.",
  },
  {
   image: "/home/gift/giftgold.jfif",
    title: "Birthday Gifts",
    text: "Make birthdays memorable with luxurious skincare and wellness gifts.",
  },
  {
   image: "/home/gift/giftmilk.jfif",
    title: "Anniversary Gifts",
    text: "Celebrate special relationships with beautifully curated gift sets.",
  },
  {
    image: "/home/gift/giftsea.jfif",
    title: "Self-Care Gifts",
    text: "A luxurious collection designed for moments of personal indulgence.",
  },
];

// const personalGifts = [
  
// ];

const Gifting = () => {
  return (
    <main className="gifting-page">

      {/* ================= HERO ================= */}

      <section className="gifting-hero">

        <div className="gifting-hero-content">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            THE ART OF GIFTING
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            Gifts That Make
            <br />
            Moments Meaningful
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover beautifully curated luxury gifts for
            business relationships and personal celebrations.
          </motion.p>

        </div>

      </section>


      {/* ================= CORPORATE ================= */}

      <section className="gifting-section corporate-section">

        <motion.div
          className="gifting-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>CORPORATE GIFTING</span>

          <h2>
            Thoughtful Luxury
            <br />
            For Business Relationships
          </h2>

          <p>
            Create meaningful connections with thoughtfully curated
            luxury gifts for clients, employees and business partners.
          </p>
        </motion.div>


        <div className="gifting-cards">

          {corporateGifts.map((gift, index) => (

            <motion.article
              className="gifting-card"
              key={gift.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
            >

              <div className="gifting-image">

                <img
                  src={gift.image}
                  alt={gift.title}
                  loading="lazy"
                />

              </div>

              <div className="gifting-card-content">

                <h3>{gift.title}</h3>

                <p>{gift.text}</p>

                <Link to="/product-details">
                  DISCOVER MORE
                  <span>→</span>
                </Link>

              </div>

            </motion.article>

          ))}

        </div>


        <motion.div
          className="gifting-action"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <Link to="/contact" className="gifting-button">
            ENQUIRE FOR CORPORATE GIFTING
          </Link>

        </motion.div>

      </section>


      {/* ================= DIVIDER ================= */}

      <div className="gifting-divider">
        <span>✦</span>
      </div>


      {/* ================= PERSONAL ================= */}

      {/* <section className="gifting-section personal-section">

        <motion.div
          className="gifting-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <span>PERSONAL GIFTING</span>

          <h2>
            Make Every Moment
            <br />
            Beautifully Memorable
          </h2>

          <p>
            Celebrate life's beautiful moments with luxurious
            skincare and wellness gifts made for someone special —
            including yourself.
          </p>

        </motion.div>


        <div className="gifting-cards">

          {personalGifts.map((gift, index) => (

            <motion.article
              className="gifting-card"
              key={gift.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
            >

              <div className="gifting-image">

                <img
                  src={gift.image}
                  alt={gift.title}
                  loading="lazy"
                />

              </div>

              <div className="gifting-card-content">

                <h3>{gift.title}</h3>

                <p>{gift.text}</p>

                <Link to="/product-details">
                  EXPLORE GIFTS
                  <span>→</span>
                </Link>

              </div>

            </motion.article>

          ))}

        </div>


        <motion.div
          className="gifting-action"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <Link to="/product-details" className="gifting-button">
            EXPLORE PERSONAL GIFTS
          </Link>

        </motion.div>

      </section> */}


      {/* ================= BOTTOM ================= */}

      <section className="gifting-bottom">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >

          <span>THE PERFECT GIFT</span>

          <h2>
            Give Something
            <br />
            Truly Meaningful
          </h2>

          <p>
            From business milestones to personal celebrations,
            discover gifts created to leave a lasting impression.
          </p>

        </motion.div>

      </section>

    </main>
  );
};

export default Gifting;