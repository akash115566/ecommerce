import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import "../Styles/camelsoap.css";

const camelProducts = [
  {
    id: "camel-001",
    name: "Pure Camel Milk Luxury Soap",
    subtitle: "Pure Camel Milk • Gentle Cleansing",
    price: 499,
    oldPrice: 599,
    size: "100g",
   image: "/home/gift/giftbbox.jfif",
  },
  {
    id: "camel-002",
    name: "Camel Milk & Saffron Soap",
    subtitle: "Camel Milk • Saffron • Glow",
    price: 549,
    oldPrice: 699,
    size: "100g",
    image: "/home/gift/giftbboxx.jfif",
  },
  {
    id: "camel-003",
    name: "Camel Milk & Rose Soap",
    subtitle: "Camel Milk • Rose • Softness",
    price: 499,
    oldPrice: 599,
    size: "100g",
    image: "/home/gift/giftboox.jfif",
  },
  {
    id: "camel-004",
    name: "Camel Milk & Shea Butter Soap",
    subtitle: "Camel Milk • Shea Butter • Nourishment",
    price: 599,
    oldPrice: 749,
    size: "100g",
    image: "/home/gift/giftcamel.jfif",
  },
  {
    id: "camel-005",
    name: "Camel Milk & Honey Soap",
    subtitle: "Camel Milk • Honey • Hydration",
    price: 549,
    oldPrice: 649,
    size: "100g",
    image: "/home/gift/giftfour.jfif",
  },
  {
    id: "camel-006",
    name: "Camel Milk & Almond Soap",
    subtitle: "Camel Milk • Almond • Silky Skin",
    price: 579,
    oldPrice: 699,
    size: "100g",
    image: "/home/gift/giftgoat.jfif",
  },
];

