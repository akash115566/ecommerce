import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaSearch,
  FaUser,
  FaShoppingBag,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";

import "../Styles/navbar.css";


const menuData = {

  "SKIN CARE": {
    path: "/serum",

    items: [
      {
        name: "Premium Face Serums",
        image: "/home/serum/serumblack.jfif",
        path: "/serum",
      },
      {
        name: "Vitamin C Radiance Serum",
        image: "/home/serum/serumblack.jfif",
        path: "/serum",
      },
      {
        name: "Hyaluronic Dew Serum",
        image: "/home/serum/serumc.jfif",
        path: "/serum",
      },
      {
        name: "Rose Glow Face Serum",
        image: "/home/serum/serumrose.jfif",
        path: "/serum",
      },
    ],

    sideItems: [
      {
        name: "Luxury Skincare",
        image: "/home/serum/serumblack.jfif",
        path: "/serum",
      },
      {
        name: "Most Loved Rituals",
        image: "/home/serum/serumc.jfif",
        path: "/most-loved-rituals",
      },
    ],
  },


  "BATH & BODY": {
    path: "/skincare",

    items: [
      {
        name: "Luxury Bath Rituals",
        image: "/home/soap/soap2.jfif",
        path: "/skincare",
      },
      {
        name: "Premium Body Care",
        image: "/home/soap/soap3.jfif",
        path: "/skincare",
      },
      {
        name: "Natural Body Soaps",
        image: "/home/soap/soap4.jfif",
        path: "/skincare",
      },
      {
        name: "Luxury Bath Collection",
        image: "/home/soap/soap5.jfif",
        path: "/skincare",
      },
    ],

    sideItems: [
      {
        name: "Bath Essentials",
        image: "/home/soap/soap6.jfif",
        path: "/skincare",
      },
      {
        name: "Body Care Rituals",
        image: "/home/soap/soap2.jfif",
        path: "/skincare",
      },
    ],
  },

 "PREMIUM LUXURY SOAP": {
    path: "/luxurysoap",

    items: [
      {
        name: "Coffee Vanilla Luxury Soap",
        image: "/home/luxurysoap/coffee.jfif",
        path: "/luxurysoap",
      },
      {
        name: "Orange Mandarin Luxury Soap",
        image: "/home/luxurysoap/orange.jfif",
        path: "/luxurysoap",
      },
      {
        name: "Aloe Vera Luxury Soap",
        image: "/home/luxurysoap/aloevera.jfif",
        path: "/luxurysoap",
      },
      {
        name: "Aloe Vera & Orange Luxury Soap",
        image: "/home/luxurysoap/aloe.jfif",
        path: "/luxurysoap",
      },
    ],

    sideItems: [
      {
        name: "Coffee  Luxury Soap",
        image: "/home/luxurysoap/coff.jfif",
        path: "/luxurysoap",
      },
      {
        name: "orange  Luxury Soap",
        image: "/home/luxurysoap/orang.jfif",
        path: "/luxurysoap",
      },
    ],
  },


  "DUNKY MILK SOAP": {
    path: "/donkeymilk",

    items: [
      {
        name: "Pure Dunky Milk Luxury Soap",
        image: "/home/soap/dunkymilk.jfif",
        path: "/donkeymilksoap",
      },
      {
        name: "Dunky Milk & Honey Soap",
        image: "/home/soap/soap2.jfif",
        path: "/donkeymilksoap",
      },
      {
        name: "Dunky Milk & Saffron Soap",
        image: "/home/soap/soap3.jfif",
        path: "/donkeymilksoap",
      },
      {
        name: "Dunky Milk & Rose Soap",
        image: "/home/soap/soap4.jfif",
        path: "/donkeymilksoap",
      },
    ],

    sideItems: [
      {
        name: "Dunky Milk & Shea Butter",
        image: "/home/soap/soap5.jfif",
        path: "/donkeymilksoap",
      },
      {
        name: "Dunky Milk & Almond",
        image: "/home/soap/soap6.jfif",
        path: "/donkeymilksoap",
      },
    ],
  },


  "CAMEL MILK SOAP": {
    path: "/camelsoap",

    items: [
      {
        name: "Pure Camel Milk Luxury Soap",
        image: "/home/soap/camelmilk.jfif",
        path: "/skincare",
      },
      {
        name: "Camel Milk & Honey Soap",
        image: "/home/soap/soap2.jfif",
        path: "/skincare",
      },
      {
        name: "Camel Milk & Saffron Soap",
        image: "/home/soap/soap3.jfif",
        path: "/skincare",
      },
      {
        name: "Camel Milk & Rose Soap",
        image: "/home/soap/soap4.jfif",
        path: "/skincare",
      },
    ],

    sideItems: [
      {
        name: "Camel Milk Luxury",
        image: "/home/soap/camelmilk.jfif",
        path: "/skincare",
      },
      {
        name: "Premium Milk Ritual",
        image: "/home/soap/soap5.jfif",
        path: "/skincare",
      },
    ],
  },


  "GIFTING": {
    path: "/gifting",

    items: [
      {
        name: "Luxury Gift Sets",
        image: "/home/gifting/gift1.jfif",
        path: "/gifting",
      },
      {
        name: "Personal Gifting",
        image: "/home/gifting/gift2.jfif",
        path: "/gifting",
      },
      {
        name: "Corporate Gifting",
        image: "/home/gifting/gift3.jfif",
        path: "/gifting",
      },
      {
        name: "Festive Gifting",
        image: "/home/gifting/gift4.jfif",
        path: "/gifting",
      },
    ],

    sideItems: [
      {
        name: "Premium Gifts",
        image: "/home/gifting/gift5.jfif",
        path: "/gifting",
      },
      {
        name: "Gift Collections",
        image: "/home/gifting/gift6.jfif",
        path: "/gifting",
      },
    ],
  },


  "HAIR CLEANSER": {
    path: "/haircare",

    items: [
      {
        name: "Bhringraj Hair Cleanser",
        image: "/home/serum/serumblack.jfif",
        path: "/serum",
      },
      {
        name: "Herbal Hair Cleanser",
        image: "/home/serum/serumc.jfif",
        path: "/serum",
      },
      {
        name: "Nourishing Hair Ritual",
        image: "/home/serum/serumblack.jfif",
        path: "/serum",
      },
      {
        name: "Luxury Hair Care",
        image: "/home/serum/serumc.jfif",
        path: "/serum",
      },
    ],

    sideItems: [
      {
        name: "Hair Care Ritual",
        image: "/home/serum/serumblack.jfif",
        path: "/serum",
      },
      {
        name: "Premium Hair Care",
        image: "/home/serum/serumc.jfif",
        path: "/serum",
      },
    ],
  },


  "7 STAR HOTEL LUXURY RANGE": {
    path: "/collection",

    items: [
      {
        name: "Luxury Hotel Soap",
        image: "/home/soap/soap2.jfif",
        path: "/collection",
      },
      {
        name: "Premium Guest Amenities",
        image: "/home/soap/soap3.jfif",
        path: "/collection",
      },
      {
        name: "Hotel Luxury Collection",
        image: "/home/soap/soap4.jfif",
        path: "/collection",
      },
      {
        name: "Exclusive Hotel Range",
        image: "/home/soap/soap5.jfif",
        path: "/collection",
      },
    ],

    sideItems: [
      {
        name: "7 Star Luxury",
        image: "/home/soap/collection-banner.jfif",
        path: "/collection",
      },
      {
        name: "Hotel Essentials",
        image: "/home/soap/collection-bottom.jfif",
        path: "/collection",
      },
    ],
  },


  "OUR STORY": {
    path: "/our-story",

    items: [
      {
        name: "Our Philosophy",
        image: "/home/story/story1.jfif",
        path: "/our-story",
      },
      {
        name: "Our Ingredients",
        image: "/home/story/story2.jfif",
        path: "/our-story",
      },
      {
        name: "Our Rituals",
        image: "/home/story/story3.jfif",
        path: "/our-story",
      },
      {
        name: "Our Promise",
        image: "/home/story/story4.jfif",
        path: "/our-story",
      },
    ],

    sideItems: [
      {
        name: "Ancient Wisdom",
        image: "/home/story/story5.jfif",
        path: "/our-story",
      },
      {
        name: "Modern Luxury",
        image: "/home/story/story6.jfif",
        path: "/our-story",
      },
    ],
  },


  "ABOUT": {
    path: "/about",

    items: [
      {
        name: "About Tellus",
        image: "/home/about/about1.jfif",
        path: "/about",
      },
      {
        name: "Our Philosophy",
        image: "/home/about/about2.jfif",
        path: "/about",
      },
      {
        name: "Luxury Skincare",
        image: "/home/about/about3.jfif",
        path: "/about",
      },
      {
        name: "Natural Ingredients",
        image: "/home/about/about4.jfif",
        path: "/about",
      },
    ],

    sideItems: [
      {
        name: "Our Story",
        image: "/home/about/about5.jfif",
        path: "/our-story",
      },
      {
        name: "Our Promise",
        image: "/home/about/about6.jfif",
        path: "/about",
      },
    ],
  },


  "BLOG": {
    path: "/blog",

    items: [
      {
        name: "Skincare Rituals",
        image: "/home/blog/blog1.jfif",
        path: "/blog",
      },
      {
        name: "Beauty Secrets",
        image: "/home/blog/blog2.jfif",
        path: "/blog",
      },
      {
        name: "Ancient Beauty",
        image: "/home/blog/blog3.jfif",
        path: "/blog",
      },
      {
        name: "Ingredient Stories",
        image: "/home/blog/blog4.jfif",
        path: "/blog",
      },
    ],

    sideItems: [
      {
        name: "Latest Journal",
        image: "/home/blog/blog5.jfif",
        path: "/blog",
      },
      {
        name: "Beauty Guide",
        image: "/home/blog/blog6.jfif",
        path: "/blog",
      },
    ],
  },

};


