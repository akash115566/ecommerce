import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import "../Styles/mostLovedrituals.css";

const products = [
  {
    image: "/home/serum/serumblack.jfif",
    title: "FRAGRANT MOISTURE-LOCK DUO",
    description: "Replenishes Moisture & Scents The Skin",
    price: 3845,
  },
  {
    image:  "/home/serum/serumc.jfif",
    title: "BATH SET - LIME & SAFFRON",
    description: "Purifies, Detoxifies & Moisturises",
    price: 3600,
  },
  {
    image:  "/home/serum/serumcheck.jfif",
    title: "DAILY CLEANSE & SHIELD PAIR",
    description: "Daily Cleansing & Protection Ritual",
    price: 2870,
  },
  {
    image:  "/home/serum/serumdot.jfif",
    title: "RADIANT SKIN RITUAL",
    description: "Illuminates Dull Skin",
    price: 5550,
  },
  {
    image: "/home/serum/serumdrop.jfif",
    title: "ROSE & SANDALWOOD RITUAL",
    description: "Nourishes Skin & Enhances Radiance",
    price: 3250,
  },
  {
    image: "/home/serum/serumhand.jfif",
    title: "AYURVEDIC BODY CARE SET",
    description: "Softens, Nourishes & Hydrates",
    price: 4150,
  },
  {
    image: "/home/serum/serumorange.jfif",
    title: "LUXURY HAIR RITUAL",
    description: "Strengthens Hair & Nourishes Scalp",
    price: 3950,
  },
  {
    image: "/home/serum/serumshow.jfif",
    title: "PREMIUM WELLNESS RITUAL",
    description: "A Complete Everyday Self-Care Ritual",
    price: 4750,
  },
];

function MostLovedRituals() {
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

  /* =========================
     RESPONSIVE CARD WIDTH
  ========================= */

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
     INFINITE RESET
  ========================= */

  useEffect(() => {
    if (currentIndex >= products.length * 2) {
      const resetTimer = setTimeout(() => {
        const track =
          sliderRef.current?.querySelector(
            ".ritual-track"
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

  /* =========================
     ADD TO BAG
  ========================= */

  const handleAddToBag = (product) => {
    addToCart({
      name: product.title,
      image: product.image,
      price: product.price,
      size: "Default",
      quantity: 1,
      description: product.description,
    });
  };

  /* =========================
     PRODUCT DETAILS
  ========================= */

  const openProductDetails = (product) => {
    navigate("/product-details", {
      state: {
        product: {
          name: product.title,
          category: "Beauty & Wellness",
          price: product.price,
          oldPrice: product.price + 500,
          images: [product.image],
          sizes: ["Default"],
          description: product.description,
          benefits: [
            "Nourishes and cares for the skin",
            "Helps maintain healthy-looking skin",
            "Suitable for everyday use",
            "Inspired by Ayurvedic beauty rituals",
          ],
        },
      },
    });
  };

  return (
    <section className="ritual-section">

      {/* ================= HEADER ================= */}

      <div className="ritual-header">

        <h2>MOST LOVED RITUALS</h2>

        <button
          className="view-all"
          type="button"
        >
          VIEW ALL <span>→</span>
        </button>

      </div>

      {/* ================= SLIDER ================= */}

      <div
        className="ritual-slider"
        ref={sliderRef}
      >

        <div
          className="ritual-track"
          style={{
            transform: `translate3d(-${
              currentIndex * cardWidth
            }px, 0, 0)`,
          }}
        >

          {infiniteProducts.map(
            (product, index) => (

              <div
                className="ritual-card"
                key={`${product.title}-${index}`}
                style={{
                  width: `${cardWidth}px`,
                  flexBasis: `${cardWidth}px`,
                }}
              >

                {/* ================= IMAGE ================= */}

                <div
                  className="ritual-image"
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
                    className="heart-btn"
                    aria-label="Add to wishlist"
                    onClick={(e) =>
                      e.stopPropagation()
                    }
                  >
                    ♡
                  </button>

                </div>

                {/* ================= DETAILS ================= */}

                <div className="ritual-details">

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

                  <div className="ritual-price">
                    ₹
                    {product.price.toLocaleString(
                      "en-IN"
                    )}
                  </div>

                  {/* ================= ADD TO BAG ================= */}

                  <button
                    type="button"
                    className="add-bag"
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

        {/* ================= ARROWS ================= */}

        <button
          type="button"
          className="ritual-arrow ritual-prev"
          onClick={prevSlide}
        >
          ‹
        </button>

        <button
          type="button"
          className="ritual-arrow ritual-next"
          onClick={nextSlide}
        >
          ›
        </button>

      </div>

    </section>
  );
}

export default MostLovedRituals;