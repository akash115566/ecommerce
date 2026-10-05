import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaShoppingBag,
} from "react-icons/fa";

import { useCart } from "../Context/CartContext";
import "../Styles/serum.css";


/* =========================================================
   PREMIUM SERUMS
========================================================= */

const premiumSerums = [
  {
    name: "Vitamin C Radiance Serum",
    subtitle: "Brightening • Radiance • Glow",
    price: 1299,
    oldPrice: 1599,
    size: "30ml",
    image: "/home/serum/serumblack.jfif",
  },

  {
    name: "Hyaluronic Dew Hydration Serum",
    subtitle: "Deep Hydration • Softness",
    price: 1399,
    oldPrice: 1699,
    size: "30ml",
    image: "/home/serum/serumc.jfif",
  },

  {
    name: "Niacinamide Skin Refining Serum",
    subtitle: "Texture • Balance • Care",
    price: 1249,
    oldPrice: 1499,
    size: "30ml",
    image: "/home/serum/serumcheck.jfif",
  },

  {
    name: "Rose Glow Face Serum",
    subtitle: "Radiance • Softness • Glow",
    price: 1299,
    oldPrice: 1599,
    size: "30ml",
    image: "/home/serum/serumdot.jfif",
  },

  {
    name: "Kumkumadi Luxury Face Serum",
    subtitle: "Traditional Glow Ritual",
    price: 1499,
    oldPrice: 1799,
    size: "30ml",
    image: "/home/serum/serumdrop.jfif",
  },

  {
    name: "Saffron Brightening Serum",
    subtitle: "Illuminating • Nourishing",
    price: 1599,
    oldPrice: 1899,
    size: "30ml",
    image: "/home/serum/serumhand.jfif",
  },
    {
    name: "Saffron Brightening Serum",
    subtitle: "Illuminating • Nourishing",
    price: 1599,
    oldPrice: 1899,
    size: "30ml",
    image: "/home/serum/serumblack.jfif",
  },
];


/* =========================================================
   LUXURY SERUMS
========================================================= */

const luxurySerums = [
  {
    name: "24K Gold Radiance Serum",
    subtitle: "Illuminating • Luxury Glow",
    price: 1999,
    oldPrice: 2499,
    size: "30ml",
    image: "/home/serum/serumorange.jfif",
  },

  {
    name: "Saffron & Rose Elixir",
    subtitle: "Nourishing • Radiant • Silky",
    price: 1799,
    oldPrice: 2199,
    size: "30ml",
    image: "/home/serum/serumshow.jfif",
  },

  {
    name: "Bakuchiol Renewal Serum",
    subtitle: "Smooth • Refined • Nourished",
    price: 1899,
    oldPrice: 2299,
    size: "30ml",
    image: "/home/serum/serumstone.jfif",
  },

  {
    name: "Kumkumadi Glow Elixir",
    subtitle: "Royal Botanical Ritual",
    price: 1999,
    oldPrice: 2499,
    size: "30ml",
    image: "/home/serum/serumwhite.jfif",
  },

  {
    name: "Pearl Illuminating Face Serum",
    subtitle: "Soft Radiance • Luxury Care",
    price: 1899,
    oldPrice: 2299,
    size: "30ml",
    image: "/home/serum/serumyellow.jfif",
  },

  // {
  //   name: "Royal Botanical Youth Serum",
  //   subtitle: "Advanced Botanical Care",
  //   price: 2199,
  //   oldPrice: 2699,
  //   size: "30ml",
  //   image: "/home/serum/serumblack.jfif",
  // },
];


/* =========================================================
   SERUM SLIDER
========================================================= */

