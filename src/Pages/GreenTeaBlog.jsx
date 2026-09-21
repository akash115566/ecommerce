import React from "react";
import { motion } from "framer-motion";
import "../Styles/greenTeaBlog.css";

const benefits = [
  {
    number: "01",
    title: "Rich in Antioxidants",
    text: "Green tea is naturally rich in antioxidant compounds that help support skin against everyday environmental stress."
  },
  {
    number: "02",
    title: "Helps Soothe Skin",
    text: "Green tea extracts are often used in skincare formulas designed to help calm the appearance of stressed or tired-looking skin."
  },
  {
    number: "03",
    title: "Supports Fresh-Looking Skin",
    text: "Its refreshing botanical properties can complement a skincare ritual focused on a clean, balanced and revitalised complexion."
  },
  {
    number: "04",
    title: "A Gentle Botanical Ritual",
    text: "Green tea makes a beautiful addition to everyday skincare, bringing together nature, nourishment and a mindful beauty experience."
  }
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -70
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut"
    }
  }
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 70
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut"
    }
  }
};

function GreenTeaBlog() {
  return (
    <main className="green-blog-page">

      {/* ================= HERO ================= */}

      <section className="green-blog-hero">

        <div className="green-hero-overlay"></div>

        <div className="green-hero-content">

          <motion.span
            className="green-blog-category"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            BEAUTY • BOTANICAL STORIES
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.15
            }}
          >
            Green Tea
            <span>Benefits for Skin</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35
            }}
          >
            Discover the antioxidant-rich botanical that brings
            freshness, calm and natural beauty to your skincare ritual.
          </motion.p>

          <motion.div
            className="green-hero-line"
            initial={{ width: 0 }}
            animate={{ width: "90px" }}
            transition={{
              duration: 0.8,
              delay: 0.6
            }}
          />

        </div>

        <div className="green-scroll">
          <span>SCROLL TO DISCOVER</span>
          <div></div>
        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="green-intro-section">

        <motion.div
          className="green-intro-image"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          <img
            src="/home/greentea/greentea.jpg"
            alt="Green tea skincare"
          />

          <div className="green-image-label">
            <span>01</span>
            BOTANICAL BEAUTY
          </div>

        </motion.div>


        <motion.div
          className="green-intro-content"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          <span className="green-mini-title">
            THE INGREDIENT
          </span>

          <h2>
            A timeless ritual
            <br />
            for naturally
            <em> fresh-looking skin.</em>
          </h2>

          <p>
            Green tea has been cherished for generations as part of
            wellness and beauty rituals. Today, its extract is widely
            appreciated in skincare for its antioxidant-rich properties.
          </p>

          <p>
            When thoughtfully incorporated into skincare formulas,
            green tea can complement routines designed to support
            calm, refreshed and healthy-looking skin.
          </p>

          <div className="green-signature">
            <span>Inspired by</span>
            <strong>Nature's Ritual</strong>
          </div>

        </motion.div>

      </section>


      {/* ================= MARQUEE ================= */}

      <div className="green-marquee">

        <div className="green-marquee-track">

          <span>GREEN TEA</span>
          <i>✦</i>

          <span>BOTANICAL BEAUTY</span>
          <i>✦</i>

          <span>NATURAL RADIANCE</span>
          <i>✦</i>

          <span>GREEN TEA</span>
          <i>✦</i>

          <span>BOTANICAL BEAUTY</span>
          <i>✦</i>

          <span>NATURAL RADIANCE</span>
          <i>✦</i>

        </div>

      </div>


      {/* ================= BENEFITS ================= */}

      <section className="green-benefits-section">

        <motion.div
          className="green-section-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          <span>WHY GREEN TEA?</span>

          <h2>
            A simple botanical,
            <br />
            <em>beautifully effective.</em>
          </h2>

        </motion.div>


        <div className="green-benefits-grid">

          {benefits.map((item, index) => (

            <motion.article
              className="green-benefit-card"
              key={item.number}
              initial={{
                opacity: 0,
                y: 50
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12
              }}
              viewport={{
                once: true,
                amount: 0.2
              }}
            >

              <span className="green-benefit-number">
                {item.number}
              </span>

              <div className="green-benefit-icon">
                ✦
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <span className="green-benefit-arrow">
                ↗
              </span>

            </motion.article>

          ))}

        </div>

      </section>


      {/* ================= EDITORIAL ================= */}

      <section className="green-editorial">

        <motion.div
          className="green-editorial-content"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          <span className="green-mini-title">
            BEYOND THE CUP
          </span>

          <h2>
            From wellness ritual
            <br />
            to <em>skin ritual.</em>
          </h2>

          <p>
            Green tea is more than a beloved beverage. Its botanical
            qualities have also made it a popular ingredient in modern
            skincare formulations.
          </p>

          <p>
            From cleansers and toners to serums and moisturisers,
            green tea extract can be found in formulas created for
            different skin types and everyday beauty rituals.
          </p>

          <div className="green-editorial-quote">
            “A moment of calm,
            inspired by nature.”
          </div>

        </motion.div>


        <motion.div
          className="green-editorial-image"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          <img
            src="/home/greentea/greentea-2.jpg"
            alt="Green tea leaves"
          />

          <div className="green-floating-badge">
            <span>PURE</span>
            <strong>BOTANICAL</strong>
          </div>

        </motion.div>

      </section>


      {/* ================= SKINCARE ROUTINE ================= */}

      <section className="green-routine-section">

        <motion.div
          className="green-routine-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          <span>YOUR DAILY RITUAL</span>

          <h2>
            Bring botanical calm
            <br />
            <em>to your skincare.</em>
          </h2>

        </motion.div>


        <div className="green-routine-steps">

          <motion.div
            className="green-routine-step"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <span>01</span>

            <h3>Cleanse</h3>

            <p>
              Start with a gentle cleanser to remove everyday
              impurities and prepare the skin for your routine.
            </p>

          </motion.div>


          <motion.div
            className="green-routine-step"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15
            }}
            viewport={{ once: true }}
          >

            <span>02</span>

            <h3>Treat</h3>

            <p>
              Layer a suitable green tea infused serum or treatment
              according to the product's directions.
            </p>

          </motion.div>


          <motion.div
            className="green-routine-step"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3
            }}
            viewport={{ once: true }}
          >

            <span>03</span>

            <h3>Protect</h3>

            <p>
              Complete your morning routine with moisturiser and
              broad-spectrum sunscreen.
            </p>

          </motion.div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="green-final-section">

        <motion.div
          className="green-final-content"
          initial={{
            opacity: 0,
            scale: 0.94
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.9
          }}
          viewport={{
            once: true
          }}
        >

          <span>THE BOTANICAL BEAUTY EDIT</span>

          <h2>
            Let nature become
            <br />
            <em>your daily ritual.</em>
          </h2>

          <p>
            Discover skincare inspired by the simplicity and
            beauty of botanical ingredients.
          </p>

          <button>
            EXPLORE THE COLLECTION
            <span>↗</span>
          </button>

        </motion.div>

      </section>

    </main>
  );
}

export default GreenTeaBlog;