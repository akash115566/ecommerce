import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import "../Styles/mostLovedrituals.css";

const products = [
  {
    image: "/home/serum/serumblack.jfif",
    title: "SEABUCKTHORN VITAMIN C SERUM",
    description: "Brightens Dull Skin & Boosts Natural Radiance",
    price: 3845,
  },

  {
    image: "/home/serum/serumc.jfif",
    title: "VITAMIN C RADIANCE SERUM",
    description: "Revives Dull Skin & Enhances Natural Glow",
    price: 3600,
  },

  {
    image: "/home/serum/serumcheck.jfif",
    title: "PURE GLOW FACIAL SERUM",
    description: "Hydrates, Nourishes & Helps Refine Skin Texture",
    price: 2870,
  },

  {
    image: "/home/serum/serumdot.jfif",
    title: "SEABUCKTHORN GLOW SERUM",
    description: "Illuminates Dull Skin & Restores Radiance",
    price: 5550,
  },

  {
    image: "/home/serum/serumdrop.jfif",
    title: "HYDRATING BOTANICAL SERUM",
    description: "Deeply Hydrates Skin & Leaves It Soft and Supple",
    price: 3250,
  },

  {
    image: "/home/serum/serumhand.jfif",
    title: "LUXURY REPAIR FACE SERUM",
    description: "Nourishes Dry Skin & Supports a Smooth, Radiant Look",
    price: 4150,
  },

  {
    image: "/home/serum/serumorange.jfif",
    title: "ORANGE VITAMIN C SERUM",
    description: "Brightens Skin & Helps Reveal a Fresh, Luminous Glow",
    price: 3950,
  },

  {
    image: "/home/serum/serumshow.jfif",
    title: "PREMIUM ANTI-DULLNESS SERUM",
    description: "Replenishes Moisture & Enhances Skin Radiance",
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