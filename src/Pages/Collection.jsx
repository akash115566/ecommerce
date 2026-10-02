import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronLeft,
  FaChevronRight,
  FaShoppingBag,
  FaArrowRight,
} from "react-icons/fa";

import { useCart } from "../Context/CartContext";
import "../Styles/collection.css";

/* =========================================================
   JASMINE MIX FRUIT SOAP
========================================================= */

const jasmineSoap = {
  name: "Jasmine Mix Fruit Soap",
  subtitle: "Jasmine • Fruit Extracts • Radiant Glow",
  price: 549,
  oldPrice: 749,
  size: "100g",
  image: "/home/soap/jasmine-mix-fruit.jfif",
  badge: "PREMIUM",
};

/* =========================================================
   PREMIUM LUXURY SOAP COLLECTION
========================================================= */

const premiumLuxurySoaps = [
  {
    name: "Almond Turmeric Soap",
    subtitle: "Almond • Turmeric • Nourishing Care",
    price: 499,
    oldPrice: 699,
    size: "100g",
    image: "/home/soap/almond-turmeric.jfif",
    badge: "PREMIUM",
  },

  {
    name: "Rose Jasmine Soap",
    subtitle: "Rose • Jasmine • Floral Luxury",
    price: 549,
    oldPrice: 749,
    size: "100g",
    image: "/home/soap/rose-jasmine.jfif",
    badge: "PREMIUM",
  },

  {
    name: "Sea Buckthorn Soap",
    subtitle: "Sea Buckthorn • Botanical Care",
    price: 599,
    oldPrice: 799,
    size: "100g",
    image: "/home/soap/sea-buckthorn.jfif",
    badge: "PREMIUM",
  },

  {
    name: "Green Tea Mint Soap",
    subtitle: "Green Tea • Mint • Fresh Care",
    price: 549,
    oldPrice: 749,
    size: "100g",
    image: "/home/soap/green-tea-mint.jfif",
    badge: "PREMIUM",
  },

  {
    name: "Orange Lemongrass Soap",
    subtitle: "Orange • Lemongrass • Refreshing Care",
    price: 549,
    oldPrice: 749,
    size: "100g",
    image: "/home/soap/orange-lemongrass.jfif",
    badge: "PREMIUM",
  },

  {
    name: "Rose Gold Dust Soap",
    subtitle: "Rose • Gold Dust • Luxury Glow",
    price: 599,
    oldPrice: 799,
    size: "100g",
    image: "/home/soap/rose-gold-dust.jfif",
    badge: "LUXURY",
  },

  {
    name: "Gold Orange Soap",
    subtitle: "Gold • Orange • Radiance Ritual",
    price: 649,
    oldPrice: 849,
    size: "100g",
    image: "/home/soap/gold-orange.jfif",
    badge: "LUXURY",
  },

  {
    name: "Coffee Vanilla Soap",
    subtitle: "Coffee • Vanilla • Smooth Skin",
    price: 649,
    oldPrice: 849,
    size: "100g",
    image: "/home/soap/coffee-vanilla.jfif",
    badge: "LUXURY",
  },

  {
    name: "Shea Butter Soap",
    subtitle: "Shea Butter • Moisture • Softness",
    price: 649,
    oldPrice: 849,
    size: "100g",
    image: "/home/soap/shea-butter.jfif",
    badge: "PREMIUM",
  },

  {
    name: "Aloe Vera Sea Buckthorn Soap",
    subtitle: "Aloe Vera • Sea Buckthorn • Hydration",
    price: 599,
    oldPrice: 799,
    size: "100g",
    image: "/home/soap/aloe-seabuckthorn.jfif",
    badge: "PREMIUM",
  },

  {
    name: "Orange Mandarin Soap",
    subtitle: "Orange • Mandarin • Fresh Glow",
    price: 549,
    oldPrice: 749,
    size: "100g",
    image: "/home/soap/orange-mandarin.jfif",
    badge: "PREMIUM",
  },
];

/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToBag = () => {
    addToCart({
      ...product,
      qty: 1,
    });
  };

  return (
    <article className="collection-product-card">

      {/* IMAGE */}

      <div className="collection-product-image">

        <Link
          to="/product-details"
          state={{ product }}
          className="collection-image-link"
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
          />
        </Link>

        <span className="collection-product-badge">
          {product.badge}
        </span>

      </div>

      {/* CONTENT */}

      <div className="collection-product-content">

        <h3>
          {product.name}
        </h3>

        <p className="collection-product-subtitle">
          {product.subtitle}
        </p>

        <div className="collection-price-row">

          <span className="collection-current-price">
            ₹{product.price}
          </span>

          <span className="collection-old-price">
            ₹{product.oldPrice}
          </span>

        </div>

        <div className="collection-card-actions">

          <button
            type="button"
            className="collection-add-btn"
            onClick={handleAddToBag}
          >
            ADD TO BAG
            <FaShoppingBag />
          </button>

          <Link
            to="/product-details"
            state={{ product }}
            className="collection-view-btn"
          >
            VIEW
          </Link>

        </div>

      </div>

    </article>
  );
}

/* =========================================================
   JASMINE FEATURE SLIDER
========================================================= */

