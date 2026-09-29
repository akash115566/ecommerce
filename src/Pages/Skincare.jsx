import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaShoppingBag,
} from "react-icons/fa";

import { useCart } from "../Context/CartContext";
import "../Styles/skincare.css";


/* =========================================================
   PREMIUM SOAP COLLECTION
========================================================= */

const premiumSoaps = [
  {
    name: "Pure Camel Milk Soap",
    price: 499,
    oldPrice: 699,
    size: "100g",
    image: "/home/gift/giftbox.jfif",
  },

  {
    name: "Camel Milk Honey Soap",
    price: 549,
    oldPrice: 749,
    size: "100g",
    image: "/home/gift/giftboox.jfif",
  },

  {
    name: "Camel Milk & Rose Soap",
    price: 549,
    oldPrice: 749,
    size: "100g",
    image: "/home/gift/giftcamel.jfif",
  },

  {
    name: "Camel Milk Nourishing Soap",
    price: 599,
    oldPrice: 799,
    size: "100g",
    image: "/home/gift/giftgoat.jfif",
  },

  {
    name: "Natural Botanical Soap",
    price: 449,
    oldPrice: 599,
    size: "100g",
    image: "/home/soap/soap1.jfif",
  },

  {
    name: "Herbal Glow Soap",
    price: 499,
    oldPrice: 649,
    size: "100g",
    image: "/home/soap/soap2.jfif",
  },
];


/* =========================================================
   LUXURY SOAP COLLECTION
========================================================= */

const luxurySoaps = [
  {
    name: "Camel Milk & Saffron Soap",
    price: 599,
    oldPrice: 799,
    size: "100g",
    image: "/home/gift/gifbboxx.jfif",
  },

  {
    name: "Camel Milk Luxury Bath Soap",
    price: 649,
    oldPrice: 849,
    size: "100g",
    image: "/home/gift/giftfour.jfif",
  },

  {
    name: "Royal Saffron Bath Bar",
    price: 699,
    oldPrice: 899,
    size: "100g",
    image: "/home/soap/soap3.jfif",
  },

  {
    name: "Luxury Rose Milk Soap",
    price: 649,
    oldPrice: 849,
    size: "100g",
    image: "/home/soap/soap4.jfif",
  },

  {
    name: "Golden Milk Luxury Soap",
    price: 749,
    oldPrice: 999,
    size: "100g",
    image: "/home/soap/soap5.jfif",
  },

  {
    name: "Royal Botanical Cleansing Bar",
    price: 699,
    oldPrice: 899,
    size: "100g",
    image: "/home/soap/soap6.jfif",
  },
];


/* =========================================================
   SOAP SLIDER
========================================================= */

