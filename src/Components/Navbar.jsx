import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";

function Navbar() {
    const [offerSlide, setOfferSlide] = useState(0);

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

  const [openMenu, setOpenMenu] = useState(null);

  const categories = [
    {
      name: "FACE",
      link: "/face",
      items: [
        "Face Wash",
        "Face Cream",
        "Serums",
        "Face Masks",
      ],
    },
    {
      name: "BATH & BODY",
      link: "/bath-body",
      items: [
        "Body Wash",
        "Body Lotion",
        "Bath Oils",
        "Hand Care",
      ],
    },
    // {
    //   name: "HAIR",
    //   link: "/hair",
    //   items: [
    //     "Shampoo",
    //     "Conditioner",
    //     "Hair Oil",
    //     "Hair Masks",
    //   ],
    // },
    // {
    //   name: "MAKEUP",
    //   link: "/makeup",
    //   items: [
    //     "Lipstick",
    //     "Foundation",
    //     "Blush",
    //     "Eye Makeup",
    //   ],
    // },
    // {
    //   name: "GIFTING",
    //   link: "/gifting",
    //   items: [
    //     "Gift Sets",
    //     "Beauty Boxes",
    //     "Premium Gifts",
    //     "Combos",
    //   ],
    // },
    // {
    //   name: "TRAVEL MINIS",
    //   link: "#",
    //   items: [
    //     "Travel Kits",
    //     "Mini Skincare",
    //     "Mini Haircare",
    //   ],
    // },
    // {
    //   name: "BABY CARE",
    //   link: "#",
    //   items: [
    //     "Baby Lotion",
    //     "Baby Oil",
    //     "Baby Wash",
    //   ],
    // },
    {
      name: "MEN",
      link: "#",
      items: [
        "Face Care",
        "Hair Care",
        "Body Care",
      ],
    },
    // {
    //   name: "WELLNESS",
    //   link: "#",
    //   items: [
    //     "Wellness Oils",
    //     "Supplements",
    //     "Self Care",
    //   ],
    // },
    {
      name: "FRAGRANCE",
      link: "#",
      items: [
        "Perfume",
        "Body Mist",
        "Essential Oils",
      ],
    },
  ];

  return (
    <>
      {/* OFFER BAR */}

   <div className="offer-bar">
  <div className="offer-slider">
    {offerTexts[offerSlide]}
  </div>
</div>


      {/* HEADER */}

      <header className="header">

        <div className="main-header">

          {/* SEARCH */}

          <div className="search-box">
            <span className="search-icon">
              ⌕
            </span>

            <span>
              SEARCH
            </span>
          </div>


          {/* STORES */}

          <div className="stores">
            STORES
          </div>


          {/* LOGO */}

          <Link to="/" className="logo">

            <span>
             Tellus Essentials 
            </span>

            <strong>
              Premium Luxury Skin Care
            </strong>

            <small>
              BEAUTY & WELLNESS
            </small>

          </Link>


          {/* RIGHT MENU */}

          <div className="right-menu">

            <Link
              to="/account"
              className="header-link"
            >
              ACCOUNT
            </Link>

            <Link
              to="/membership"
              className="header-link"
            >
              MEMBERSHIP
            </Link>


            {/* CART */}

            <Link
              to="/cart"
              className="cart"
            >

              🛍

              <b>
                0
              </b>

            </Link>

          </div>

        </div>


        {/* CATEGORY NAVBAR */}

        <nav className="category-nav">

          {categories.map((category, index) => (

            <div
              className="nav-item"
              key={index}
              onMouseEnter={() =>
                setOpenMenu(index)
              }
              onMouseLeave={() =>
                setOpenMenu(null)
              }
            >

              <Link
                to={category.link}
                className="nav-link"
              >

                {category.name}

                <i>
                  ⌄
                </i>

              </Link>


              {/* DROPDOWN */}

              {openMenu === index && (

                <div className="dropdown">

                  <div className="dropdown-title">

                    {category.name}

                  </div>


                  {category.items.map(
                    (item, itemIndex) => (

                      <Link
                        to="#"
                        key={itemIndex}
                      >

                        {item}

                      </Link>

                    )
                  )}


                  <Link
                    to={category.link}
                    className="view-all"
                  >

                    VIEW ALL →

                  </Link>

                </div>

              )}

            </div>

          ))}
          <Link
            to="/our-story"
            className="nav-item simple-link"
          >
            OUR STORY
          </Link>
          <Link
            to="/blog"
            className="nav-item simple-link"
          >
            BLOG
          </Link>


          {/* ABOUT */}

          <Link
            to="/about-us"
            className="nav-item simple-link"
          >
            ABOUT US
          </Link>


          {/* EXCLUSIVES */}

          <Link
            to="/exclusives"
            className="nav-item simple-link"
          >
            EXCLUSIVES!
          </Link>

        </nav>

      </header>

    </>
  );
}

export default Navbar;