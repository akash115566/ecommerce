import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../Styles/whySkinCare.css";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function WhySkinCare() {
  return (
    <main className="why-skin-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="why-skin-hero">

        <div className="why-skin-hero-image">
          <img
            src="/home/serum/serumdrop.jfif"
            alt="Why skin care is important"
          />
        </div>

        <div className="why-skin-hero-overlay"></div>

        <motion.div
          className="why-skin-hero-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <span className="why-skin-category">
            SKINCARE JOURNAL
          </span>

          <h1>
            Why Skin Care
            <em> Is Important</em>
          </h1>

          <p>
            Healthy skin begins with simple, consistent and
            thoughtful care.
          </p>

          <div className="why-skin-meta">
            <span>19 SEP 2026</span>
            <i></i>
            <span>SKIN HEALTH</span>
          </div>

        </motion.div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="why-skin-intro">

        <motion.div
          className="why-skin-intro-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >

          <span className="editorial-label">
            THE FOUNDATION OF BEAUTIFUL SKIN
          </span>

          <h2>
            Your skin deserves
            <br />
            <em>intentional care.</em>
          </h2>

          <p className="intro-large">
            Your skin is more than just the outer layer of your
            body. It is a living, protective barrier that interacts
            with the environment every day.
          </p>

          <p>
            From sunlight and pollution to changes in weather,
            stress and everyday lifestyle, your skin is constantly
            exposed to factors that can affect its appearance and
            comfort. A thoughtful skincare routine helps support
            the skin's natural functions while maintaining
            hydration, softness and a healthy-looking glow.
          </p>

        </motion.div>

      </section>


      {/* =====================================================
          IMAGE + CONTENT
      ===================================================== */}

      <section className="why-skin-story">

        <motion.div
          className="why-skin-story-image"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeLeft}
        >
          <img
            src="/home/serum/serumhand.jfif"
            alt="Healthy glowing skin"
          />

          <div className="story-image-caption">
            <span>01</span>
            <p>
              Healthy-looking skin begins with consistency.
            </p>
          </div>
        </motion.div>


        <motion.div
          className="why-skin-story-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeRight}
        >

          <span className="editorial-label">
            WHY IT MATTERS
          </span>

          <h2>
            Skincare is not
            <em> just beauty.</em>
          </h2>

          <p>
            Good skincare is about supporting your skin so it can
            perform its natural role effectively. When the skin is
            properly cared for, it can feel more comfortable,
            balanced and resilient.
          </p>

          <p>
            A consistent routine does not have to contain dozens
            of products. Understanding what your skin needs and
            following a simple routine regularly can make a
            meaningful difference to its overall appearance.
          </p>

          <div className="story-highlight">
            <span>“</span>

            <p>
              Beautiful skin is often the result of small,
              consistent rituals practiced every day.
            </p>
          </div>

        </motion.div>

      </section>


      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="why-skin-benefits">

        <motion.div
          className="benefits-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >

          <span className="editorial-label">
            THE BENEFITS
          </span>

          <h2>
            What consistent
            <em> skin care can support</em>
          </h2>

          <p>
            A well-balanced routine can help your skin look,
            feel and function at its best.
          </p>

        </motion.div>


        <div className="benefits-grid">

          <motion.div
            className="benefit-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
          >
            <span className="benefit-number">01</span>

            <div className="benefit-icon">
              ◌
            </div>

            <h3>Maintains Hydration</h3>

            <p>
              Hydration helps support the skin barrier and keeps
              the skin feeling soft, comfortable and supple.
            </p>
          </motion.div>


          <motion.div
            className="benefit-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <span className="benefit-number">02</span>

            <div className="benefit-icon">
              ✦
            </div>

            <h3>Supports Skin Barrier</h3>

            <p>
              A healthy skin barrier helps protect against
              everyday environmental stressors and moisture loss.
            </p>
          </motion.div>


          <motion.div
            className="benefit-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
            <span className="benefit-number">03</span>

            <div className="benefit-icon">
              ✧
            </div>

            <h3>Improves Skin Appearance</h3>

            <p>
              Regular cleansing and moisturising can help skin
              appear smoother, fresher and more radiant.
            </p>
          </motion.div>


          <motion.div
            className="benefit-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ delay: 0.4 }}
          >
            <span className="benefit-number">04</span>

            <div className="benefit-icon">
              ♢
            </div>

            <h3>Creates Healthy Habits</h3>

            <p>
              A simple daily ritual encourages consistency and
              gives you a mindful moment to care for yourself.
            </p>
          </motion.div>

        </div>

      </section>


      {/* =====================================================
          ROUTINE
      ===================================================== */}

      <section className="why-skin-routine">

        <motion.div
          className="routine-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeLeft}
        >

          <span className="editorial-label">
            A SIMPLE APPROACH
          </span>

          <h2>
            Your everyday
            <em> skincare ritual</em>
          </h2>

          <p>
            Effective skincare does not need to be complicated.
            Start with the essentials and build your routine
            around what your skin genuinely needs.
          </p>

          <div className="routine-list">

            <div className="routine-item">
              <span>01</span>

              <div>
                <h3>Cleanse</h3>
                <p>
                  Gently cleanse to remove dirt, excess oil and
                  daily impurities.
                </p>
              </div>
            </div>


            <div className="routine-item">
              <span>02</span>

              <div>
                <h3>Treat</h3>
                <p>
                  Choose targeted skincare according to your
                  skin's individual needs.
                </p>
              </div>
            </div>


            <div className="routine-item">
              <span>03</span>

              <div>
                <h3>Moisturise</h3>
                <p>
                  Help maintain hydration and support the natural
                  skin barrier.
                </p>
              </div>
            </div>


            <div className="routine-item">
              <span>04</span>

              <div>
                <h3>Protect</h3>
                <p>
                  During the day, protect exposed skin from
                  sunlight with suitable sun protection.
                </p>
              </div>
            </div>

          </div>

        </motion.div>


        <motion.div
          className="routine-image"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeRight}
        >
          <img
            src="/home/serum/serumdrop.jfif"
            alt="Daily skincare routine"
          />

          <div className="routine-floating-card">
            <span>DAILY RITUAL</span>
            <strong>Simple. Consistent. Intentional.</strong>
          </div>
        </motion.div>

      </section>


      {/* =====================================================
          SKIN TYPES
      ===================================================== */}

      <section className="skin-awareness">

        <motion.div
          className="skin-awareness-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >

          <span className="editorial-label">
            KNOW YOUR SKIN
          </span>

          <h2>
            Every skin has
            <em> different needs.</em>
          </h2>

          <p>
            Understanding your skin can help you choose products
            and routines that are appropriate for you.
          </p>

        </motion.div>


        <div className="skin-type-grid">

          <div className="skin-type">
            <span>01</span>
            <h3>Dry Skin</h3>
            <p>
              May feel tight or rough and often benefits from
              gentle cleansing and nourishing hydration.
            </p>
          </div>

          <div className="skin-type">
            <span>02</span>
            <h3>Oily Skin</h3>
            <p>
              Can produce more sebum and may benefit from a
              balanced, non-heavy skincare routine.
            </p>
          </div>

          <div className="skin-type">
            <span>03</span>
            <h3>Combination Skin</h3>
            <p>
              May have different needs across different areas of
              the face and benefits from balanced care.
            </p>
          </div>

          <div className="skin-type">
            <span>04</span>
            <h3>Sensitive Skin</h3>
            <p>
              May react easily and can benefit from simple,
              gentle and carefully selected products.
            </p>
          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL
      ===================================================== */}

      <section className="why-skin-final">

        <div className="final-decoration"></div>

        <motion.div
          className="final-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >

          <span className="editorial-label">
            THE BEAUTY OF CONSISTENCY
          </span>

          <h2>
            Take care of your skin,
            <br />
            <em>one ritual at a time.</em>
          </h2>

          <p>
            Skin care is not about perfection. It is about
            understanding your skin, choosing thoughtful care and
            creating small rituals that you can follow consistently.
          </p>

          <Link
            to="/blog"
            className="back-to-blog"
          >
            ← BACK TO JOURNAL
          </Link>

        </motion.div>

      </section>

    </main>
  );
}

export default WhySkinCare;