const CamelSoap = () => {
  const { addToCart } = useCart();

  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "next" ? 330 : -330,
      behavior: "smooth",
    });
  };

  return (
    <main className="camel-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="camel-hero">

        <div className="camel-hero-image">
          <img
            src="/home/soap/camelmilk.jfif"
            alt="Pure Camel Milk Luxury Soap"
          />
        </div>

        <div className="camel-hero-overlay"></div>

        <div className="camel-hero-content">

          <span className="camel-eyebrow">
            TELLUS ESSENTIALS
          </span>

          <h1>
            Camel Milk
            <br />
            Luxury Soap
          </h1>

          <p>
            A timeless bathing ritual enriched with the
            natural goodness of camel milk for beautifully
            soft, nourished and radiant-looking skin.
          </p>

          <Link
            to="/collection"
            className="camel-primary-btn"
          >
            EXPLORE COLLECTION
          </Link>

        </div>

      </section>


    

  




      {/* =====================================================
          PRODUCT SLIDER
      ===================================================== */}

      <section className="camel-products-section">

        <div className="camel-products-heading">

          <div>

            <span className="camel-section-label">
              CAMEL MILK COLLECTION
            </span>

            <h2>
              Discover our
              <br />
              luxury milk soaps.
            </h2>

          </div>


          <p>
            Explore our collection of beautifully crafted
            milk soaps, created to bring nourishment,
            softness and luxury into your daily ritual.
          </p>

        </div>


        <div className="camel-products-slider-wrap">

          <button
            type="button"
            className="camel-slider-btn camel-slider-prev"
            onClick={() => scrollSlider("prev")}
            aria-label="Previous products"
          >
            ‹
          </button>


          <div
            className="camel-products-slider"
            ref={sliderRef}
          >

            {camelProducts.map((product) => (

              <article
                className="camel-product-card"
                key={product.id}
              >

                {/* PRODUCT IMAGE */}

                <div className="camel-product-card-image">

                  <span className="camel-product-badge">
                    LUXURY
                  </span>

                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />

                </div>


                {/* PRODUCT CONTENT */}

                <div className="camel-product-card-content">

                  <span className="camel-product-size">
                    {product.size}
                  </span>

                  <h3>
                    {product.name}
                  </h3>

                  <p className="camel-product-subtitle">
                    {product.subtitle}
                  </p>


                  <div className="camel-card-price">

                    <span>
                      ₹{product.price}
                    </span>

                    <del>
                      ₹{product.oldPrice}
                    </del>

                  </div>


                  <div className="camel-product-actions">

                    <button
                      type="button"
                      className="camel-add-btn"
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
                      className="camel-view-btn"
                    >
                      VIEW PRODUCT
                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>


          <button
            type="button"
            className="camel-slider-btn camel-slider-next"
            onClick={() => scrollSlider("next")}
            aria-label="Next products"
          >
            ›
          </button>

        </div>

      </section>

        {/* =====================================================
          INTRO
      ===================================================== */}

          <section className="camel-intro">

        <div className="camel-intro-content">

          <span className="camel-section-label">
            THE CAMEL MILK RITUAL
          </span>

          <h2>
            Where ancient
            <br />
            nourishment meets
            <br />
            modern luxury.
          </h2>

          <p>
            Discover the indulgent touch of camel milk in a
            beautifully crafted bathing ritual. Our luxury
            soap collection is designed to transform everyday
            cleansing into a moment of comfort and care.
          </p>

          <p>
            Rich, creamy and gentle, camel milk brings a
            naturally nourishing character to the ritual,
            while carefully selected botanical ingredients
            create a refined sensory experience.
          </p>

        </div>


        <div className="camel-intro-image">

          <img
            src="/home/gift/giftgold.jfif"
            alt="Camel Milk Soap"
          />

          <div className="camel-image-caption">
            <span>PURE</span>
            <strong>CAMEL MILK</strong>
            <span>DAILY RITUAL</span>
          </div>

        </div>

      </section>

      
      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="camel-benefits">

        <div className="camel-benefits-heading">

          <span className="camel-section-label">
            THE EXPERIENCE
          </span>

          <h2>
            A luxurious ritual
            <br />
            for everyday skin.
          </h2>

        </div>


        <div className="camel-benefits-grid">

          <div className="camel-benefit-card">

            <span className="camel-benefit-number">
              01
            </span>

            <h3>
              Nourishing
            </h3>

            <p>
              Enjoy a rich cleansing experience designed
              to leave skin feeling soft and comfortable.
            </p>

          </div>


          <div className="camel-benefit-card">

            <span className="camel-benefit-number">
              02
            </span>

            <h3>
              Gentle Cleansing
            </h3>

            <p>
              A creamy bathing ritual that feels gentle
              and indulgent with every use.
            </p>

          </div>


          <div className="camel-benefit-card">

            <span className="camel-benefit-number">
              03
            </span>

            <h3>
              Silky Finish
            </h3>

            <p>
              Crafted to give your daily bath a soft,
              smooth and luxurious finishing touch.
            </p>

          </div>


          <div className="camel-benefit-card">

            <span className="camel-benefit-number">
              04
            </span>

            <h3>
              Luxury Ritual
            </h3>

            <p>
              Turn an ordinary shower into a refined
              self-care experience.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          LUXURY BANNER
      ===================================================== */}

      <section className="camel-luxury-banner">

        <div className="camel-luxury-overlay"></div>

        <div className="camel-luxury-content">

          <span>
            A RICHER BATHING EXPERIENCE
          </span>

          <h2>
            Let your daily ritual
            <br />
            feel extraordinary.
          </h2>

          <p>
            From the first touch to the final rinse,
            experience a bathing ritual created around
            softness, comfort and timeless luxury.
          </p>

          <Link
            to="/collection"
            className="camel-light-btn"
          >
            SHOP THE COLLECTION
          </Link>

        </div>

      </section>


      {/* =====================================================
          INGREDIENTS
      ===================================================== */}

      <section className="camel-ingredients">

        <div className="camel-ingredients-image">

          <img
            src="/home/gift/giftmilk.jfif"
            alt="Camel Milk Luxury Soap"
            loading="lazy"
          />

        </div>


        <div className="camel-ingredients-content">

          <span className="camel-section-label">
            INSPIRED BY NATURE
          </span>

          <h2>
            Carefully selected
            <br />
            ingredients.
          </h2>

          <p>
            Our camel milk inspired bathing ritual brings
            together nourishing ingredients and elegant
            fragrance profiles for an elevated everyday
            experience.
          </p>


          <div className="camel-ingredient-list">

            <div className="camel-ingredient-item">

              <span>01</span>

              <div>
                <h3>
                  Camel Milk
                </h3>

                <p>
                  A naturally nourishing element at the
                  heart of the ritual.
                </p>
              </div>

            </div>


            <div className="camel-ingredient-item">

              <span>02</span>

              <div>
                <h3>
                  Botanical Oils
                </h3>

                <p>
                  Selected for a comfortable and refined
                  cleansing experience.
                </p>
              </div>

            </div>


            <div className="camel-ingredient-item">

              <span>03</span>

              <div>
                <h3>
                  Luxury Botanicals
                </h3>

                <p>
                  Carefully chosen botanical touches
                  complement the bathing ritual.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="camel-final-cta">

        <span className="camel-section-label">
          TELLUS ESSENTIALS
        </span>

        <h2>
          Elevate your
          <br />
          everyday bathing ritual.
        </h2>

        <p>
          Discover the art of luxurious cleansing with
          our premium camel milk inspired collection.
        </p>

        <Link
          to="/collection"
          className="camel-primary-btn"
        >
          EXPLORE COLLECTION
        </Link>

      </section>

    </main>
  );
};

export default CamelSoap;