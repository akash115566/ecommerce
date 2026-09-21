import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import "../Styles/goldCharcoalSoap.css";

const products = [
  {
    image: "/home/gold soap/soapblack.jfif",
    title: "PREMIUM LUXURY GOLD CHARCOAL SOAP",
    description:
      "Deeply Cleanses, Purifies & Refreshes The Skin",
    price: 899,
  },
  {
     image: "/home/gold soap/soapblue.jfif",
    title: "PREMIUM GOLD CHARCOAL DETOX SOAP",
    description:
      "Purifies Skin & Helps Remove Daily Impurities",
    price: 949,
  },
  {
   image: "/home/gold soap/soapbrown.jfif",
    title: "LUXURY CHARCOAL GLOW SOAP",
    description:
      "Cleanses, Refreshes & Enhances Natural Radiance",
    price: 999,
  },
  {
    image: "/home/gold soap/soapgold.jfif",
    title: "GOLD CHARCOAL WELLNESS SOAP",
    description:
      "Nourishes, Cleanses & Leaves Skin Feeling Fresh",
    price: 849,
  },
  {
   image: "/home/gold soap/soapyellow.jfif",
    title: "PREMIUM DETOX CHARCOAL BAR",
    description:
      "Deep Cleansing Care For Smooth-Looking Skin",
    price: 899,
  },
//   {
//     image: "/home/soap/goldcharcoal6.jfif",
//     title: "GOLDEN CHARCOAL BEAUTY SOAP",
//     description:
//       "Purifies Skin & Supports A Fresh Healthy Glow",
//     price: 929,
//   },
//   {
//     image: "/home/soap/goldcharcoal7.jfif",
//     title: "LUXURY GOLD DETOX BAR",
//     description:
//       "Refreshes, Cleanses & Softens The Skin",
//     price: 875,
//   },
//   {
//     image: "/home/soap/goldcharcoal8.jfif",
//     title: "GOLD CHARCOAL RITUAL SOAP",
//     description:
//       "A Luxurious Daily Cleansing Ritual",
//     price: 999,
//   },
];

function GoldCharcoalSoap() {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const infiniteProducts = [
    ...products,
    ...products,
    ...products,
  ];

  const [currentIndex, setCurrentIndex] = useState(
    products.length
  );

  const [cardWidth, setCardWidth] = useState(0);

  /* =========================================
     RESPONSIVE CARD WIDTH
  ========================================= */

  useEffect(() => {
    const updateSlider = () => {
      if (!sliderRef.current) return;

      const width = sliderRef.current.offsetWidth;

      const visible =
        window.innerWidth <= 600 ? 2 : 4;

      setCardWidth(width / visible);
    };

    updateSlider();

    window.addEventListener("resize", updateSlider);

    return () => {
      window.removeEventListener(
        "resize",
        updateSlider
      );
    };
  }, []);

  /* =========================================
     AUTO SLIDER
  ========================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  /* =========================================
     INFINITE RESET
  ========================================= */

  useEffect(() => {
    if (currentIndex >= products.length * 2) {
      const resetTimer = setTimeout(() => {
        const track =
          sliderRef.current?.querySelector(
            ".gold-soap-track"
          );

        if (track) {
          track.classList.add("no-transition");
        }

        setCurrentIndex(products.length);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (track) {
              track.classList.remove(
                "no-transition"
              );
            }
          });
        });
      }, 850);

      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex]);

  /* =========================================
     NEXT
  ========================================= */

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  /* =========================================
     PREVIOUS
  ========================================= */

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev <= products.length) {
        return products.length * 2 - 1;
      }

      return prev - 1;
    });
  };

  /* =========================================
     ADD TO BAG
  ========================================= */

  const handleAddToBag = (product) => {
    addToCart({
      name: product.title,
      image: product.image,
      price: Number(product.price),
      size: "100 g",
      quantity: 1,
      description: product.description,
    });
  };

  /* =========================================
     PRODUCT DETAILS
  ========================================= */

  const openProductDetails = (product) => {
    navigate("/product-details", {
      state: {
        product: {
          name: product.title,

          category: "Bath & Body",

          price: Number(product.price),

          oldPrice: Number(product.price) + 300,

          image: product.image,

          images: [
            product.image,
          ],

          size: "100 g",

          sizes: [
            "100 g",
            "150 g",
          ],

          description: product.description,

          productDescription:
            "Premium Luxury Gold Charcoal Soap is a sophisticated daily cleansing bar designed to gently cleanse the skin while providing a fresh, purified and luxurious bathing experience.",

          benefits: [
            "Deeply cleanses the skin",
            "Helps remove everyday impurities",
            "Leaves skin feeling fresh and clean",
            "Supports healthy-looking skin",
            "Inspired by premium Ayurvedic beauty rituals",
          ],
        },
      },
    });
  };

  return (
    <section className="gold-soap-section">

      {/* =========================================
          HEADER
      ========================================= */}

      <div className="gold-soap-header">

        <div>
          <span className="gold-soap-label">
            PREMIUM BATH & BODY
          </span>

          <h2>
            GOLD CHARCOAL
            <em> SOAP RITUAL</em>
          </h2>

          <p>
            Discover a luxurious cleansing ritual crafted
            for fresh, purified and beautifully cared-for skin.
          </p>
        </div>

        <button
          className="gold-soap-view-all"
          type="button"
          onClick={() => navigate("/shop")}
        >
          VIEW ALL <span>→</span>
        </button>

      </div>


      {/* =========================================
          SLIDER
      ========================================= */}

      <div
        className="gold-soap-slider"
        ref={sliderRef}
      >

        <div
          className="gold-soap-track"
          style={{
            transform: `translate3d(-${
              currentIndex * cardWidth
            }px, 0, 0)`,
          }}
        >

          {infiniteProducts.map(
            (product, index) => (

              <div
                className="gold-soap-card"
                key={`${product.title}-${index}`}
                style={{
                  width: `${cardWidth}px`,
                  flexBasis: `${cardWidth}px`,
                }}
              >

                {/* IMAGE */}

                <div
                  className="gold-soap-image"
                  onClick={() =>
                    openProductDetails(product)
                  }
                >

                  <img
                    src={product.image}
                    alt={product.title}
                  />

                  <button
                    type="button"
                    className="gold-soap-heart"
                    aria-label="Add to wishlist"
                    onClick={(e) =>
                      e.stopPropagation()
                    }
                  >
                    ♡
                  </button>

                </div>


                {/* DETAILS */}

                <div className="gold-soap-details">

                  <h3
                    onClick={() =>
                      openProductDetails(product)
                    }
                  >
                    {product.title}
                  </h3>

                  <p>
                    {product.description}
                  </p>

                  <div className="gold-soap-price">
                    ₹
                    {product.price.toLocaleString(
                      "en-IN"
                    )}
                  </div>


                  {/* ADD TO BAG */}

                  <button
                    type="button"
                    className="gold-soap-add"
                    onClick={(e) => {
                      e.stopPropagation();

                      handleAddToBag(product);
                    }}
                  >
                    ADD TO BAG
                  </button>

                </div>

              </div>

            )
          )}

        </div>


        {/* =========================================
            ARROWS
        ========================================= */}

        <button
          type="button"
          className="gold-soap-arrow gold-soap-prev"
          onClick={prevSlide}
          aria-label="Previous product"
        >
          ‹
        </button>

        <button
          type="button"
          className="gold-soap-arrow gold-soap-next"
          onClick={nextSlide}
          aria-label="Next product"
        >
          ›
        </button>

      </div>

    </section>
  );
}

export default GoldCharcoalSoap;