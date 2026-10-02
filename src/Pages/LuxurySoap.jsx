import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import "../Styles/luxurysoap.css";

const luxurySoaps = [
  {
    id: 1,
    name: "Coffee Vanilla Luxury Soap",
    price: 4999,
    oldPrice: 5999,
    size: "100g",
    image: "/home/luxurysoap/coffee.jfif",
    subtitle: "Coffee • Vanilla • Botanical Oils",
    badge: "PREMIUM",
  },
  {
    id: 2,
    name: "Orange Mandarin Luxury Soap",
    price: 4999,
    oldPrice: 5999,
    size: "100g",
    image: "/home/luxurysoap/orange.jfif",
    subtitle: "Orange • Mandarin • Citrus Extracts",
    badge: "LUXURY",
  },
  {
    id: 3,
    name: "Aloe Vera Luxury Soap",
    price: 4999,
    oldPrice: 5999,
    size: "100g",
    image: "/home/luxurysoap/aloevera.jfif",
    subtitle: "Aloe Vera • Botanical Extracts",
    badge: "PREMIUM",
  },
  {
    id: 4,
    name: "Aloe Vera & Orange Luxury Soap",
    price: 4999,
    oldPrice: 5999,
    size: "100g",
    image: "/home/luxurysoap/aloe.jfif",
    subtitle: "Aloe Vera • Orange • Natural Extracts",
    badge: "NEW",
  },
  {
    id: 5,
    name: "Coffee Luxury Soap",
    price: 4999,
    oldPrice: 5999,
    size: "100g",
    image: "/home/luxurysoap/coff.jfif",
    subtitle: "Coffee • Botanical Oils • Natural Care",
    badge: "LUXURY",
  },
  {
    id: 6,
    name: "Orange Luxury Soap",
    price: 4999,
    oldPrice: 5999,
    size: "100g",
    image: "/home/luxurysoap/orang.jfif",
    subtitle: "Orange • Citrus • Botanical Extracts",
    badge: "PREMIUM",
  },
];

