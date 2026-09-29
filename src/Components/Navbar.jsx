import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";

function Navbar() {
  /* =========================================================
     STATES
  ========================================================= */

  const [offerSlide, setOfferSlide] = useState(0);

  // Desktop Mega Menu
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("SKIN CARE");

  // Mobile Menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileConcernOpen, setMobileConcernOpen] = useState(false);
  const [mobileCategory, setMobileCategory] = useState(null);


  /* =========================================================
     OFFER BAR
  ========================================================= */

  const offerTexts = [
    "WE DELIVER ACROSS INDIA & INTERNATIONALLY.",
    "COMPLIMENTARY SAMPLES ABOVE ₹999!",
    "COMPLIMENTARY TOTE BAG ON ₹12,999+*",
  ];


  useEffect(() => {
    const timer = setInterval(() => {
      setOfferSlide(
        (prev) => (prev + 1) % offerTexts.length
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);


  /* =========================================================
     SHOP BY CONCERN DATA
  ========================================================= */

  const concernData = {

    /* =======================================================
       SKIN CARE
    ======================================================= */

    "SKIN CARE": {
      products: [

        {
          name: "Vitamin C Face Serum",
          image: "/home/serum/serumblack.jfif",
          link: "/serum",
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
    


    /* =======================================================
       BATH & BODY
    ======================================================= */

    "BATH & BODY": {

      products: [

        {
          name: "Luxury Body Wash",
          image: "/home/soap/soapgold.jfif",
          link: "/seasonal",
        },

        {
          name: "Natural Body Lotion",
           image: "/home/soap/soapgreen.jfif",
          link: "/SKINCARE",
        },

        {
          name: "Bath & Body Oil",
           image: "/home/soap/soappink.jfif",
          link: "/bath-body",
        },

        {
          name: "Hand Care Ritual",
          image: "/home/soap/soapred.jfif",
          link: "/bath-body",
        },

      ],

      banners: [

        {
           image: "/home/soap/soapwhite.jfif",
          title: "BODY RITUALS",
          link: "/bath-body",
        },

        {
           image: "/home/soap/soapgold.jfif",
          title: "BATH ESSENTIALS",
          link: "/bath-body",
        },

      ],
    },

   "PREMIUM LUXURY SOAP": {
  products: [

    {
      name: "Pure Camel Milk Luxury Soap",
      image: "/home/gift/giftbbox.jfif",
      link: "/skincare",
    },

    {
      name: "Saffron & Turmeric Glow Soap",
       image: "/home/gift/giftbboxx.jfif",
      link: "/product-details",
    },

   
  

  ],

  banners: [

    {
      image: "/home/gift/giftbox.jfif",
      title: "CAMEL MILK LUXURY",
      link: "/product-details",
    },

    {
      image: "/home/gift/giftcamel.jfif",
      title: "PREMIUM GLOW RITUALS",
      link: "/product-details",
    },

  ],
},

  "DUNKY MILK SOAP": {
  products: [

    {
      name: "Pure Dunky Milk Luxury Soap",
      image: "/home/gift/giftdon.jfif",
      link: "/donkeymilk",
        price: 499,
      oldPrice: 599,
    },

    {
      name: "Dunky Milk & Saffron Soap",
      image: "/home/gift/giftdonk.jfif",
      link: "/product-details",
        price: 499,
      oldPrice: 599,
    },

  
    {
      name: "Dunky Milk & Shea Butter Soap",
      image: "/home/gift/giftdonkey.jfif",
      link: "/product-details",
        price: 499,
      oldPrice: 599,
    },

  

  ],

  banners: [

    {
      image: "/home/gift/giftdonkey.jfif",
      title: "DUNKY MILK LUXURY",
      link: "/product-details",
    },

    {
      image: "/home/gift/giftdonk.jfif",
      title: "NOURISHING MILK RITUAL",
      link: "/product-details",
    },

  ],
},
 "CAMEL MILK SOAP": {
  products: [

    {
      name: "Pure Camel Milk Soap",
      image: "/home/gift/giftbox.jfif",
      price: 499,
      oldPrice: 699,
      link: "/product-details",
    },

    {
      name: "Camel Milk & Saffron Soap",
      image: "/home/gift/gifbboxx.jfif",
      price: 599,
      oldPrice: 799,
      link: "/product-details",
    },

    {
      name: "Camel Milk Honey Soap",
      image: "/home/gift/giftboox.jfif",
      price: 549,
      oldPrice: 749,
      link: "/product-details",
    },

    {
      name: "Camel Milk & Rose Soap",
      image: "/home/gift/giftcamel.jfif",
      price: 549,
      oldPrice: 749,
      link: "/product-details",
    },

    {
      name: "Camel Milk Luxury Bath Soap",
      image: "/home/gift/giftfour.jfif",
      price: 649,
      oldPrice: 849,
      link: "/product-details",
    },

    {
      name: "Camel Milk Nourishing Soap",
      image: "/home/gift/giftgoat.jfif",
      price: 599,
      oldPrice: 799,
      link: "/product-details",
    },

  ],

  banners: [
    {
      image: "/home/gift/giftbbox.jfif",
      title: "CAMEL MILK LUXURY",
      link: "/face",
    },

    {
      image: "/home/gift/giftbboxx.jfif",
      title: "NOURISHING BATH RITUALS",
      link: "/face",
    },
  ],
},


    

    /* =======================================================
       GIFTING
    ======================================================= */

    "GIFTING": {

      products: [

        {
          name: "Normal Gift",
          image: "/home/gift/giftcamel.jfif",
          link: "/gifting",
        },

        {
          name: "Luxury Gift",
          image: "/home/gift/giftfour.jfif",
          link: "/gifting",
        },

        {
          name: "Premium Gift Set",
          image: "/home/gift/giftgoat.jfif",
          link: "/gifting",
        },

        {
          name: "Signature Gift",
          image: "/home/gift/giftmilk.jfif",
          link: "/gifting",
        },

      ],

      banners: [

        {
          image: "/home/gift/giftbbox.jfif",
          title: "LUXURY GIFTING",
          link: "/gifting",
        },

        {
          image: "/home/gift/giftboox.jfif",
          title: "SIGNATURE GIFTS",
          link: "/gifting",
        },

      ],
    },


    /* =======================================================
       MEN
    ======================================================= */

    "HAIR  CLEANSER": {

      products: [

       {
  name: "Hair Cleanser",
  image: "/home/hair/hairbox.jfif",
  link: "/hair",
},

{
  name: "Hair Oil",
  image: "/home/hair/haircream.jfif",
  link: "/hair",
},

{
  name: "Hair Mask",
 image: "/home/hair/hairoil.jfif",
  link: "/hair",
},

{
  name: "Hair Serum",
  image: "/home/hair/hairpack.jfif",
  link: "/hair",
},

      ],

      banners: [

        {
          image: "/home/hair/hairjatrapha.jfif",
          title: "HAIR GROOMING",
          link: "/men",
        },

        {
          image: "/home/hair/hairbox.jfif",
          title: "MEN'S ESSENTIALS",
          link: "/men",
        },

      ],
    },


    /* =======================================================
       FRAGRANCE
    ======================================================= */

    "7 STAR HOTEL LUXURY RANGE": {

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


  /* =========================================================
     CLOSE MOBILE MENU
  ========================================================= */

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileConcernOpen(false);
    setMobileCategory(null);
  };


  /* =========================================================
     RENDER
  ========================================================= */

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
          DESKTOP HEADER
      ===================================================== */}

      <header className="header">

        <div className="main-header">


          {/* =================================================
              DESKTOP LEFT NAV
          ================================================= */}

          <nav className="desktop-left-nav">
             {/* LOGO — STARTING */}
              <Link to="/" className="header-logo">
    <img
      src="/home/logo.jpeg"
      alt="Tellus Essentials"
      style={{ height:"50px",width:'80px',background: "transparent",zIndex:"3px"}}
    />
  </Link>
 


            {/* ===============================================
                SHOP BY CONCERN
            =============================================== */}

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


              {/* =============================================
                  DESKTOP MEGA MENU
              ============================================= */}

              {shopMenuOpen && (

                <div
                  className="mega-menu"

                  onMouseLeave={() => {
                    setShopMenuOpen(false);
                  }}
                >


                  {/* =========================================
                      LEFT CATEGORY
                  ========================================= */}

                  <div className="mega-sidebar">

                    {categories.map((category) => (

                      <Link
                        to={
                          concernData[category]
                            .products[0]?.link || "#"
                        }

                        state={{
                          category: category,
                        }}

                        key={category}

                        className={`mega-category ${
                          activeCategory === category
                            ? "active"
                            : ""
                        }`}

                        onMouseEnter={() =>
                          setActiveCategory(category)
                        }

                        onClick={() =>
                          setShopMenuOpen(false)
                        }
                      >

                        {category}

                      </Link>

                    ))}

                  </div>


                  {/* =========================================
                      CENTER PRODUCTS
                  ========================================= */}

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

                          state={{
                            category: activeCategory,
                            product: product,
                          }}

                          className="mega-product"

                          key={index}

                          onClick={() =>
                            setShopMenuOpen(false)
                          }
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


                    {/* =======================================
                        VIEW ALL
                    ======================================= */}

                    <Link
                      to={
                        concernData[
                          activeCategory
                        ].products[0]?.link || "#"
                      }

                      state={{
                        category: activeCategory,
                      }}

                      className="mega-view-all"

                      onClick={() =>
                        setShopMenuOpen(false)
                      }
                    >

                      VIEW ALL {activeCategory} →

                    </Link>

                  </div>


                  {/* =========================================
                      RIGHT BANNERS
                  ========================================= */}

                  <div className="mega-banners">

                    {concernData[
                      activeCategory
                    ].banners.map((banner, index) => (

                      <Link
                        to={banner.link}

                        state={{
                          category: activeCategory,
                        }}

                        className="mega-banner"

                        key={index}

                        onClick={() =>
                          setShopMenuOpen(false)
                        }
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


            {/* =================================================
                COLLECTIONS
            ================================================= */}

            <Link
              to="/collections"
              className="main-nav-link"
            >
              COLLECTIONS
            </Link>


            {/* =================================================
                OUR STORY
            ================================================= */}

            <Link
              to="/our-story"
              className="main-nav-link"
            >
              OUR STORY
            </Link>


            {/* =================================================
                ABOUT
            ================================================= */}

            <Link
              to="/about-us"
              className="main-nav-link"
            >
              ABOUT
            </Link>


            {/* =================================================
                BLOGS
            ================================================= */}

            <Link
              to="/blog"
              className="main-nav-link"
            >
              BLOGS
            </Link>


            {/* =================================================
                GIFTING
            ================================================= */}

            <Link
              to="/gifting"
              className="main-nav-link"
            >
              GIFTING
            </Link>

          </nav>


          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            className="logo"
          >

            <span className="logo-main">
              TELLUS
            </span>

            <span className="logo-sub">
              ESSENTIALS
            </span>

            <small>
              PREMIUM LUXURY SKIN CARE
            </small>

          </Link>


          {/* =================================================
              RIGHT MENU
          ================================================= */}

          <div className="right-menu">


            {/* TRACK ORDER */}

            {/* <Link
              to="/track-order"
              className="track-order"
            >

              <span className="truck-icon">
                ♧
              </span>

              Track Order

            </Link> */}


            {/* SEARCH */}

            <div className="search-box">

              <input
                type="text"
                placeholder="Search"
              />

              <span className="search-icon">
                ⌕
              </span>

            </div>


            {/* ACCOUNT */}

            <Link
              to="/account"
              className="round-icon"
            >
              ♙
            </Link>


            {/* CART */}

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
            MOBILE NAVIGATION
        ===================================================== */}

        <div className="mobile-nav">


          {/* ===================================================
              MOBILE TOP
          =================================================== */}

          <div className="mobile-nav-top">


            {/* HAMBURGER */}

            <button
              type="button"
              className="mobile-menu-btn"

              onClick={() =>
                setMobileMenuOpen(
                  !mobileMenuOpen
                )
              }
            >

              <span></span>
              <span></span>
              <span></span>

            </button>


            {/* MOBILE LOGO */}

            <Link
              to="/"
              className="mobile-logo"

              onClick={closeMobileMenu}
            >

              <span>
                TELLUS
              </span>

              <small>
                ESSENTIALS
              </small>

            </Link>


            {/* MOBILE CART */}

            <Link
              to="/cart"
              className="mobile-cart"
            >

              🛒

              <b>
                0
              </b>

            </Link>

          </div>


          {/* ===================================================
              MOBILE MENU
          =================================================== */}

          {mobileMenuOpen && (

            <div className="mobile-menu">


              {/* =============================================
                  SHOP BY CONCERN
              ============================================= */}

              <button
                type="button"
                className="mobile-menu-item mobile-shop-btn"

                onClick={() => {

                  setMobileConcernOpen(
                    !mobileConcernOpen
                  );

                  setMobileCategory(null);

                }}
              >

                <span>
                  SHOP BY CONCERN
                </span>

                <span className="mobile-plus">

                  {mobileConcernOpen
                    ? "−"
                    : "+"}

                </span>

              </button>


              {/* =============================================
                  CONCERN CATEGORIES
              ============================================= */}

              {mobileConcernOpen && (

                <div className="mobile-concern-list">


                  {categories.map((category) => (

                    <div
                      className="mobile-category-block"
                      key={category}
                    >


                      {/* CATEGORY */}

                      <button
                        type="button"
                        className="mobile-category"

                        onClick={() => {

                          setMobileCategory(

                            mobileCategory === category
                              ? null
                              : category

                          );

                        }}
                      >

                        <span>
                          {category}
                        </span>

                        <span>

                          {mobileCategory === category
                            ? "−"
                            : "+"}

                        </span>

                      </button>


                      {/* ===================================
                          PRODUCTS
                      =================================== */}

                      {mobileCategory === category && (

                        <div className="mobile-products">

                          {concernData[
                            category
                          ].products.map(
                            (product, index) => (

                              <Link
                                key={index}

                                to={product.link}

                                state={{
                                  category: category,
                                  product: product,
                                }}

                                className="mobile-product"

                                onClick={
                                  closeMobileMenu
                                }
                              >

                                <div className="mobile-product-image">

                                  <img
                                    src={product.image}
                                    alt={product.name}
                                  />

                                </div>

                                <span>
                                  {product.name}
                                </span>

                              </Link>

                            )
                          )}

                        </div>

                      )}

                    </div>

                  ))}

                </div>

              )}


              {/* =============================================
                  COLLECTIONS
              ============================================= */}

              <Link
                to="/collections"
                className="mobile-menu-item"

                onClick={closeMobileMenu}
              >

                COLLECTIONS

              </Link>


              {/* =============================================
                  OUR STORY
              ============================================= */}

              <Link
                to="/our-story"
                className="mobile-menu-item"

                onClick={closeMobileMenu}
              >

                OUR STORY

              </Link>


              {/* =============================================
                  ABOUT
              ============================================= */}

              <Link
                to="/about-us"
                className="mobile-menu-item"

                onClick={closeMobileMenu}
              >

                ABOUT

              </Link>


              {/* =============================================
                  BLOGS
              ============================================= */}

              <Link
                to="/blog"
                className="mobile-menu-item"

                onClick={closeMobileMenu}
              >

                BLOGS

              </Link>


              {/* =============================================
                  GIFTING
              ============================================= */}

              <Link
                to="/gifting"
                className="mobile-menu-item"

                onClick={closeMobileMenu}
              >

                GIFTING

              </Link>


              {/* =============================================
                  TRACK ORDER
              ============================================= */}

              <Link
                to="/track-order"
                className="mobile-menu-item"

                onClick={closeMobileMenu}
              >

                TRACK ORDER

              </Link>


              {/* =============================================
                  ACCOUNT
              ============================================= */}

              <Link
                to="/account"
                className="mobile-menu-item"

                onClick={closeMobileMenu}
              >

                MY ACCOUNT

              </Link>

            </div>

          )}

        </div>

      </header>

    </>
  );
}

export default Navbar;