import React from "react";
import { motion } from "framer-motion";
import "../Styles/ourstory.css";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const OurStory = () => {
  return (
    <section className="our-story-section">

      {/* Decorative Elements */}
      <div className="story-glow story-glow-one"></div>
      <div className="story-glow story-glow-two"></div>

      <motion.div
        className="story-leaf leaf-one"
        animate={{
          rotate: [0, 5, -3, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ✦
      </motion.div>

      <motion.div
        className="story-leaf leaf-two"
        animate={{
          rotate: [0, -8, 4, 0],
          y: [0, 12, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ✧
      </motion.div>

      <div className="story-container">

        {/* Heading */}
        <motion.div
          className="story-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="story-eyebrow">
            THE TELLUS ESSENTIALS JOURNEY
          </span>

          <h2>
            Our <em>Story</em>
          </h2>

          <div className="story-line">
            <span></span>
            <i>✦</i>
            <span></span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="story-grid">

          {/* Left Visual */}
          <motion.div
            className="story-visual"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="story-image-wrap">

              <div className="story-image-frame"></div>

              <div className="story-image">
                <img
                  src="/home/serum/serumc.jfif"
                  alt="Tellus Essentials Luxury Skincare"
                />

                <div className="image-overlay"></div>

                <div className="image-caption">
                  <span>PURE</span>
                  <span>MINDFUL</span>
                  <span>TIMELESS</span>
                </div>
              </div>

              <motion.div
                className="story-circle"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <span> TELLUS ESSENTIALS • PREMIUM SKINCARE • </span>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="story-content"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >

            <p className="story-intro">
              Tellus Essentials was born from a simple belief:
              <strong>
                skincare should feel as luxurious as it is effective.
              </strong>
            </p>

            <p>
              Inspired by the timeless beauty of nature and the evolving needs 
              of modern skin, Tellus Essentials brings together carefully
               selected ingredients, thoughtful formulations, and a premium 
               skincare experience. Our journey began with a vision to create 
               skincare that transforms everyday self-care into a moment of
               indulgence.
            </p>

            <p>
              With a focus on quality, elegance, and skin wellness, every Tellus
               Essentials product is designed to complement a refined skincare
                ritual. From the textures and fragrances to the overall experience,
                 our philosophy is rooted in understated luxury and mindful beauty.

            </p>
            <p>
                Today, Tellus Essentials Premium Luxury Skincare represents a
                 commitment to making premium self-care accessible through
                  products created with purpose, sophistication, and attention to
                   detail.

                 Tellus Essentials — Where Nature Meets Luxury.
            </p>

            <div className="story-divider"></div>

            <p>
              With a focus on quality, elegance, and skin wellness, every
              Tellus Essentials product is designed to complement a refined
              skincare ritual. From the textures and fragrances to the
              overall experience, our philosophy is rooted in understated
              luxury and mindful beauty.
            </p>

            <p>
              Today, <strong>Tellus Essentials Premium Luxury Skincare</strong>
              represents a commitment to making premium self-care accessible
              through products created with purpose, sophistication, and
              attention to detail.
            </p>

            {/* Signature */}
            <motion.div
              className="story-signature"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span>Tellus Essentials</span>
              <small>Where Nature Meets Luxury.</small>
            </motion.div>

          </motion.div>

        </div>

        {/* Bottom Philosophy */}
        <motion.div
          className="story-philosophy"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="philosophy-item">
            <span>01</span>
            <h4>Nature</h4>
            <p>Inspired by the timeless beauty of nature.</p>
          </div>

          <div className="philosophy-item">
            <span>02</span>
            <h4>Craft</h4>
            <p>Thoughtful formulations created with purpose.</p>
          </div>

          <div className="philosophy-item">
            <span>03</span>
            <h4>Luxury</h4>
            <p>An elevated ritual designed for modern skin.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default OurStory;