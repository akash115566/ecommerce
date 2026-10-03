import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronLeft,
  FaChevronRight,
  FaShoppingBag,
  FaArrowRight,
} from "react-icons/fa";
import { useCart } from "../Context/CartContext";
import "../Styles/donkeymilksoap.css";

const donkeyMilkSoaps = [
  {
    name: "Pure Donkey Milk Luxury Soap",
    subtitle: "Gentle Cleansing • Soft Skin • Nourishing Care",
    price: 499,
    oldPrice: 599,
    size: "100g",
    image: "/home/gift/giftdon.jfif",
  },
  {
    name: "Donkey Milk & Honey Soap",
    subtitle: "Deep Nourishment • Softness • Natural Glow",
    price: 449,
    oldPrice: 549,
    size: "100g",
    image: "/home/gift/giftdonk.jfif",
  },
  {
    name: "Donkey Milk & Saffron Soap",
    subtitle: "Radiance • Luxury Care • Smooth Skin",
    price: 599,
    oldPrice: 699,
    size: "100g",
    image: "/home/gift/giftdonkey.jfif",
  },
  {
    name: "Donkey Milk & Rose Soap",
    subtitle: "Softening • Floral Care • Fresh Glow",
    price: 499,
    oldPrice: 599,
    size: "100g",
   image: "/home/gift/giftdon.jfif",
  },
  {
    name: "Donkey Milk & Shea Butter Soap",
    subtitle: "Moisture • Comfort • Silky Softness",
    price: 549,
    oldPrice: 649,
    size: "100g",
   image: "/home/gift/giftdonk.jfif",
  },
  {
    name: "Donkey Milk & Almond Soap",
    subtitle: "Nourishing • Smoothening • Daily Care",
    price: 479,
    oldPrice: 579,
    size: "100g",
    image: "/home/gift/giftdonkey.jfif",
  },
];

const ritualBenefits = [
  {
    title: "MILK-INSPIRED CARE",
    text: "A creamy cleansing ritual designed to leave skin feeling soft, comfortable and refreshed.",
  },
  {
    title: "NOURISHING BOTANICALS",
    text: "Thoughtfully paired with luxurious ingredients inspired by traditional beauty rituals.",
  },
  {
    title: "EVERYDAY LUXURY",
    text: "Transform your everyday bath into a refined self-care experience.",
  },
];

