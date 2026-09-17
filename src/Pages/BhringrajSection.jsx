import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import "../Styles/bhringraj.css";

function BhringrajSection() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = {
    name: "Vitamin C Serum",
    category: "Ayurvedic Hair Care",
    image: "/media.jfif",
    price: 1299,
    oldPrice: 1599,
    size: "50ml",
    description:
      "A time-tested Ayurvedic hair care serum that helps reduce hair fall and improve hair density.",
    images: [
      "/media.jfif",
    ],
    sizes: ["50ml", "100ml"],
  };

  /* PRODUCT DETAILS */
  const openProduct = () => {
    navigate("/product-details", {
      state: {
        product,
      },
    });
  };

  /* ADD TO BAG */
  const handleAddToBag = (e) => {
    e.stopPropagation();

    addToCart({
      ...product,
      quantity: 1,
    });
  };

  return (
    <section className="bhringraj-section">

      {/* Decorative background */}
      <div className="bhringraj-decor"></div>

      {/* LEFT CONTENT */}
      <div className="bhringraj-content">

        <p className="bhringraj-small">
          AYURVEDIC HAIR CARE
        </p>

        <h2>
          VITAMIN
          <br />
          <span>C SERUM</span>
        </h2>

        <div className="bhringraj-line"></div>

        <p className="bhringraj-title">
          A time-tested recipe that works to reduce
          hairfall and improve hair density.
        </p>

        <p className="bhringraj-description">
          Discover the ancient Ayurvedic secret to
          healthier, stronger and beautifully nourished hair.
        </p>

        {/* PRODUCT PAGE */}
        <button
          type="button"
          className="bhringraj-button"
          onClick={openProduct}
        >
          <span>EXPLORE NOW</span>
          <b>→</b>
        </button>

        {/* ADD TO BAG */}
        <button
          type="button"
          className="bhringraj-add-bag"
          onClick={handleAddToBag}
        >
          ADD TO BAG
        </button>

      </div>

      {/* RIGHT IMAGE */}
      <div
        className="bhringraj-image"
        onClick={openProduct}
      >

        <div className="bhringraj-image-frame">

          <img
            src="/media.jfif"
            alt="Vitamin C Serum"
          />

        </div>

        <div className="bhringraj-badge">
          <span>100%</span>
          <small>
            AYURVEDIC
            <br />
            RITUAL
          </small>
        </div>

      </div>

    </section>
  );
}

export default BhringrajSection;