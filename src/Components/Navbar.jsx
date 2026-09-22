import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";

function Navbar() {
  const [offerSlide, setOfferSlide] = useState(0);

  // MEGA MENU
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("SKIN CARE");

  const offerTexts = [
    "WE DELIVER ACROSS INDIA & INTERNATIONALLY.",
    "COMPLIMENTARY SAMPLES ABOVE ₹999!",
    "COMPLIMENTARY TOTE BAG ON ₹12,999+*",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setOfferSlide((prev) => (prev + 1) % offerTexts.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  /* =========================================================
     SHOP BY CONCERN DATA
  ========================================================= */

  const concernData = {
    "SKIN CARE": {
      products: [
        {
          name: "Vitamin C Face Serum",
          image: "/home/serum/serumblack.jfif",
          link: "/product-details",
        },
        {
          name: "Panchpushp Facial Mist",
          image: "/home/serum/serumc.jfif",
          link: "/product-details",
        },
        {
          name: "Luxury Face Cream",
          image: "/home/serum/serumblack.jfif",
          link: "/product-details",
        },
        {
          name: "Natural Face Cleanser",
          image: "/home/serum/serumc.jfif",
          link: "/product-details",
        },
        {
          name: "Hydrating Skin Serum",
          image: "/home/serum/serumblack.jfif",
          link: "/product-details",
        },
        {
          name: "Premium Sunscreen",
          image: "/home/serum/serumc.jfif",
          link: "/product-details",
        },
      ],

      banners: [
        {
          image: "/home/serum/serumblack.jfif",
          title: "LUXURY SKINCARE",
          link: "/face",
        },
        {
          image: "/home/serum/serumc.jfif",
          title: "PREMIUM RITUALS",
          link: "/face",
        },
      ],
    },

    "HAIR CARE": {
      products: [
        {
          name: "Bhringraj Hair Oil",
          image: "/home/serum/serumblack.jfif",
          link: "/hair",
        },
        {
          name: "Luxury Hair Serum",
          image: "/home/serum/serumc.jfif",
          link: "/hair",
        },
        {
          name: "Ayurvedic Hair Mask",
          image: "/home/serum/serumblack.jfif",
          link: "/hair",
        },
        {
          name: "Nourishing Shampoo",
          image: "/home/serum/serumc.jfif",
          link: "/hair",
        },
        {
          name: "Premium Conditioner",
          image: "/home/serum/serumblack.jfif",
          link: "/hair",
        },
      ],

      banners: [
        {
          image: "/home/serum/serumblack.jfif",
          title: "HAIR RITUALS",
          link: "/hair",
        },
        {
          image: "/home/serum/serumc.jfif",
          title: "NATURAL HAIR CARE",
          link: "/hair",
        },
      ],
    },

    "BATH & BODY": {
      products: [
        {
          name: "Luxury Body Wash",
          image: "/home/serum/serumblack.jfif",
          link: "/bath-body",
        },
        {
          name: "Natural Body Lotion",
          image: "/home/serum/serumc.jfif",
          link: "/bath-body",
        },
        {
          name: "Bath & Body Oil",
          image: "/home/serum/serumblack.jfif",
          link: "/bath-body",
        },
        {
          name: "Hand Care Ritual",
          image: "/home/serum/serumc.jfif",
          link: "/bath-body",
        },
      ],

      banners: [
        {
          image: "/home/serum/serumblack.jfif",
          title: "BODY RITUALS",
          link: "/bath-body",
        },
        {
          image: "/home/serum/serumc.jfif",
          title: "BATH ESSENTIALS",
          link: "/bath-body",
        },
      ],
    },

    "MEN": {
      products: [
        {
          name: "Men Face Wash",
          image: "/home/serum/serumblack.jfif",
          link: "/men",
        },
        {
          name: "Men Face Serum",
          image: "/home/serum/serumc.jfif",
          link: "/men",
        },
        {
          name: "Men Hair Care",
          image: "/home/serum/serumblack.jfif",
          link: "/men",
        },
        {
          name: "Men Body Care",
          image: "/home/serum/serumc.jfif",
          link: "/men",
        },
      ],

      banners: [
        {
          image: "/home/serum/serumblack.jfif",
          title: "MEN'S GROOMING",
          link: "/men",
        },
        {
          image: "/home/serum/serumc.jfif",
          title: "MEN'S ESSENTIALS",
          link: "/men",
        },
      ],
    },

    "FRAGRANCE": {
      products: [
        {
          name: "Luxury Perfume",
          image: "/home/serum/serumblack.jfif",
          link: "/fragrance",
        },
        {
          name: "Premium Body Mist",
          image: "/home/serum/serumc.jfif",
          link: "/fragrance",
        },
        {
          name: "Essential Oils",
          image: "/home/serum/serumblack.jfif",
          link: "/fragrance",
        },
      ],

      banners: [
        {
          image: "/home/serum/serumblack.jfif",
          title: "SIGNATURE FRAGRANCE",
          link: "/fragrance",
        },
        {
          image: "/home/serum/serumc.jfif",
          title: "LUXURY SCENTS",
          link: "/fragrance",
        },
      ],
    },
  };

  const categories = Object.keys(concernData);

  return (
    <>
      {/* =====================================================
          OFFER BAR
      ===================================================== */}

      <div className="offer-bar">
        <div className="offer-slider">
          {offerTexts[offerSlide]}
        </div>
      </div>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="header">

        <div className="main-header">

          {/* LEFT */}

          <nav className="desktop-left-nav">

            <div
              className="shop-concern-wrapper"
              onMouseEnter={() => {
                setShopMenuOpen(true);
              }}
            >

              <Link
                to="/face"
                className="main-nav-link shop-concern-link"
              >
                SHOP BY CONCERN
              </Link>


              {/* =================================================
                  MEGA MENU
              ================================================= */}

              {shopMenuOpen && (

                <div
                  className="mega-menu"
                  onMouseLeave={() => {
                    setShopMenuOpen(false);
                  }}
                >

                  {/* LEFT CATEGORY */}

                  <div className="mega-sidebar">

                    {categories.map((category) => (

                      <Link
                        to={
                          concernData[category].products[0]?.link ||
                          "#"
                        }
                        key={category}
                        className={`mega-category ${
                          activeCategory === category
                            ? "active"
                            : ""
                        }`}
                        onMouseEnter={() =>
                          setActiveCategory(category)
                        }
                      >
                        {category}
                      </Link>

                    ))}

                  </div>


                  {/* CENTER PRODUCTS */}

                  <div className="mega-products">

                    <div className="mega-products-heading">

                      {activeCategory}

                    </div>


                    <div className="product-list">

                      {concernData[
                        activeCategory
                      ].products.map((product, index) => (

                        <Link
                          to={product.link}
                          className="mega-product"
                          key={index}
                        >

                          <div className="mega-product-image">

                            <img
                              src={product.image}
                              alt={product.name}
                            />

                          </div>

                          <span>
                            {product.name}
                          </span>

                        </Link>

                      ))}

                    </div>


                    <Link
                      to={
                        concernData[
                          activeCategory
                        ].products[0]?.link || "#"
                      }
                      className="mega-view-all"
                    >
                      VIEW ALL {activeCategory} →
                    </Link>

                  </div>


                  {/* RIGHT PROMOTIONAL BANNERS */}

                  <div className="mega-banners">

                    {concernData[
                      activeCategory
                    ].banners.map((banner, index) => (

                      <Link
                        to={banner.link}
                        className="mega-banner"
                        key={index}
                      >

                        <img
                          src={banner.image}
                          alt={banner.title}
                        />

                        <div className="mega-banner-overlay">
                          <span>
                            {banner.title}
                          </span>
                        </div>

                      </Link>

                    ))}

                  </div>

                </div>

              )}

            </div>


            {/* COLLECTIONS */}

            <Link
              to="/collections"
              className="main-nav-link"
            >
              COLLECTIONS
            </Link>


            {/* OUR STORY */}

            <Link
              to="/our-story"
              className="main-nav-link"
            >
              OUR STORY
            </Link>

             <Link
              to="/about-us"
              className="main-nav-link"
            >
              ABOUT
            </Link>


            {/* BLOG */}

            <Link
              to="/blog"
              className="main-nav-link"
            >
              BLOGS
            </Link>

          </nav>


          {/* =====================================================
              LOGO
          ===================================================== */}

          <Link
            to="/"
            className="logo"
          >

            <span className="logo-main">
              Tellus
            </span>

            <span className="logo-sub">
              ESSENTIALS
            </span>

            <small>
              PREMIUM LUXURY SKIN CARE
            </small>

          </Link>


          {/* =====================================================
              RIGHT MENU
          ===================================================== */}

          <div className="right-menu">

            <Link
              to="/track-order"
              className="track-order"
            >

              <span className="truck-icon">
                ♧
              </span>

              Track Order

            </Link>


            <div className="search-box">

              <input
                type="text"
                placeholder="Search"
              />

              <span className="search-icon">
                ⌕
              </span>

            </div>


            <Link
              to="/account"
              className="round-icon"
            >
              ♙
            </Link>


            <Link
              to="/cart"
              className="round-icon cart-icon"
            >

              🛒

              <b>
                0
              </b>

            </Link>

          </div>

        </div>


        {/* =====================================================
            MOBILE / CATEGORY NAV
        ===================================================== */}

      
      </header>
    </>
  );
}

export default Navbar;