function DonkeyMilkSoap() {
  const sliderRef = useRef(null);
  const { addToCart } = useCart();

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  const handleAddToBag = (product) => {
    addToCart({
      ...product,
      qty: 1,
    });
  };

  return (
    <main className="donkey-page">

      {/* ================= HERO ================= */}

      <section className="donkey-hero">

        <div className="donkey-hero-content">

          <span className="donkey-eyebrow">
            TELLUS ESSENTIALS
          </span>

          <h1>
            Donkey Milk
            <br />
            <span>Luxury Soap</span>
          </h1>

          <p>
            Discover a refined bathing ritual inspired by the richness
            of milk and the timeless beauty of luxurious skincare.
          </p>

          <div className="donkey-hero-buttons">

            <a
              href="#donkey-collection"
              className="donkey-primary-btn"
            >
              EXPLORE COLLECTION
              <FaArrowRight />
            </a>

            <Link
              to="/product-details"
              state={{ product: donkeyMilkSoaps[0] }}
              className="donkey-secondary-btn"
            >
              SHOP SIGNATURE SOAP
            </Link>

          </div>

        </div>

        <div className="donkey-hero-visual">

          <div className="donkey-glow"></div>

          <img
            src="/home/gift/giftdon.jfif"
            alt="Donkey Milk Luxury Soap"
          />

          <div className="donkey-floating-card">
            <span>PREMIUM RITUAL</span>
            <strong>Donkey Milk</strong>
            <small>10g Luxury Bath Soap</small>
          </div>

        </div>

      </section>


     


      {/* ================= BENEFITS ================= */}

      {/* <section className="donkey-benefits">

        {ritualBenefits.map((item, index) => (

          <div
            className="donkey-benefit-card"
            key={index}
          >

            <span className="benefit-number">
              0{index + 1}
            </span>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </div>

        ))}

      </section> */}


 


      {/* ================= COLLECTION ================= */}

      <section
        className="donkey-collection"
        id="donkey-collection"
      >

        <div className="donkey-section-heading">

          <div>

            <span className="section-label">
              THE SIGNATURE COLLECTION
            </span>

            <h2>
              Donkey Milk
              <br />
              <span>Soap Collection</span>
            </h2>

          </div>

          <p>
            Explore our selection of premium milk-inspired soaps,
            thoughtfully created for a nourishing and luxurious
            bathing ritual.
          </p>

        </div>


        <div className="donkey-slider-wrapper">

          <button
            className="donkey-slider-btn left"
            onClick={() => scrollSlider("left")}
            aria-label="Previous products"
          >
            <FaChevronLeft />
          </button>


          <div
            className="donkey-products-slider"
            ref={sliderRef}
          >

            {donkeyMilkSoaps.map((product, index) => (

              <article
                className="donkey-product-card"
                key={index}
              >

                <div className="donkey-product-image">

                  <span className="donkey-badge">
                    PREMIUM
                  </span>

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                </div>


                <div className="donkey-product-info">

                  <span className="donkey-product-size">
                    {product.size}
                  </span>

                  <h3>
                    {product.name}
                  </h3>

                  <p>
                    {product.subtitle}
                  </p>


                  <div className="donkey-price">

                    <strong>
                      ₹{product.price}
                    </strong>

                    <del>
                      ₹{product.oldPrice}
                    </del>

                  </div>


                  <div className="donkey-product-actions">

                    <button
                      className="donkey-add-btn"
                      onClick={() => handleAddToBag(product)}
                    >
                      <FaShoppingBag />
                      ADD TO BAG
                    </button>

                    <Link
                      to="/product-details"
                      state={{ product }}
                      className="donkey-view-btn"
                    >
                      VIEW
                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>


          <button
            className="donkey-slider-btn right"
            onClick={() => scrollSlider("right")}
            aria-label="Next products"
          >
            <FaChevronRight />
          </button>

        </div>

      </section>


            {/* ================= INTRO ================= */}

      <section className="donkey-intro">

        <span className="section-label">
          THE MILK RITUAL
        </span>

        <h2>
          Where Gentle Care
          <br />
          Meets Timeless Luxury
        </h2>

        <p>
          Our Donkey Milk Soap collection brings together a luxurious
          cleansing experience with a soft, creamy character. Created
          for those who appreciate elegant everyday rituals, each bar
          is designed to make your bath feel beautifully indulgent.
        </p>

      </section>


      {/* ================= LUXURY BANNER ================= */}

      <section className="donkey-luxury-banner">

        <div className="donkey-banner-image">

          <img
            src="/home/gift/giftdonk.jfif"
            alt="Donkey Milk Ritual"
          />

        </div>

        <div className="donkey-banner-content">

          <span className="section-label">
            A REFINED BATHING RITUAL
          </span>

          <h2>
            Softness You Can
            <br />
            <span>Feel Every Day</span>
          </h2>

          <p>
            From the first lather to the final rinse, create a
            beautifully comforting ritual with our Donkey Milk
            inspired luxury soap.
          </p>

          <Link
            to="/product-details"
            state={{ product: donkeyMilkSoaps[0] }}
            className="donkey-banner-btn"
          >
            DISCOVER SIGNATURE SOAP
            <FaArrowRight />
          </Link>

        </div>

      </section>


      {/* ================= INGREDIENT SECTION ================= */}

      <section className="donkey-ingredients">

        <div className="donkey-ingredients-heading">

          <span className="section-label">
            THE TELLUS PHILOSOPHY
          </span>

          <h2>
            Crafted Around
            <br />
            <span>Beautiful Rituals</span>
          </h2>

        </div>


        <div className="donkey-ingredient-grid">

          <div className="ingredient-item">
            <span>01</span>
            <h3>Donkey Milk</h3>
            <p>
              A luxurious milk-inspired element at the heart
              of this signature bathing collection.
            </p>
          </div>

          <div className="ingredient-item">
            <span>02</span>
            <h3>Honey</h3>
            <p>
              Inspired by nature's timeless beauty rituals
              and comforting skincare traditions.
            </p>
          </div>

          <div className="ingredient-item">
            <span>03</span>
            <h3>Saffron</h3>
            <p>
              A classic luxury ingredient associated with
              radiant and refined beauty rituals.
            </p>
          </div>

          <div className="ingredient-item">
            <span>04</span>
            <h3>Shea Butter</h3>
            <p>
              Selected for its rich, comforting character
              in a luxurious bath-time experience.
            </p>
          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="donkey-final">

        <span className="section-label">
          TELLUS ESSENTIALS
        </span>

        <h2>
          Elevate Your Everyday.
          <br />
          <span>Embrace Your Essence.</span>
        </h2>

        <p>
          Make every bath a moment of luxury with the
          Donkey Milk Soap Collection.
        </p>

        <a
          href="#donkey-collection"
          className="donkey-final-btn"
        >
          SHOP THE COLLECTION
          <FaArrowRight />
        </a>

      </section>

    </main>
  );
}

export default DonkeyMilkSoap;