const LuxurySoap = () => {
  const { addToCart } = useCart();
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <main className="luxury-soap-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="luxury-soap-hero">

        <div className="luxury-soap-hero-image">
          <img
            src="/home/luxurysoap/coffee.jfif"
            alt="Premium Luxury Soap"
          />
        </div>

        <div className="luxury-soap-hero-content">

          <span className="luxury-soap-eyebrow">
            TELLUS ESSENTIALS
          </span>

          <h1>
            Premium
            <br />
            <em>Luxury Soap</em>
          </h1>

          <p>
            Discover an indulgent bathing ritual crafted with
            beautiful botanical ingredients and refined luxury.
          </p>

          <a
            href="#luxury-soap-collection"
            className="luxury-soap-primary-btn"
          >
            EXPLORE COLLECTION
          </a>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="luxury-soap-intro">

        <span>
          PREMIUM LUXURY SOAP
        </span>

        <h2>
          The Art of
          <br />
          Luxurious Bathing
        </h2>

        <p>
          Indulge in the art of luxurious bathing with our premium
          handcrafted soaps, enriched with nourishing botanical
          ingredients and timeless beauty rituals.
        </p>

      </section>


      {/* =====================================================
          COLLECTION
      ===================================================== */}
      <section
        className="luxury-soap-products"
        id="luxury-soap-collection"
      >

        <div className="luxury-soap-heading">

          <div>
            <span>THE COLLECTION</span>

            <h2>
              Premium Luxury Soap
            </h2>
          </div>

          <div className="luxury-soap-slider-buttons">

            <button
              onClick={() => scrollSlider("left")}
              aria-label="Previous products"
            >
              ←
            </button>

            <button
              onClick={() => scrollSlider("right")}
              aria-label="Next products"
            >
              →
            </button>

          </div>

        </div>


        <div
          className="luxury-soap-slider"
          ref={sliderRef}
        >

          {luxurySoaps.map((product) => (

            <article
              className="luxury-soap-card"
              key={product.id}
            >

              <div className="luxury-soap-card-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <span className="luxury-soap-badge">
                  {product.badge}
                </span>

              </div>


              <div className="luxury-soap-card-content">

                <span className="luxury-soap-subtitle">
                  {product.subtitle}
                </span>

                <h3>
                  {product.name}
                </h3>

                <div className="luxury-soap-price">

                  <strong>
                    ₹{product.price}
                  </strong>

                  <del>
                    ₹{product.oldPrice}
                  </del>

                  <span>
                    {product.size}
                  </span>

                </div>


                <div className="luxury-soap-actions">

                  <button
                    className="luxury-soap-add"
                    onClick={() =>
                      addToCart({
                        ...product,
                        qty: 1,
                      })
                    }
                  >
                    ADD TO BAG
                  </button>

                  <Link
                    to="/product-details"
                    state={{
                      product: product,
                    }}
                    className="luxury-soap-view"
                  >
                    VIEW PRODUCT
                  </Link>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          LUXURY BANNER
      ===================================================== */}
      <section className="luxury-soap-banner">

        <div className="luxury-soap-banner-overlay">

          <span>
            TELLUS ESSENTIALS
          </span>

          <h2>
            Where Beauty
            <br />
            Meets Luxury
          </h2>

          <p>
            Elevate your everyday bathing ritual with
            beautifully crafted luxury soaps.
          </p>

          <a
            href="#luxury-soap-collection"
            className="luxury-soap-light-btn"
          >
            SHOP LUXURY SOAPS
          </a>

        </div>

      </section>


      {/* =====================================================
          RITUAL
      ===================================================== */}
      <section className="luxury-soap-ritual">

        <div className="luxury-soap-ritual-image">

          <img
            src="/home/luxurysoap/orange.jfif"
            alt="Orange Mandarin Luxury Soap"
          />

        </div>

        <div className="luxury-soap-ritual-content">

          <span>
            THE TELLUS RITUAL
          </span>

          <h2>
            A Moment of
            <br />
            <em>Everyday Luxury</em>
          </h2>

          <p>
            Turn an everyday bath into a beautiful self-care ritual.
            Each Tellus Essentials luxury soap is created to bring
            elegance, fragrance and indulgence into your daily routine.
          </p>

          <div className="luxury-soap-points">

            <div>
              <b>01</b>
              <span>Rich luxurious lather</span>
            </div>

            <div>
              <b>02</b>
              <span>Botanical-inspired care</span>
            </div>

            <div>
              <b>03</b>
              <span>Elegant bathing experience</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INGREDIENTS
      ===================================================== */}
      <section className="luxury-soap-ingredients">

        <div className="luxury-soap-ingredients-heading">

          <span>
            BOTANICAL BEAUTY
          </span>

          <h2>
            Inspired by
            <br />
            Nature
          </h2>

          <p>
            Thoughtfully selected ingredients inspired by timeless
            beauty rituals and modern luxury skincare.
          </p>

        </div>


        <div className="luxury-soap-ingredient-grid">

          <div>
            <span>01</span>
            <h3>Coffee</h3>
            <p>
              A rich botanical-inspired ingredient for a refined
              bathing ritual.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Vanilla</h3>
            <p>
              Adds a warm and indulgent sensorial experience.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Orange</h3>
            <p>
              A refreshing citrus-inspired touch for everyday care.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Aloe Vera</h3>
            <p>
              Inspired by soothing botanical skincare traditions.
            </p>
          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="luxury-soap-final">

        <span>
          TELLUS ESSENTIALS
        </span>

        <h2>
          Elevate Your Everyday.
          <br />
          Embrace Your Essence.
        </h2>

        <p>
          Discover the premium luxury soap collection
          created for your everyday bathing ritual.
        </p>

        <a
          href="#luxury-soap-collection"
          className="luxury-soap-primary-btn"
        >
          SHOP NOW
        </a>

      </section>

    </main>
  );
};

export default LuxurySoap;