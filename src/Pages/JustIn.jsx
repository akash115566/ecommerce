import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/justin.css";
import { motion } from "framer-motion";
import ProductDetails from "./ProductDetails";

const products = [
  {
    image: "/home/scrub/brownscrub.jfif",
    name: "ROSE GLOW FACE SERUM",
    use: "Brightens, Hydrates & Revitalises Skin",
    price: 1299,
    oldPrice: 1599,
  },
  {
    image: "/home/scrub/teaserub.jfif",
    name: "LUXURY SAFFRON CLEANSER",
    use: "Gently Cleanses & Refreshes Skin",
    price: 999,
    oldPrice: 1299,
  },
  {
    image: "/home/scrub/skinscrub.jfif",
    name: "BHRINGRAJ HAIR OIL",
    use: "Nourishes Scalp & Strengthens Hair",
    price: 1199,
    oldPrice: 1499,
  },
  {
    image: "/home/scrub/redscrub.jfif",
    name: "KUMKUMADI FACE OIL",
    use: "Improves Radiance & Skin Texture",
    price: 1499,
    oldPrice: 1799,
  },
  {
    image: "/home/scrub/goldscrub.jfif",
    name: "SANDALWOOD BODY LOTION",
    use: "Deeply Moisturises & Softens Skin",
    price: 1099,
    oldPrice: 1399,
  },
  {
    image: "/home/scrub/enerscrub.jfif",
    name: "VETIVER COOLING MIST",
    use: "Refreshes & Hydrates Skin",
    price: 899,
    oldPrice: 1199,
  },
  {
    image: "/home/scrub/clayserub.jfif",
    name: "AYURVEDIC FACE MASK",
    use: "Purifies, Revives & Brightens Skin",
    price: 1299,
    oldPrice: 1599,
  },
  {
    image: "/home/scrub/brownscrub.jfif",
    name: "ROSE & JASMINE BODY MIST",
    use: "Refreshes Skin With A Floral Fragrance",
    price: 999,
    oldPrice: 1299,
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