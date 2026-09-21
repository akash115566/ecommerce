import React from "react";
import { motion } from "framer-motion";
import "../Styles/seaBuckthornBlog.css";

const benefits = [
  {
    number: "01",
    title: "Rich in Antioxidants",
    text: "Sea Buckthorn is naturally rich in antioxidant compounds that help support skin against everyday environmental stress."
  },
  {
    number: "02",
    title: "Supports Skin Hydration",
    text: "Its nourishing oils help support the skin barrier and leave the complexion feeling soft, supple and comfortable."
  },
  {
    number: "03",
    title: "Promotes Natural Radiance",
    text: "A nutrient-rich skincare ritual can help dull-looking skin appear fresh, smooth and naturally luminous."
  },
  {
    number: "04",
    title: "Nourishing Skin Care",
    text: "Sea Buckthorn contains naturally occurring fatty acids and vitamins that make it a beautiful ingredient for nourishing skincare."
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

function SeaBuckthornBlog() {
  return (
    <main className="sea-blog-page">

      {/* ================= HERO ================= */}
      <section className="sea-blog-hero">

        <div className="sea-hero-overlay"></div>

        <div className="sea-hero-content">

          <motion.span
            className="sea-blog-category"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            BEAUTY • INGREDIENT STORIES
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.15
            }}
          >
            Why Is Sea Buckthorn
            <span> Good for Skincare?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35
            }}
          >
            Discover the naturally nourishing properties of one of
            skincare's most treasured botanical ingredients.
          </motion.p>

          <motion.div
            className="sea-hero-line"
            initial={{ width: 0 }}
            animate={{ width: "90px" }}
            transition={{
              duration: 0.8,
              delay: 0.6
            }}
          />

        </div>

        <div className="sea-scroll">
          <span>SCROLL TO DISCOVER</span>
          <div></div>
        </div>

      </section>


      {/* ================= INTRO ================= */}
      <section className="sea-intro-section">

        <motion.div
          className="sea-intro-image"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src="/home/serum/seabuckthorn.jpg"
            alt="Sea Buckthorn skincare"
          />

          <div className="sea-image-label">
            <span>01</span>
            NATURAL BOTANICAL
          </div>
        </motion.div>


        <motion.div
          className="sea-intro-content"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          <span className="section-mini-title">
            THE INGREDIENT
          </span>

          <h2>
            A little berry
            <br />
            with remarkable
            <em> beauty potential.</em>
          </h2>

          <p>
            Sea Buckthorn is a vibrant botanical ingredient valued in
            skincare for its naturally nourishing composition. Its
            berries and oils contain a combination of vitamins,
            fatty acids and antioxidant compounds.
          </p>

          <p>
            When incorporated into a thoughtful skincare routine,
            Sea Buckthorn can help support the skin barrier while
            leaving the complexion looking soft, healthy and radiant.
          </p>

          <div className="sea-signature">
            <span>Nature's</span>
            <strong>Golden Glow</strong>
          </div>

        </motion.div>

      </section>


      {/* ================= MARQUEE ================= */}
      <div className="sea-marquee">
        <div className="sea-marquee-track">
          <span>SEA BUCKTHORN</span>
          <i>✦</i>
          <span>NATURAL RADIANCE</span>
          <i>✦</i>
          <span>BOTANICAL BEAUTY</span>
          <i>✦</i>
          <span>SEA BUCKTHORN</span>
          <i>✦</i>
          <span>NATURAL RADIANCE</span>
          <i>✦</i>
        </div>
      </div>


      {/* ================= WHY SEA BUCKTHORN ================= */}
      <section className="sea-benefits-section">

        <motion.div
          className="sea-section-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span>WHY IT BELONGS IN YOUR ROUTINE</span>

          <h2>
            Nature's nourishment,
            <br />
            <em>beautifully bottled.</em>
          </h2>
        </motion.div>


        <div className="sea-benefits-grid">

          {benefits.map((item, index) => (
            <motion.article
              className="sea-benefit-card"
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

              <span className="benefit-number">
                {item.number}
              </span>

              <div className="benefit-icon">
                ✦
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <span className="benefit-arrow">
                ↗
              </span>

            </motion.article>
          ))}

        </div>

      </section>


      {/* ================= EDITORIAL ================= */}
      <section className="sea-editorial">

        <motion.div
          className="editorial-content"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          <span className="section-mini-title">
            BEYOND THE GLOW
          </span>

          <h2>
            More than a trend.
            <br />
            <em>A timeless ritual.</em>
          </h2>

          <p>
            Modern skincare is increasingly inspired by ingredients
            that have a strong connection with nature. Sea Buckthorn
            fits beautifully into this philosophy.
          </p>

          <p>
            Its naturally rich composition makes it a versatile
            ingredient for formulas designed to nourish, soften and
            support the appearance of healthy-looking skin.
          </p>

          <div className="editorial-quote">
            “Let your skincare ritual
            return to nature.”
          </div>

        </motion.div>


        <motion.div
          className="editorial-image"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="/home/serum/seabuckthorn-2.jpg"
            alt="Sea Buckthorn berries"
          />

          <div className="floating-badge">
            <span>PURE</span>
            <strong>BOTANICAL</strong>
          </div>

        </motion.div>

      </section>


      {/* ================= ROUTINE ================= */}
      <section className="sea-routine-section">

        <motion.div
          className="routine-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          <span>YOUR DAILY RITUAL</span>

          <h2>
            Make room for
            <br />
            <em>natural nourishment.</em>
          </h2>

        </motion.div>


        <div className="routine-steps">

          <motion.div
            className="routine-step"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span>01</span>
            <h3>Cleanse</h3>
            <p>
              Begin with a gentle cleanser to create a fresh
              canvas for your skincare ritual.
            </p>
          </motion.div>


          <motion.div
            className="routine-step"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15
            }}
            viewport={{ once: true }}
          >
            <span>02</span>
            <h3>Layer</h3>
            <p>
              Apply your favourite serum or Sea Buckthorn
              infused treatment according to its directions.
            </p>
          </motion.div>


          <motion.div
            className="routine-step"
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
              Finish your morning routine with moisturiser
              and broad-spectrum sunscreen.
            </p>
          </motion.div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="sea-final-section">

        <motion.div
          className="sea-final-content"
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

          <span>THE BEAUTY OF BOTANICALS</span>

          <h2>
            Let your skin
            <br />
            <em>glow naturally.</em>
          </h2>

          <p>
            Explore skincare inspired by nature, created for
            modern beauty rituals.
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

export default SeaBuckthornBlog;