const SerumSlider = ({
  products,
  badgeText = "PREMIUM",
}) => {

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
      qty: 1,
    });

  };


  return (
  
    
   
    <div className="serum-slider-wrapper">


      {/* LEFT ARROW */}

      <button
        type="button"
        className="serum-arrow serum-arrow-left"
        onClick={slideLeft}
        aria-label="Previous products"
      >
        <FaChevronLeft />
      </button>


      {/* SLIDER */}

      <div
        className="serum-slider"
        ref={sliderRef}
      >

        {products.map((product, index) => (

          <div
            className="serum-card"
            key={`${product.name}-${index}`}
          >


            {/* IMAGE */}

            <Link
              to="/product-details"
              state={{
                product,
              }}
              className="serum-image-box"
            >

              <span className="serum-badge">
                {badgeText}
              </span>


              <img
                src={product.image}
                alt={product.name}
              />

            </Link>


            {/* INFO */}

            <div className="serum-info">


              <Link
                to="/product-details"
                state={{
                  product,
                }}
                className="serum-product-name"
              >

                <h3>
                  {product.name}
                </h3>

              </Link>


              <p className="serum-subtitle">
                {product.subtitle}
              </p>


              {/* PRICE */}

              <div className="serum-price">

                <span className="serum-current-price">
                  ₹{product.price}
                </span>

                <span className="serum-old-price">
                  ₹{product.oldPrice}
                </span>

              </div>


              {/* ADD TO BAG */}

              <button
                type="button"
                className="serum-add-btn"
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
                className="serum-view-btn"
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
        className="serum-arrow serum-arrow-right"
        onClick={slideRight}
        aria-label="Next products"
      >
        <FaChevronRight />
      </button>

    </div>
  );
};


/* =========================================================
   SERUM PAGE
========================================================= */

const Serum = () => {

  return (
      <>
     <Helmet>
        {/* =========================
            BASIC SEO
        ========================== */}

        <title>
          Premium Face Serums | Luxury Skincare Serums | Tellus Essentials
        </title>

        <meta
          name="description"
          content="Discover premium and luxury face serums by Tellus Essentials. Explore Vitamin C, Hyaluronic Acid, Niacinamide, Kumkumadi, Saffron and botanical-inspired skincare serums for radiant, hydrated and nourished skin."
        />

        <meta
          name="keywords"
          content="face serum, premium face serum, luxury face serum, skincare serum, Vitamin C serum, Hyaluronic acid serum, Niacinamide serum, Kumkumadi serum, Saffron serum, natural face serum, luxury skincare, Tellus Essentials serum"
        />

        <meta
          name="author"
          content="Tellus Essentials"
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <link
          rel="canonical"
          href="https://tellusessentials.com/serum"
        />


        {/* =========================
            OPEN GRAPH
        ========================== */}

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content="Premium Face Serums | Luxury Skincare | Tellus Essentials"
        />

        <meta
          property="og:description"
          content="Explore premium and luxury face serums from Tellus Essentials, crafted around botanical inspiration, nourishing ingredients and refined skincare rituals."
        />

        <meta
          property="og:url"
          content="https://tellusessentials.com/serum"
        />

        <meta
          property="og:site_name"
          content="Tellus Essentials"
        />

        <meta
          property="og:image"
          content="https://tellusessentials.com/home/serum/serumblack.jfif"
        />

        <meta
          property="og:image:alt"
          content="Tellus Essentials Premium Face Serum"
        />

        <meta
          property="og:locale"
          content="en_IN"
        />


        {/* =========================
            TWITTER / X
        ========================== */}

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Premium Face Serums | Tellus Essentials"
        />

        <meta
          name="twitter:description"
          content="Discover premium and luxury face serums designed for hydration, radiance, nourishment and everyday skincare rituals."
        />

        <meta
          name="twitter:image"
          content="https://tellusessentials.com/home/serum/serumblack.jfif"
        />

        <meta
          name="twitter:image:alt"
          content="Tellus Essentials Premium Face Serum"
        />


        {/* =========================
            STRUCTURED DATA
        ========================== */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",

            name: "Premium Face Serums | Luxury Serum Collection",

            description:
              "Explore premium and luxury face serums by Tellus Essentials, including Vitamin C, Hyaluronic Acid, Niacinamide, Kumkumadi and Saffron-inspired skincare formulas.",

            url: "https://tellusessentials.com/serum",

            isPartOf: {
              "@type": "WebSite",
              name: "Tellus Essentials",
              url: "https://tellusessentials.com/",
            },

            about: {
              "@type": "Thing",
              name: "Face Serums",
            },

            publisher: {
              "@type": "Organization",
              name: "Tellus Essentials",
              url: "https://tellusessentials.com/",
            },

            mainEntity: {
              "@type": "ItemList",

              itemListElement: [
                ...premiumSerums.map((product, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  name: product.name,
                  url: "https://tellusessentials.com/product-details",
                  image: `https://tellusessentials.com${product.image}`,
                })),

                ...luxurySerums.map((product, index) => ({
                  "@type": "ListItem",
                  position: premiumSerums.length + index + 1,
                  name: product.name,
                  url: "https://tellusessentials.com/product-details",
                  image: `https://tellusessentials.com${product.image}`,
                })),
              ],
            },
          })}
        </script>


        {/* =========================
            BREADCRUMB SCHEMA
        ========================== */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",

            "@type": "BreadcrumbList",

            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://tellusessentials.com/",
              },

              {
                "@type": "ListItem",
                position: 2,
                name: "Serums",
                item: "https://tellusessentials.com/serum",
              },
            ],
          })}
        </script>


        {/* =========================
            WEBSITE SCHEMA
        ========================== */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",

            "@type": "WebSite",

            name: "Tellus Essentials",

            url: "https://tellusessentials.com/",

            potentialAction: {
              "@type": "SearchAction",

              target: {
                "@type": "EntryPoint",

                urlTemplate:
                  "https://tellusessentials.com/search?q={search_term_string}",
              },

              "query-input":
                "required name=search_term_string",
            },
          })}
        </script>

      </Helmet>

    <main className="serum-page">


      {/* =================================================
          HERO
      ================================================= */}

      <section className="serum-hero">

        <div className="serum-hero-overlay">

          <div className="serum-hero-content">

            <span className="serum-hero-small">
              TELLUS ESSENTIALS
            </span>


            <h1>
              The Art of
              <br />
              Serum Rituals
            </h1>


            <p>
              Discover concentrated skincare rituals created
              with precious botanicals, nourishing oils and
              carefully selected ingredients.
            </p>


            <a
              href="#premium-serums"
              className="serum-hero-btn"
            >

              EXPLORE SERUMS

              <FaArrowRight />

            </a>

          </div>

        </div>

      </section>



      {/* =================================================
          PREMIUM SERUM
      ================================================= */}

      <section
        className="serum-section"
        id="premium-serums"
      >

        <div className="serum-heading">

          <div>

            <span className="serum-overline">
              DAILY RADIANCE
            </span>


            <h2>
              Premium Face Serums
            </h2>


            <p>
              Lightweight and elegant formulas designed to
              complement your everyday skincare ritual.
            </p>

          </div>


          <Link
            to="/product-details"
            className="serum-view-all"
          >

            VIEW ALL

            <FaArrowRight />

          </Link>

        </div>


        <SerumSlider
          products={premiumSerums}
          badgeText="PREMIUM"
        />

      </section>



      {/* =================================================
          LUXURY SERUM
      ================================================= */}

      <section className="luxury-serum-section">

        <div className="serum-heading">

          <div>

            <span className="serum-overline">
              THE SIGNATURE ELIXIRS
            </span>


            <h2>
              Luxury Serum Collection
            </h2>


            <p>
              Experience the refined side of skincare with
              concentrated botanical-inspired formulas and
              indulgent textures.
            </p>

          </div>


          <Link
            to="/product-details"
            className="serum-view-all"
          >

            DISCOVER MORE

            <FaArrowRight />

          </Link>

        </div>


        <SerumSlider
          products={luxurySerums}
          badgeText="LUXURY"
        />

      </section>



      {/* =================================================
          PHILOSOPHY
      ================================================= */}

      <section className="serum-philosophy">

        <div className="serum-philosophy-content">

          <span>
            THE TELLUS BEAUTY RITUAL
          </span>


          <h2>
            Where Science Meets
            <br />
            Nature & Luxury
          </h2>


          <p>
            Every Tellus serum is created around the philosophy
            that effective skincare can also feel luxurious.
            Discover refined textures, botanical inspiration
            and carefully considered formulations designed to
            become part of your daily ritual.
          </p>


          <Link
            to="/product-details"
            className="serum-philosophy-btn"
          >

            DISCOVER YOUR SERUM

            <FaArrowRight />

          </Link>

        </div>

      </section>

    </main>
     </>
  );
};


export default Serum;