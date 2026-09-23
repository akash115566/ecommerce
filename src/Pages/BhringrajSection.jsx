import React, { useEffect, useState } from "react";
import "../Styles/bhringraj.css";

const serumImages = [
  "/home/serum/serumshow.jfif",
  "/home/serum/serumblack.jfif",
  "/home/serum/serumc.jfif",
  "/home/serum/serumdot.jfif",
];

function BhringrajSection() {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {

    const slider = setInterval(() => {

      setCurrentImage((prev) =>
        (prev + 1) % serumImages.length
      );

    }, 4000);

    return () => clearInterval(slider);

  }, []);

  return (

    <section className="bhringraj-section">

      {/* =====================================================
          FIXED BACKGROUND DESIGN
      ===================================================== */}

      <div className="bhringraj-background">

        <div className="bg-circle bg-circle-one"></div>

        <div className="bg-circle bg-circle-two"></div>

        <div className="bg-leaf bg-leaf-one"></div>

        <div className="bg-leaf bg-leaf-two"></div>

        <div className="bg-dot-pattern"></div>

      </div>


      {/* =====================================================
          MOVING DELIVERY TRUCK
      ===================================================== */}

      <div className="delivery-track">

        <div className="delivery-truck">
          🚚
        </div>

      </div>


      {/* =====================================================
          LEFT CONTENT
      ===================================================== */}

      <div className="bhringraj-content">

        <p className="bhringraj-small">
          Ancient Skin Care Wisdom brought back to life —
          a time tested ritual for deeply hydrated,
          youthful looking skin...
        </p>


        <h2>
          VITAMIN
          <br />
          <span>C SERUM</span>
        </h2>


        <div className="bhringraj-line"></div>


        <p className="bhringraj-title">
          A refined vitamin C ritual that helps revive
          dull-looking skin, enhance radiance, and reveal
          a smoother, naturally luminous complexion.
        </p>


        <p className="bhringraj-description">
          Discover the power of carefully selected
          botanicals and skin-loving actives crafted
          for beautifully nourished, radiant skin.
        </p>


        <button className="bhringraj-button">

          <span>
            EXPLORE NOW
          </span>

          <b>
            →
          </b>

        </button>

      </div>


      {/* =====================================================
          RIGHT IMAGE AREA
      ===================================================== */}

      <div className="bhringraj-image">

        {/* Fixed decorative circle */}

        <div className="image-bg-shape"></div>


        {/* Fixed leaf decoration */}

        <div className="image-leaf image-leaf-left"></div>

        <div className="image-leaf image-leaf-right"></div>


        {/* Product image */}

        <div className="bhringraj-image-frame">

          {serumImages.map((image, index) => (

            <img
              key={image}
              src={image}
              alt="Tellus Vitamin C Serum"
              className={
                index === currentImage
                  ? "active-serum-image"
                  : "serum-image"
              }
            />

          ))}

        </div>


        {/* =================================================
            BADGE
        ================================================= */}

        <div className="bhringraj-badge">

          <span>
            100%
          </span>

          <small>
            NATURAL
            <br />
            RITUAL
          </small>

        </div>


        {/* Image counter */}

        <div className="serum-counter">

          <span>
            0{currentImage + 1}
          </span>

          <i></i>

          <span>
            0{serumImages.length}
          </span>

        </div>

      </div>

    </section>

  );
}

export default BhringrajSection;