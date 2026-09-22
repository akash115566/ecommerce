import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/justin.css";
import { motion } from "framer-motion";
import ProductDetails from "./ProductDetails";

const products = [
  {
    image: "/home/scrub/brownscrub.jfif",
    name: "LUXURY HERBAL FACE SCRUB",
    use: "Gently Exfoliates, Purifies & Revives Skin",
    price: 2500,
    oldPrice: 2999,
  },

  {
    image: "/home/scrub/teaserub.jfif",
    name: "SAFFRON GLOW FACE SCRUB",
    use: "Removes Dead Skin & Reveals Natural Radiance",
    price: 2500,
    oldPrice: 2999,
  },

  {
    image: "/home/scrub/skinscrub.jfif",
    name: "AYURVEDIC HERBAL SCRUB",
    use: "Deeply Exfoliates & Smoothens Skin Texture",
    price: 2500,
    oldPrice: 2999,
  },

  {
    image: "/home/scrub/redscrub.jfif",
    name: "ROSE RADIANCE FACE SCRUB",
    use: "Polishes, Softens & Brightens Dull-Looking Skin",
    price: 2500,
    oldPrice: 2999,
  },

  {
    image: "/home/scrub/goldscrub.jfif",
    name: "GOLDEN GLOW BODY SCRUB",
    use: "Exfoliates Dead Skin & Leaves Skin Silky Smooth",
    price: 2500,
    oldPrice: 2999,
  },

  {
    image: "/home/scrub/enerscrub.jfif",
    name: "ENERGISING HERBAL BODY SCRUB",
    use: "Refreshes, Exfoliates & Revitalises Skin",
    price: 2500,
    oldPrice: 2999,
  },

  {
    image: "/home/scrub/clayserub.jfif",
    name: "AYURVEDIC CLAY FACE SCRUB",
    use: "Purifies Pores, Exfoliates & Refreshes Skin",
    price: 2500,
    oldPrice: 2999,
  },

  {
    image: "/home/scrub/brownscrub.jfif",
    name: "PREMIUM BOTANICAL FACE SCRUB",
    use: "Gently Buffs Away Dead Skin & Restores Softness",
    price: 2500,
    oldPrice: 2999,
  },
];

function JustIn() {
  const sliderRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(products.length);
  const [cardWidth, setCardWidth] = useState(0);

  const infiniteProducts = [
    ...products,
    ...products,
    ...products,
  ];

  /* =========================
     CARD WIDTH
  ========================= */

  useEffect(() => {
    const updateWidth = () => {
      if (!sliderRef.current) return;

      const visibleCards =
        window.innerWidth <= 600 ? 2 : 4;

      const width =
        sliderRef.current.offsetWidth / visibleCards;

      setCardWidth(width);
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);


  /* =========================
     AUTO SLIDER
  ========================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2800);

    return () => clearInterval(timer);
  }, []);


  /* =========================
     INVISIBLE RESET
  ========================= */

  useEffect(() => {
    if (currentIndex >= products.length * 2) {
      const timer = setTimeout(() => {

        const track =
          sliderRef.current?.querySelector(
            ".justin-track"
          );

        if (track) {
          track.classList.add("instant-reset");
        }

        setCurrentIndex(products.length);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (track) {
              track.classList.remove("instant-reset");
            }
          });
        });

      }, 850);

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);


  /* =========================
     NEXT
  ========================= */

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };


  /* =========================
     PREVIOUS
  ========================= */

  const prevSlide = () => {
    setCurrentIndex((prev) => {

      if (prev <= products.length) {
        return products.length * 2 - 1;
      }

      return prev - 1;
    });
  };


  return (
    <section className="justin-section">

      {/* HEADER */}

      <div className="justin-header">

        <div className="justin-heading">

          <p>JUST IN</p>

          <h2>
            Explore our latest launches
          </h2>

        </div>


        <Link
          to="/shop"
          className="justin-view-all"
        >
          VIEW ALL <span>→</span>
        </Link>

      </div>


      {/* SLIDER */}

      <div
        className="justin-slider"
        ref={sliderRef}
      >

        <div
          className="justin-track"
          style={{
            transform: `translate3d(-${
              currentIndex * cardWidth
            }px, 0, 0)`,
          }}
        >

          {infiniteProducts.map((product, index) => (

            <div
              className="justin-card"
              key={`${product.name}-${index}`}
              style={{
                width: `${cardWidth}px`,
                flexBasis: `${cardWidth}px`,
              }}
            >

              {/* IMAGE */}

              <div className="justin-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>


              {/* DETAILS */}

              <div className="justin-content">

                <h3>
                  {product.name}
                </h3>

                <p>
                  {product.use}
                </p>


                {/* PRODUCT DETAILS LINK */}

               <Link
  to="/product-details"
  state={{ product }}
  className="shop-now"
>
  SHOP NOW <span>→</span>
</Link>

              </div>

            </div>

          ))}

        </div>


        {/* PREVIOUS */}

        <button
          className="justin-arrow justin-prev"
          onClick={prevSlide}
          aria-label="Previous"
        >
          ‹
        </button>


        {/* NEXT */}

        <button
          className="justin-arrow justin-next"
          onClick={nextSlide}
          aria-label="Next"
        >
          ›
        </button>

      </div>

    </section>
  );
}

export default JustIn;