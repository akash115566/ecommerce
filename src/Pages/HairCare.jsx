import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import "../Styles/haircare.css";

const hairProducts = [
  {
    id: 1,
    name: "Tellus Essentials Bhringraj Hair Oil",
    price: 1199,
    oldPrice: 1499,
    size: "100ml",
    image: "/home/hair/hairpack.jfif",
    subtitle: "Bhringraj • Amla • Botanical Oils",
    badge: "BESTSELLER",
  },
  {
    id: 2,
    name: "Tellus Essentials Argan Hair Oil",
    price: 1299,
    oldPrice: 1599,
    size: "100ml",
    image: "/home/hair/hairoil.jfif",
    subtitle: "Argan • Vitamin E • Silk Protein",
    badge: "PREMIUM",
  },
  {
    id: 3,
    name: "Tellus Essentials Saffron Almond Hair Oil",
    price: 1099,
    oldPrice: 1399,
    size: "100ml",
    image: "/home/hair/hairjatrapha.jfif",
    subtitle: "Saffron • Almond • Jojoba",
    badge: "PREMIUM",
  },
  {
    id: 4,
    name: "Tellus Essentials Kumkumadi Hair Oil",
    price: 1399,
    oldPrice: 1699,
    size: "100ml",
    image: "/home/hair/haircream.jfif",
    subtitle: "Kumkumadi • Herbal Extracts • Botanical Oils",
    badge: "NEW",
  },
  {
    id: 5,
    name: "Tellus Essentials Rosemary Hair Serum",
    price: 999,
    oldPrice: 1299,
    size: "50ml",
    image: "/home/hair/hairclean.jfif",
    subtitle: "Rosemary • Peptides • Botanical Actives",
    badge: "NEW",
  },
  {
    id: 6,
    name: "Tellus Essentials Keratin Hair Serum",
    price: 1199,
    oldPrice: 1499,
    size: "50ml",
    image: "/home/hair/hairbox.jfif",
    subtitle: "Keratin • Argan • Silk Proteins",
    badge: "PREMIUM",
  },
  
];
const benefits = [
  {
    number: "01",
    title: "Deep Nourishment",
    text: "Rich botanical oils nourish every strand and leave hair feeling soft, smooth and beautifully conditioned.",
  },
  {
    number: "02",
    title: "Botanical Care",
    text: "Inspired by timeless beauty rituals and enriched with carefully selected botanical ingredients.",
  },
  {
    number: "03",
    title: "Silky Finish",
    text: "Luxury hair rituals designed to enhance shine, softness and the natural beauty of your hair.",
  },
  {
    number: "04",
    title: "Everyday Ritual",
    text: "Simple yet indulgent formulations created for a refined daily hair-care experience.",
  },
];

