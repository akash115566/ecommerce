import React from "react";
import "../Styles/aboutUs.css";

const AboutUs = () => {
  return (
    <main className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="about-hero">

        <div className="about-hero-left">
          <span className="about-eyebrow">
            TELLUS ESSENTIALS · PREMIUM SKINCARE
          </span>

          <h1>
            About
            <br />
            <em>Us</em>
          </h1>

          <div className="about-hero-line">
            <span></span>
            <p>
              Where Luxury Meets
              <br />
              the Essence of Nature
            </p>
          </div>
        </div>

    <div className="about-hero-visual1">

  <div className="hero-image1">
    <img
      src="/home/serum/serumc.jfif"
      alt="Tellus Essentials Premium Luxury Skincare"
    />
  </div>

  <div className="hero-gold-circle"></div>

  <div className="hero-stamp">
    <span>BEAUTY</span>
    <strong>✦</strong>
    <span>RITUAL</span>
  </div>

</div>

        <div className="hero-vertical-text">
          TELLUS ESSENTIALS
        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="about-intro">

        <div className="about-intro-number">
          01
        </div>

        <div className="about-intro-content">

          <span className="about-label">
            OUR BELIEF
          </span>

          <h2>
            Skincare is more
            <br />
            than a <em>routine.</em>
          </h2>

          <p className="intro-highlight">
            Tellus Essentials is a premium luxury skincare brand created
            for those who believe skincare is more than a routine—it is
            a ritual of self-care, confidence, and timeless beauty.
          </p>

        </div>

      </section>


      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}
      <section className="about-philosophy">

        <div className="philosophy-image">

          <img
            src="/home/serum/serumc.jfif"
            alt="Nature inspired skincare"
          />

          <div className="image-number">
            02
          </div>

        </div>


        <div className="philosophy-content">

          <span className="about-label">
            OUR PHILOSOPHY
          </span>

          <h2>
            Beautiful skin
            <br />
            begins with
            <br />
            <em>thoughtful care.</em>
          </h2>

          <div className="about-small-line"></div>

          <p>
            Our philosophy is simple: beautiful skin begins with
            thoughtful care. We bring together carefully chosen
            ingredients, refined formulations, and an indulgent
            sensory experience to create skincare that feels as
            luxurious as it looks.
          </p>

          <p>
            Every detail is considered to create a skincare experience
            that feels intentional, elegant, and deeply personal.
          </p>

        </div>

      </section>


      {/* =====================================================
          THREE PILLARS
      ===================================================== */}
      <section className="about-pillars">

        <div className="pillars-heading">

          <span className="about-label">
            THE TELLUS STANDARD
          </span>

          <h2>
            Thoughtfully
            <br />
            <em>created.</em>
          </h2>

        </div>


        <div className="pillars-grid">

          <div className="pillar">

            <div className="pillar-top">
              <span>01</span>
              <i>✦</i>
            </div>

            <h3>
              Carefully
              <br />
              Chosen
            </h3>

            <p>
              Ingredients selected with attention to quality,
              purpose, and the needs of modern skin.
            </p>

          </div>


          <div className="pillar">

            <div className="pillar-top">
              <span>02</span>
              <i>◌</i>
            </div>

            <h3>
              Refined
              <br />
              Formulations
            </h3>

            <p>
              Thoughtfully developed formulations designed
              to transform everyday care into a refined ritual.
            </p>

          </div>


          <div className="pillar">

            <div className="pillar-top">
              <span>03</span>
              <i>♢</i>
            </div>

            <h3>
              Sensory
              <br />
              Experience
            </h3>

            <p>
              Silky textures, beautiful fragrances and an
              experience designed to make self-care special.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          LUXURY STATEMENT
      ===================================================== */}
      <section className="about-statement">

        <div className="statement-orbit"></div>

        <div className="statement-content">

          <span className="about-label">
            THE ART OF SELF-CARE
          </span>

          <h2>
            True luxury lies
            <br />
            <em>in the details.</em>
          </h2>

          <p>
            We believe true luxury lies in the details—the feel of a
            silky texture, the elegance of a thoughtfully crafted
            formula, and the confidence that comes from caring for
            your skin.
          </p>

        </div>

      </section>


      {/* =====================================================
          MODERN SKIN
      ===================================================== */}
      <section className="modern-skin">

        <div className="modern-content">

          <span className="about-label">
            MADE FOR MODERN BEAUTY
          </span>

          <h2>
            Everyday essentials.
            <br />
            <em>Elevated rituals.</em>
          </h2>

          <p>
            At Tellus Essentials, every product is developed with
            attention to quality, elegance, and the evolving needs
            of modern skin.
          </p>

          <p>
            From everyday essentials to elevated skincare rituals,
            our collection is designed to make every moment of
            self-care feel special.
          </p>

          <div className="modern-signature">
            Tellus Essentials
          </div>

        </div>


        <div className="modern-image">

          <img
            src="/home/serum/serumc.jfif"
            alt="Tellus Essentials luxury skincare"
          />

          <div className="modern-image-text">
            <span>ELEVATE</span>
            <strong>YOUR EVERYDAY</strong>
          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL
      ===================================================== */}
      <section className="about-final">

        <div className="final-inner">

          <span className="about-label">
            TELLUS ESSENTIALS
          </span>

          <h2>
            Elevate Your Everyday.
            <br />
            <em>Embrace Your Essence.</em>
          </h2>

          <div className="final-divider">
            <span></span>
            ✦
            <span></span>
          </div>

          <p>
            Premium Luxury Skincare
          </p>

        </div>

      </section>

    </main>
  );
};

export default AboutUs;