const SoapSlider = ({ products, badgeText = "PREMIUM" }) => {

  const sliderRef = useRef(null);

  const { addToCart } = useCart();


  /* LEFT */

  const slideLeft = () => {
    sliderRef.current?.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };


  /* RIGHT */

  const slideRight = () => {
    sliderRef.current?.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };


  /* ADD TO BAG */

  const handleAddToBag = (product) => {

    addToCart({
      ...product,

      /* CartContext ke liye */
      qty: 1,

      /* Product identification */
      size: product.size || "100g",
    });

  };


  return (
    <div className="soap-slider-wrapper">


      {/* LEFT ARROW */}

      <button
        type="button"
        className="soap-arrow soap-arrow-left"
        onClick={slideLeft}
        aria-label="Previous products"
      >
        <FaChevronLeft />
      </button>


      {/* PRODUCTS */}

      <div
        className="soap-slider"
        ref={sliderRef}
      >

        {products.map((product, index) => (

          <div
            className="soap-card"
            key={`${product.name}-${index}`}
          >


            {/* PRODUCT IMAGE */}

            <Link
              to="/product-details"
              state={{
                product,
              }}
              className="soap-image-box"
            >

              <span className="soap-badge">
                {badgeText}
              </span>


              <img
                src={product.image}
                alt={product.name}
              />

            </Link>


            {/* PRODUCT INFO */}

            <div className="soap-info">


              <Link
                to="/product-details"
                state={{
                  product,
                }}
                className="soap-product-name"
              >

                <h3>
                  {product.name}
                </h3>

              </Link>


              {/* PRICE */}

              <div className="soap-price">

                <span className="current-price">
                  ₹{product.price}
                </span>

                <span className="old-price">
                  ₹{product.oldPrice}
                </span>

              </div>


              {/* ADD TO BAG */}

              <button
                type="button"
                className="soap-add-btn"
                onClick={() => handleAddToBag(product)}
              >

                <FaShoppingBag />

                <span>
                  ADD TO BAG
                </span>

              </button>


              {/* VIEW PRODUCT */}

              <Link
                to="/product-details"
                state={{
                  product,
                }}
                className="soap-view-btn"
              >

                VIEW PRODUCT

                <FaArrowRight />

              </Link>


            </div>

          </div>

        ))}

      </div>


      {/* RIGHT ARROW */}

      <button
        type="button"
        className="soap-arrow soap-arrow-right"
        onClick={slideRight}
        aria-label="Next products"
      >
        <FaChevronRight />
      </button>

    </div>
  );
};


/* =========================================================
   SKINCARE PAGE
========================================================= */

const Skincare = () => {

  return (

    <main className="skincare-page">


      {/* =================================================
          HERO
      ================================================= */}

      <section className="skincare-hero">

        <div className="skincare-hero-content">

          <span className="hero-small-title">
            TELLUS ESSENTIALS
          </span>


          <h1>
            Luxury Soap
            <br />
            Rituals
          </h1>


          <p>
            Discover nourishing bath rituals crafted with
            precious milk, botanical extracts and timeless
            natural ingredients.
          </p>


          <a
            href="#premium-soaps"
            className="hero-button"
          >
            EXPLORE COLLECTION

            <FaArrowRight />

          </a>

        </div>

      </section>



      {/* =================================================
          PREMIUM SOAP
      ================================================= */}

      <section
        className="soap-section"
        id="premium-soaps"
      >

        <div className="soap-heading">

          <div>

            <span className="section-overline">
              EVERYDAY LUXURY
            </span>


            <h2>
              Premium Soap Collection
            </h2>


            <p>
              Gentle cleansing with nourishing ingredients
              designed for your everyday bathing ritual.
            </p>

          </div>


          <Link
            to="/product-details"
            className="view-all"
          >

            VIEW ALL

            <FaArrowRight />

          </Link>

        </div>


        <SoapSlider
          products={premiumSoaps}
          badgeText="PREMIUM"
        />

      </section>



      {/* =================================================
          LUXURY SOAP
      ================================================= */}

      <section className="luxury-soap-section">

        <div className="soap-heading">

          <div>

            <span className="section-overline">
              THE SIGNATURE COLLECTION
            </span>


            <h2>
              Luxury Soap Collection
            </h2>


            <p>
              Indulge in refined bath rituals inspired by
              traditional beauty wisdom and modern luxury.
            </p>

          </div>


          <Link
            to="/product-details"
            className="view-all"
          >

            DISCOVER MORE

            <FaArrowRight />

          </Link>

        </div>


        <SoapSlider
          products={luxurySoaps}
          badgeText="LUXURY"
        />

      </section>



      {/* =================================================
          PHILOSOPHY
      ================================================= */}

      <section className="soap-philosophy">

        <div className="philosophy-content">

          <span>
            THE TELLUS RITUAL
          </span>


          <h2>
            Where Nature Meets
            <br />
            Luxury
          </h2>


          <p>
            From camel milk and saffron to delicate botanical
            extracts, every Tellus soap is created to transform
            your everyday bath into a luxurious self-care ritual.
          </p>

        </div>

      </section>

    </main>
  );
};


export default Skincare;