const HairCare = () => {
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
    <main className="hair-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="hair-hero">

        <div className="hair-hero-image">
          <img
            src="/home/hair/hair-banner.jfif"
            alt="Tellus Essentials Luxury Hair Care"
          />
        </div>

        <div className="hair-hero-content">

          <span className="hair-eyebrow">
            THE LUXURY HAIR RITUAL
          </span>

          <h1>
            Beautiful Hair,
            <br />
            <em>Inspired by Nature.</em>
          </h1>

          <p>
            Discover a refined collection of botanical hair rituals,
            enriched with luxurious oils, herbs and nourishing
            ingredients for naturally beautiful hair.
          </p>

          <Link to="#hair-collection" className="hair-primary-btn">
            EXPLORE HAIR CARE
          </Link>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}
      {/* <section className="hair-intro">

        <div className="hair-intro-small">
          TELLUS ESSENTIALS
        </div>

        <h2>
          Where Ancient Hair Rituals
          <br />
          Meet Modern Luxury
        </h2>

        <p>
          Our Hair Care collection brings together timeless botanical
          traditions and contemporary luxury formulations. From
          nourishing oils to elegant serums and restorative masks,
          every ritual is created to make hair care feel beautifully
          indulgent.
        </p>

      </section> */}




      {/* =====================================================
          PRODUCT COLLECTION
      ===================================================== */}
      <section
        className="hair-products-section"
        id="hair-collection"
      >

        <div className="hair-products-heading">

          <div>

            <span>
              DISCOVER YOUR RITUAL
            </span>

            <h2>
              Luxury Hair Care
            </h2>

          </div>

          <div className="hair-slider-buttons">

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
          className="hair-product-slider"
          ref={sliderRef}
        >

          {hairProducts.map((product) => (

            <article
              className="hair-product-card"
              key={product.id}
            >

              <div className="hair-product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <span className="hair-product-badge">
                  {product.badge}
                </span>

              </div>


              <div className="hair-product-info">

                <span className="hair-product-subtitle">
                  {product.subtitle}
                </span>

                <h3>
                  {product.name}
                </h3>

                <div className="hair-product-price">

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


                <div className="hair-product-actions">

                  <button
                    className="hair-add-btn"
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
                    className="hair-view-btn"
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
          FEATURED RITUAL
      ===================================================== */}
      <section className="hair-featured">

        <div className="hair-featured-image">

          <img
            src="/home/hair/bhringraj-hair-oil.jfif"
            alt="Bhringraj Luxury Hair Oil"
          />

        </div>

        <div className="hair-featured-content">

          <span>
            THE SIGNATURE RITUAL
          </span>

          <h2>
            Bhringraj
            <br />
            <em>Luxury Hair Oil</em>
          </h2>

          <p>
            A deeply nourishing botanical hair ritual inspired by
            traditional Indian beauty wisdom. Bhringraj, Amla and
            precious botanical oils come together to create an
            indulgent oiling experience.
          </p>

          <div className="hair-featured-points">

            <div>
              <span>01</span>
              <p>Botanical nourishment</p>
            </div>

            <div>
              <span>02</span>
              <p>Rich luxurious texture</p>
            </div>

            <div>
              <span>03</span>
              <p>Beautiful natural shine</p>
            </div>

          </div>

          <Link
            to="/product-details"
            state={{
              product: hairProducts[0],
            }}
            className="hair-primary-btn"
          >
            DISCOVER THE RITUAL
          </Link>

        </div>

      </section>

      
      {/* =====================================================
          BENEFITS
      ===================================================== */}
      <section className="hair-benefits">

        <div className="hair-section-heading">

          <span>
            THE TELLUS RITUAL
          </span>

          <h2>
            Care Beyond
            <br />
            The Ordinary
          </h2>

        </div>

        <div className="hair-benefit-grid">

          {benefits.map((item) => (
            <div
              className="hair-benefit-card"
              key={item.number}
            >

              <span className="hair-benefit-number">
                {item.number}
              </span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>
          ))}

        </div>

      </section>


      {/* =====================================================
          INGREDIENTS
      ===================================================== */}
      <section className="hair-ingredients">

        <div className="hair-ingredients-content">

          <span>
            BOTANICAL INGREDIENTS
          </span>

          <h2>
            Nature's Finest
            <br />
            Hair Rituals
          </h2>

          <p>
            Each Tellus Hair Care ritual is inspired by powerful
            botanical traditions and luxurious beauty ingredients
            selected to create a sensorial hair-care experience.
          </p>

        </div>


        <div className="hair-ingredients-grid">

          <div className="hair-ingredient-item">
            <span>01</span>
            <h3>Bhringraj</h3>
            <p>
              A timeless Ayurvedic botanical celebrated in
              traditional hair rituals.
            </p>
          </div>

          <div className="hair-ingredient-item">
            <span>02</span>
            <h3>Amla</h3>
            <p>
              A classic botanical ingredient used in nourishing
              Indian hair-care traditions.
            </p>
          </div>

          <div className="hair-ingredient-item">
            <span>03</span>
            <h3>Argan</h3>
            <p>
              A luxurious oil known for its elegant,
              conditioning feel.
            </p>
          </div>

          <div className="hair-ingredient-item">
            <span>04</span>
            <h3>Saffron</h3>
            <p>
              A precious botanical associated with timeless
              luxury beauty rituals.
            </p>
          </div>

        </div>

      </section>


      {/* =====================================================
          PHILOSOPHY BANNER
      ===================================================== */}
      <section className="hair-philosophy">

        <div className="hair-philosophy-overlay">

          <span>
            TELLUS ESSENTIALS
          </span>

          <h2>
            Your Hair.
            <br />
            Your Ritual.
            <br />
            Your Essence.
          </h2>

          <p>
            Elevate your everyday hair-care ritual with
            the beauty of nature and the elegance of luxury.
          </p>

          <Link
            to="/collection"
            className="hair-light-btn"
          >
            EXPLORE COLLECTION
          </Link>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="hair-final">

        <span>
          THE TELLUS HAIR RITUAL
        </span>

        <h2>
          Elevate Your Everyday.
          <br />
          Embrace Your Essence.
        </h2>

        <p>
          Discover hair care created for moments of
          beauty, indulgence and self-care.
        </p>

        <Link
          to="#hair-collection"
          className="hair-primary-btn"
        >
          SHOP HAIR CARE
        </Link>

      </section>

    </main>
  );
};

export default HairCare;