const navLinks = [
  "SKIN CARE",
  "BATH & BODY",
  "PREMIUM LUXURY SOAP",
  "DUNKY MILK SOAP",
  "CAMEL MILK SOAP",
  "GIFTING",
  "HAIR CLEANSER",
  "7 STAR HOTEL LUXURY RANGE",
  "OUR STORY",
  "ABOUT",
  "BLOG",
];


function Navbar() {

  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState(null);

  const [mobileOpen, setMobileOpen] = useState(false);

  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  const [searchOpen, setSearchOpen] = useState(false);

  const [searchText, setSearchText] = useState("");


  const handleSearch = (e) => {

    e.preventDefault();

    if (!searchText.trim()) return;

    navigate(
      `/search?q=${encodeURIComponent(
        searchText.trim()
      )}`
    );

    setSearchOpen(false);

    setSearchText("");
  };


  const closeAll = () => {

    setActiveMenu(null);

    setMobileOpen(false);

    setMobileSubmenu(null);

  };


  return (

    <header className="tellus-navbar">


      {/* =================================================
          TOP HEADER
      ================================================= */}

      <div className="tellus-top-header">


        {/* LEFT LOGO */}

        <Link
          to="/"
          className="tellus-logo"
          onClick={closeAll}
        >

          <div className="tellus-logo-image">

            <img
              src="/home/logo.jpeg"
              alt="Tellus Essentials"
            />

          </div>

        </Link>


        {/* CENTER BRAND */}

        <Link
          to="/"
          className="tellus-brand"
          onClick={closeAll}
        >

          <span className="tellus-brand-main">
            TELLUS
          </span>

          <span className="tellus-brand-sub">
            ESSENTIALS
          </span>

          <span className="tellus-brand-tagline">
            PREMIUM LUXURY SKIN CARE
          </span>

        </Link>


        {/* RIGHT ACTIONS */}

        <div className="tellus-actions">


          {/* SEARCH */}

          <div
            className={`tellus-search ${
              searchOpen
                ? "search-active"
                : ""
            }`}
          >

            <form
              onSubmit={handleSearch}
            >

              <input
                type="text"
                placeholder="Search products..."
                value={searchText}
                onChange={(e) =>
                  setSearchText(e.target.value)
                }
              />

              <button
                type="button"
                onClick={() =>
                  setSearchOpen(!searchOpen)
                }
                aria-label="Search"
              >

                <FaSearch />

              </button>

            </form>

          </div>


          {/* ACCOUNT */}

          <Link
            to="/account"
            className="tellus-action-icon"
            aria-label="Account"
            onClick={closeAll}
          >

            <FaUser />

          </Link>


          {/* CART */}

          <Link
            to="/bag"
            className="tellus-action-icon cart-icon"
            aria-label="Shopping Bag"
            onClick={closeAll}
          >

            <FaShoppingBag />

            <span className="cart-count">
              0
            </span>

          </Link>


        </div>


      </div>


      {/* =================================================
          LINE + NAVIGATION
      ================================================= */}

      <div className="tellus-nav-border" />


      <nav className="tellus-desktop-nav">


        {navLinks.map((link) => {

          const data = menuData[link];

          return (

            <div
              key={link}
              className="tellus-nav-item"
              onMouseEnter={() =>
                setActiveMenu(link)
              }
              onMouseLeave={() =>
                setActiveMenu(null)
              }
            >

              <Link
                to={data.path}
                className="tellus-nav-link"
                onClick={closeAll}
              >

                {link}

              </Link>


              {/* ======================================
                  DESKTOP MEGA MENU
              ====================================== */}

              {activeMenu === link && (

                <div className="tellus-mega-menu">


                  {/* LEFT LINKS */}

                  <div className="mega-left">

                    <div className="mega-left-title">
                      {link}
                    </div>


                    {data.items.map(
                      (item, index) => (

                        <Link
                          key={index}
                          to={item.path}
                          className="mega-left-link"
                        >

                          {item.name}

                        </Link>

                      )
                    )}

                  </div>


                  {/* CENTER 4 IMAGES */}

                  <div className="mega-center">

                    {data.items.map(
                      (item, index) => (

                        <Link
                          key={index}
                          to={item.path}
                          className="mega-product"
                        >

                          <div className="mega-product-image">

                            <img
                              src={item.image}
                              alt={item.name}
                            />

                          </div>

                          <h4>
                            {item.name}
                          </h4>

                        </Link>

                      )
                    )}

                  </div>


                  {/* RIGHT 2 IMAGES */}

                  <div className="mega-right">

                    {data.sideItems.map(
                      (item, index) => (

                        <Link
                          key={index}
                          to={item.path}
                          className="mega-side-card"
                        >

                          <div className="mega-side-image">

                            <img
                              src={item.image}
                              alt={item.name}
                            />

                          </div>

                          <h4>
                            {item.name}
                          </h4>

                          <span>
                            DISCOVER MORE
                          </span>

                        </Link>

                      )
                    )}

                  </div>


                </div>

              )}

            </div>

          );

        })}

      </nav>


      {/* =================================================
          MOBILE HEADER
      ================================================= */}

      <div className="tellus-mobile-header">


        {/* TOGGLE */}

        <button
          type="button"
          className={`mobile-toggle ${
            mobileOpen
              ? "is-open"
              : ""
          }`}
          onClick={() =>
            setMobileOpen(!mobileOpen)
          }
          aria-label="Open menu"
        >

          {mobileOpen
            ? <FaTimes />
            : <FaBars />
          }

        </button>


        {/* MOBILE CENTER LOGO */}

        <Link
          to="/"
          className="mobile-brand"
          onClick={closeAll}
        >

          <span>
            TELLUS
          </span>

          <small>
            ESSENTIALS
          </small>

        </Link>


        {/* MOBILE ACTIONS */}

        <div className="mobile-actions">

          <button
            type="button"
            onClick={() =>
              setSearchOpen(!searchOpen)
            }
          >
            <FaSearch />
          </button>

          <Link
            to="/account"
            onClick={closeAll}
          >
            <FaUser />
          </Link>

          <Link
            to="/bag"
            className="mobile-cart"
            onClick={closeAll}
          >

            <FaShoppingBag />

            <span>
              0
            </span>

          </Link>

        </div>

      </div>


      {/* =================================================
          MOBILE MENU
      ================================================= */}

      {mobileOpen && (

        <div className="tellus-mobile-menu">


          {navLinks.map((link) => {

            const data = menuData[link];

            const isOpen =
              mobileSubmenu === link;


            return (

              <div
                key={link}
                className="mobile-menu-section"
              >


                {/* MOBILE LINK */}

                <div className="mobile-menu-row">

                  <Link
                    to={data.path}
                    className="mobile-main-link"
                    onClick={closeAll}
                  >

                    {link}

                  </Link>


                  <button
                    type="button"
                    className="mobile-expand"
                    onClick={() =>
                      setMobileSubmenu(
                        isOpen
                          ? null
                          : link
                      )
                    }
                  >

                    {isOpen
                      ? "−"
                      : "+"
                    }

                  </button>

                </div>


                {/* MOBILE PRODUCTS */}

                {isOpen && (

                  <div className="mobile-submenu">


                    <div className="mobile-submenu-grid">

                      {data.items.map(
                        (item, index) => (

                          <Link
                            key={index}
                            to={item.path}
                            className="mobile-product-card"
                            onClick={closeAll}
                          >

                            <img
                              src={item.image}
                              alt={item.name}
                            />

                            <span>
                              {item.name}
                            </span>

                          </Link>

                        )
                      )}

                    </div>


                    {/* 2 FEATURED */}

                    <div className="mobile-featured">

                      {data.sideItems.map(
                        (item, index) => (

                          <Link
                            key={index}
                            to={item.path}
                            className="mobile-featured-card"
                            onClick={closeAll}
                          >

                            <img
                              src={item.image}
                              alt={item.name}
                            />

                            <div>

                              <strong>
                                {item.name}
                              </strong>

                              <small>
                                DISCOVER MORE
                              </small>

                            </div>

                          </Link>

                        )
                      )}

                    </div>


                  </div>

                )}

              </div>

            );

          })}


        </div>

      )}


      {/* =================================================
          MOBILE SEARCH
      ================================================= */}

      {searchOpen && (

        <div className="mobile-search-box">

          <form
            onSubmit={handleSearch}
          >

            <input
              autoFocus
              type="text"
              placeholder="Search products..."
              value={searchText}
              onChange={(e) =>
                setSearchText(
                  e.target.value
                )
              }
            />

            <button type="submit">
              <FaSearch />
            </button>

          </form>

        </div>

      )}

    </header>

  );

}


export default Navbar;