function JasmineSlider() {

  const sliderRef = useRef(null);
  const { addToCart } = useCart();

  const slideLeft = () => {
    sliderRef.current?.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    sliderRef.current?.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };

  const handleAdd = () => {
    addToCart({
      ...jasmineSoap,
      qty: 1,
    });
  };

  return (
    <div className="jasmine-slider-wrapper">

      <button
        className="collection-slider-arrow jasmine-left"
        onClick={slideLeft}
        aria-label="Previous product"
      >
        <FaChevronLeft />
      </button>

      <div
        className="jasmine-slider"
        ref={sliderRef}
      >

        <div className="jasmine-product-card">

          {/* IMAGE */}

          <div className="jasmine-product-image">

            <Link
              to="/product-details"
              state={{ product: jasmineSoap }}
            >
              <img
                src={jasmineSoap.image}
                alt={jasmineSoap.name}
              />
            </Link>

            <span>
              PREMIUM
            </span>

          </div>

          {/* DETAILS */}

          <div className="jasmine-product-details">

            <small>
              PREMIUM LUXURY SOAP
            </small>

            <h3>
              {jasmineSoap.name}
            </h3>

            <p>
              {jasmineSoap.subtitle}
            </p>

            <div className="jasmine-price">

              <strong>
                ₹{jasmineSoap.price}
              </strong>

              <del>
                ₹{jasmineSoap.oldPrice}
              </del>

            </div>

            <button
              className="jasmine-add-btn"
              onClick={handleAdd}
            >
              ADD TO BAG
              <FaShoppingBag />
            </button>

            <Link
              to="/product-details"
              state={{ product: jasmineSoap }}
              className="jasmine-view-btn"
            >
              VIEW PRODUCT
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </div>

      <button
        className="collection-slider-arrow jasmine-right"
        onClick={slideRight}
        aria-label="Next product"
      >
        <FaChevronRight />
      </button>

    </div>
  );
}

/* =========================================================
   MAIN COLLECTION SLIDER
========================================================= */

function PremiumCollectionSlider() {

  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current?.scrollBy({
      left: -900,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    sliderRef.current?.scrollBy({
      left: 900,
      behavior: "smooth",
    });
  };

  return (
    <div className="premium-slider-main">

      <button
        className="collection-slider-arrow collection-left"
        onClick={slideLeft}
        aria-label="Previous products"
      >
        <FaChevronLeft />
      </button>

      <div
        className="premium-products-slider"
        ref={sliderRef}
      >

        {premiumLuxurySoaps.map((product, index) => (
          <ProductCard
            product={product}
            key={`${product.name}-${index}`}
          />
        ))}

      </div>

      <button
        className="collection-slider-arrow collection-right"
        onClick={slideRight}
        aria-label="Next products"
      >
        <FaChevronRight />
      </button>

    </div>
  );
}

/* =========================================================
   COLLECTION PAGE
========================================================= */

function Collection() {

  return (
    <main className="collection-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="collection-hero">

        <div className="collection-hero-overlay"></div>

        <div className="collection-hero-content">

          <span className="collection-eyebrow">
            TELLUS ESSENTIALS
          </span>

          <h1>
            Curated Luxury
            <br />
            <span>For Your Natural Glow</span>
          </h1>

          <p>
            Discover our carefully curated collection of premium
            luxury soaps, crafted with beautiful botanical
            ingredients for a refined everyday bathing ritual.
          </p>

          <a
            href="#premium-soaps"
            className="collection-hero-btn"
          >
            EXPLORE COLLECTION
            <FaArrowRight />
          </a>

        </div>

      </section>


      {/* =====================================================
          JASMINE MIX FRUIT SOAP
      ===================================================== */}

      <section className="jasmine-section">

        <div className="collection-section-heading">

          <div>

            <span>
              PREMIUM LUXURY SOAPS
            </span>

            <h2>
              Jasmine Mix Fruit Soap
            </h2>

            <p>
              A refreshing blend of jasmine and fruit-inspired
              care, created for soft, smooth and naturally radiant
              looking skin.
            </p>

          </div>

          <Link
            to="/product-details"
            state={{ product: jasmineSoap }}
            className="collection-view-all"
          >
            VIEW PRODUCT
            <FaArrowRight />
          </Link>

        </div>

        <JasmineSlider />

      </section>


      {/* =====================================================
          PREMIUM LUXURY SOAP COLLECTION
      ===================================================== */}

      <section
        className="premium-collection-section"
        id="premium-soaps"
      >

        <div className="collection-section-heading">

          <div>

            <span>
              PREMIUM LUXURY SOAPS
            </span>

            <h2>
              Our Signature Soap Collection
            </h2>

            <p>
              Indulge in a collection where nature meets luxury.
              Explore nourishing blends of botanicals, flowers,
              fruits and rich natural butters.
            </p>

          </div>

          <span className="collection-count">
            {premiumLuxurySoaps.length} SIGNATURE RITUALS
          </span>

        </div>


        <PremiumCollectionSlider />


        {/* DOTS */}

        <div className="collection-slider-dots">

          <span className="active"></span>
          <span></span>
          <span></span>
          <span></span>

        </div>

      </section>


      {/* =====================================================
          BOTTOM PHILOSOPHY
      ===================================================== */}

      <section className="collection-philosophy">

        <div className="philosophy-content">

          <span>
            THE TELLUS RITUAL
          </span>

          <h2>
            Where Nature Meets
            <br />
            <em>Luxury</em>
          </h2>

          <p>
            Every Tellus Essentials soap is designed to transform
            an everyday bath into a beautiful self-care ritual.
            From floral notes to nourishing botanical blends,
            discover your signature bathing experience.
          </p>

          <a
            href="#premium-soaps"
            className="philosophy-btn"
          >
            DISCOVER THE COLLECTION
            <FaArrowRight />
          </a>

        </div>

      </section>

    </main>
  );
}

export default Collection;