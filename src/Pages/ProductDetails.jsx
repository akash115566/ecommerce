import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import "../Styles/productdetails.css";

function ProductDetails() {
  const location = useLocation();

  // Cart Context
  const { addToCart } = useCart();

  // Product card se product nahi aaya to demo product
  const product = location.state?.product || {
    name: "Serum Infused Facial Mist Panchpushp",
    category: "Facial Care",
    price: 750,
    oldPrice: 900,

    images: [
      "/images/product1.jpg",
      "/images/product2.jpg",
      "/images/product3.jpg",
      "/images/product4.jpg",
      "/images/product5.jpg",
    ],

    sizes: ["50ml", "130ml"],

    description:
      "A hydrating facial treatment infused with steam-distilled waters of five fresh flowers and a light concentrate of nourishing serums to instantly refresh and plump the skin.",

    benefits: [
      "Instantly refreshes the skin",
      "Provides lightweight hydration",
      "Helps improve skin softness",
      "Suitable for daily use",
    ],
  };

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(
    product.sizes?.[0] || "50ml"
  );

  // Quantity +
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Quantity -
  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // ADD TO BAG
  const addToBag = () => {
    addToCart({
      ...product,

      // Cart drawer ke liye single image
      image: product.images?.[0],

      // Price number me
      price: Number(product.price),

      // Selected size
      size: selectedSize,

      // Selected quantity
      quantity: quantity,
    });
  };

  return (
    <div className="product-details-page">

      {/* =====================================================
          PRODUCT MAIN SECTION
      ===================================================== */}

      <section className="product-main">

        {/* ================= LEFT SIDE ================= */}

        <div className="product-gallery">

          {/* MAIN IMAGE */}

          <div className="main-product-image">

            <button
              className="product-heart"
              type="button"
              aria-label="Add to wishlist"
            >
              ♡
            </button>

            <img
              src={product.images?.[selectedImage]}
              alt={product.name}
            />

          </div>


          {/* THUMBNAILS */}

          <div className="product-thumbnails">

            {product.images?.map((image, index) => (

              <button
                key={index}
                type="button"
                className={`thumbnail ${
                  selectedImage === index ? "active" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >

                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                />

              </button>

            ))}

          </div>


          {/* DISCLAIMER */}

          <p className="image-disclaimer">
            Disclaimer: The image is for representation purposes only.
            The packaging you receive might vary.
          </p>

        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="product-info">

          {/* BREADCRUMB */}

          <div className="breadcrumb">

            HOME &gt;{" "}

            {product.category?.toUpperCase()} &gt;{" "}

            {product.name?.toUpperCase()}

          </div>


          {/* PRODUCT NAME */}

          <h1>
            {product.name}
          </h1>


          {/* SIZE */}

          <div className="size-section">

            <span>
              SIZE :
            </span>

            <div className="size-options">

              {product.sizes?.map((size) => (

                <button
                  key={size}
                  type="button"
                  className={
                    selectedSize === size
                      ? "size-btn selected"
                      : "size-btn"
                  }
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>

              ))}

            </div>

          </div>


          {/* RATING */}

          <div className="rating">

            <span className="rating-stars">
              ★★★★★
            </span>

            <span className="rating-text">
              (16) ★ 2 Questions | 4 Answers
            </span>

          </div>


          {/* PRICE */}

          <div className="price">

            ₹
            {Number(product.price).toLocaleString("en-IN")}

            {product.oldPrice && (
              <span className="old-price">
                ₹
                {Number(product.oldPrice).toLocaleString("en-IN")}
              </span>
            )}

            <span className="tax-text">
              &nbsp; (MRP INCLUSIVE OF ALL TAXES)
            </span>

          </div>


          {/* QUANTITY + ADD TO BAG */}

          <div className="bag-row">

            <div className="quantity-box">

              <button
                type="button"
                onClick={decreaseQuantity}
              >
                -
              </button>

              <span>
                {quantity}
              </span>

              <button
                type="button"
                onClick={increaseQuantity}
              >
                +
              </button>

            </div>


            <button
              type="button"
              className="add-bag-btn"
              onClick={addToBag}
            >
              ADD TO BAG
            </button>

          </div>


          {/* DELIVERY */}

          <div className="delivery-section">

            <h3>
              Delivery Options
            </h3>

            <div className="delivery-box">

              <div className="pincode">

                <input
                  type="text"
                  placeholder="ENTER PIN CODE"
                  maxLength="6"
                />

                <button type="button">
                  CHECK
                </button>

              </div>

              <p>
                Delivery outside India?
                <br />
                Guaranteed dispatch within 48 Hrs.
              </p>

            </div>

          </div>


          {/* OFFERS */}

          <div className="product-offers">

            <button type="button">
              🎁 &nbsp; AVAILABLE OFFERS
            </button>

            <button type="button">
              ⚡ &nbsp; WHAT'S NEW
            </button>

          </div>


          {/* BANK OFFER */}

          <div className="bank-offer">

            Shop with ease: Experience No-Cost EMI*
            from HDFC Bank on ₹7,500+

          </div>


          {/* CLUB OFFER */}

          <div className="club-offer">

            Soundarya Club Members can earn up to{" "}

            <strong>
              30.00
            </strong>{" "}

            points on the purchase of this product.

            <u>
              {" "}Know More
            </u>

          </div>


          {/* DESCRIPTION */}

          <div className="accordion">

            <div className="accordion-header">

              <span>
                Description
              </span>

              <span>
                −
              </span>

            </div>

            <div className="accordion-content">

              <p>
                {product.description}
              </p>

            </div>

          </div>


          {/* BENEFITS */}

          <div className="accordion">

            <div className="accordion-header">

              <span>
                Benefits
              </span>

              <span>
                +
              </span>

            </div>

            <div className="accordion-content">

              {product.benefits?.map(
                (benefit, index) => (

                  <p key={index}>
                    • {benefit}
                  </p>

                )
              )}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          KEY INGREDIENTS
      ===================================================== */}

      <section className="ingredients-section">

        <div className="section-heading">

          <span className="section-small-title">
            POWERED BY NATURE
          </span>

          <h2>
            Key Ingredients
          </h2>

          <p>
            Carefully selected botanical ingredients
            for a nourishing and refreshing skincare ritual.
          </p>

        </div>


        <div className="ingredients-grid">

          {/* INGREDIENT 1 */}

          <div className="ingredient-card">

            <div className="ingredient-image">

              <img
                src="/ingredients/aloe.jpg"
                alt="Aloe Vera"
              />

            </div>

            <h3>
              Aloe Vera
            </h3>

            <p>
              Known for its soothing and hydrating properties.
            </p>

          </div>


          {/* INGREDIENT 2 */}

          <div className="ingredient-card">

            <div className="ingredient-image">

              <img
                src="/ingredients/jasmine.jpg"
                alt="Jasmine"
              />

            </div>

            <h3>
              Jasmine
            </h3>

            <p>
              A naturally fragrant botanical traditionally
              used in beauty rituals.
            </p>

          </div>


          {/* INGREDIENT 3 */}

          <div className="ingredient-card">

            <div className="ingredient-image">

              <img
                src="/ingredients/kewda.jpg"
                alt="Kewda Water"
              />

            </div>

            <h3>
              Kewda Water
            </h3>

            <p>
              Helps provide a refreshing feel to the skin.
            </p>

          </div>


          {/* INGREDIENT 4 */}

          <div className="ingredient-card">

            <div className="ingredient-image">

              <img
                src="/ingredients/marigold.jpg"
                alt="Marigold"
              />

            </div>

            <h3>
              Marigold
            </h3>

            <p>
              A botanical ingredient traditionally valued
              in skincare.
            </p>

          </div>


          {/* INGREDIENT 5 */}

          <div className="ingredient-card">

            <div className="ingredient-image">

              <img
                src="/ingredients/rose.jpg"
                alt="Rose"
              />

            </div>

            <h3>
              Rose
            </h3>

            <p>
              Provides a delicate, refreshing and
              luxurious skincare experience.
            </p>

          </div>


          {/* INGREDIENT 6 */}

          <div className="ingredient-card">

            <div className="ingredient-image">

              <img
                src="/ingredients/saffron.jpg"
                alt="Saffron"
              />

            </div>

            <h3>
              Saffron
            </h3>

            <p>
              A traditional botanical ingredient used
              in beauty and wellness rituals.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW TO USE
      ===================================================== */}

      <section className="how-to-use-section">

        <div className="how-to-use-content">

          <div className="how-to-use-text">

            <span className="section-small-title">
              YOUR DAILY RITUAL
            </span>

            <h2>
              How To Use
            </h2>

            <p>
              Follow these simple steps to make the most
              of your skincare ritual.
            </p>

            <div className="usage-steps">

              <div className="usage-step">

                <span>
                  01
                </span>

                <div>
                  <h3>
                    Cleanse
                  </h3>

                  <p>
                    Start with freshly cleansed skin.
                  </p>
                </div>

              </div>


              <div className="usage-step">

                <span>
                  02
                </span>

                <div>
                  <h3>
                    Apply
                  </h3>

                  <p>
                    Gently apply the product over your face.
                  </p>
                </div>

              </div>


              <div className="usage-step">

                <span>
                  03
                </span>

                <div>
                  <h3>
                    Massage
                  </h3>

                  <p>
                    Massage gently until comfortably absorbed.
                  </p>
                </div>

              </div>


              <div className="usage-step">

                <span>
                  04
                </span>

                <div>
                  <h3>
                    Enjoy
                  </h3>

                  <p>
                    Continue with the rest of your skincare routine.
                  </p>
                </div>

              </div>

            </div>

          </div>


          <div className="how-to-use-image">

            <img
              src="/images/how-to-use.jpg"
              alt="How to use skincare product"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          CUSTOMER REVIEWS
      ===================================================== */}

      <section className="reviews-section">

        <div className="reviews-heading">

          <div>

            <span className="section-small-title">
              CUSTOMER LOVE
            </span>

            <h2>
              Customer Reviews
            </h2>

          </div>

          <button
            type="button"
            className="write-review-btn"
          >
            WRITE A REVIEW
          </button>

        </div>


        {/* REVIEW SUMMARY */}

        <div className="review-summary">

          <div className="overall-rating">

            <strong>
              4.8
            </strong>

            <div className="summary-stars">
              ★★★★★
            </div>

            <p>
              Based on 126 reviews
            </p>

          </div>


          <div className="rating-bars">

            <div className="rating-row">

              <span>
                5
              </span>

              <div className="rating-bar">
                <div
                  className="rating-fill"
                  style={{ width: "88%" }}
                ></div>
              </div>

              <span>
                88%
              </span>

            </div>


            <div className="rating-row">

              <span>
                4
              </span>

              <div className="rating-bar">
                <div
                  className="rating-fill"
                  style={{ width: "8%" }}
                ></div>
              </div>

              <span>
                8%
              </span>

            </div>


            <div className="rating-row">

              <span>
                3
              </span>

              <div className="rating-bar">
                <div
                  className="rating-fill"
                  style={{ width: "3%" }}
                ></div>
              </div>

              <span>
                3%
              </span>

            </div>


            <div className="rating-row">

              <span>
                2
              </span>

              <div className="rating-bar">
                <div
                  className="rating-fill"
                  style={{ width: "1%" }}
                ></div>
              </div>

              <span>
                1%
              </span>

            </div>


            <div className="rating-row">

              <span>
                1
              </span>

              <div className="rating-bar">
                <div
                  className="rating-fill"
                  style={{ width: "0%" }}
                ></div>
              </div>

              <span>
                0%
              </span>

            </div>

          </div>

        </div>


        {/* REVIEW CARDS */}

        <div className="reviews-grid">

          <div className="review-card">

            <div className="review-top">

              <div className="review-stars">
                ★★★★★
              </div>

              <span>
                Verified Buyer
              </span>

            </div>

            <h3>
              Really refreshing
            </h3>

            <p>
              The product feels light and refreshing on
              my skin. I love using it as part of my
              everyday skincare routine.
            </p>

            <div className="review-author">
              — Priya
            </div>

          </div>


          <div className="review-card">

            <div className="review-top">

              <div className="review-stars">
                ★★★★★
              </div>

              <span>
                Verified Buyer
              </span>

            </div>

            <h3>
              Lovely skincare product
            </h3>

            <p>
              The texture is comfortable and the fragrance
              is very pleasant. It has become a regular
              part of my routine.
            </p>

            <div className="review-author">
              — Ananya
            </div>

          </div>


          <div className="review-card">

            <div className="review-top">

              <div className="review-stars">
                ★★★★★
              </div>

              <span>
                Verified Buyer
              </span>

            </div>

            <h3>
              Worth trying
            </h3>

            <p>
              A beautiful addition to my skincare shelf.
              The product is easy to use and feels
              refreshing after application.
            </p>

            <div className="review-author">
              — Meera
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ProductDetails;