import React, { useEffect, useRef, useState } from "react";
import { useCart } from "../Context/CartContext";
import "../Styles/productSlider.css";

const products = [
  {
    id: 1,
    name: "SOS DAY CARE",
    description:
      "A nourishing daytime skincare ritual designed to refresh, hydrate and protect your skin.",
    price: 2499,
    size: "50 ml",
    image: "/home/sos/soscare.jfif",
  },

  {
    id: 2,
    name: "SOS DAY & NIGHT RITUAL",
    description:
      "A complete day and night skincare ritual with carefully selected essentials for everyday care.",
    price: 3299,
    size: "Set",
    image: "/home/sos/sosday.jfif",
  },

  {
    id: 3,
    name: "SOS NIGHT REPAIR",
    description:
      "A rich night-time skincare ritual that nourishes the skin while you rest.",
    price: 2899,
    size: "50 ml",
    image: "/home/sos/sosnight.jfif",
  },

  {
    id: 4,
    name: "SOS MEN GROOMING RITUAL",
    description:
      "A refined daily grooming collection designed for cleansing, hydration and everyday skin care.",
    price: 2999,
    size: "Set",
    image: "/home/sos/sosmen.jfif",
  },

  {
    id: 5,
    name: "SOS RADIANCE SERUM",
    description:
      "A concentrated facial serum designed to nourish, hydrate and enhance the skin's natural radiance.",
    price: 2199,
    size: "30 ml",
    image: "/home/sos/sosserum.jfif",
  },

  {
    id: 6,
    name: "SOS SIGNATURE BEAUTY RITUAL",
    description:
      "A premium skincare ritual combining daily essentials such as serum, oil and face care.",
    price: 3599,
    size: "Complete Set",
    image: "/home/sos/soskon.jfif",
  },
];

function ProductSlider() {
  const sliderRef = useRef(null);
  const { addToCart } = useCart();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  /* =====================================================
     RESPONSIVE CARDS
  ===================================================== */

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth <= 600) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 900) {
        setVisibleCards(2);
      } else if (window.innerWidth <= 1200) {
        setVisibleCards(3);
      } else {
        setVisibleCards(4);
      }
    };

    updateCards();

    window.addEventListener("resize", updateCards);

    return () => {
      window.removeEventListener("resize", updateCards);
    };
  }, []);

  /* =====================================================
     NEXT
  ===================================================== */

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev >= products.length - visibleCards) {
        return 0;
      }

      return prev + 1;
    });
  };

  /* =====================================================
     PREVIOUS
  ===================================================== */

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return products.length - visibleCards;
      }

      return prev - 1;
    });
  };

  /* =====================================================
     ADD TO BAG
  ===================================================== */

  const handleAddToBag = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price,
      size: product.size,
      category: "Beauty & Wellness",
      quantity: 1,
    });
  };

  return (
    <section className="product-slider-section">

      {/* HEADER */}

      <div className="product-slider-header">

        <div>
       <span className="product-slider-eyebrow">
  COMBO SIGNATURE SKINCARE
</span>

<h2>
  EVERYDAY SKIN
  <span> RITUALS</span>
</h2>

          <p>
            Discover our carefully curated selection of
            premium beauty essentials.
          </p>
        </div>

        <div className="slider-buttons">

          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous products"
          >
            ←
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next products"
          >
            →
          </button>

        </div>

      </div>


      {/* SLIDER */}

      <div
        className="product-slider-wrapper"
        ref={sliderRef}
      >

        <div
          className="product-slider-track"
          style={{
            transform: `translateX(-${
              currentIndex * (100 / visibleCards)
            }%)`,
          }}
        >

          {products.map((product) => (

            <div
              className="product-slide-card"
              key={product.id}
            >

              {/* IMAGE */}

              <div className="product-slide-image">

                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />

                <div className="product-badge">
                  PREMIUM
                </div>

              </div>


              {/* CONTENT */}

              <div className="product-slide-content">

                <span className="product-category">
                  BEAUTY & WELLNESS
                </span>

                <h3>
                  {product.name}
                </h3>

                <p>
                  {product.description}
                </p>

                <div className="product-slide-bottom">

                  <div className="product-price">
                    ₹{product.price.toLocaleString("en-IN")}
                  </div>

                  <span className="product-size">
                    {product.size}
                  </span>

                </div>


                {/* ADD TO BAG */}

                <button
                  type="button"
                  className="product-add-button"
                  onClick={() =>
                    handleAddToBag(product)
                  }
                >
                  ADD TO BAG
                  <span>+</span>
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* DOTS */}

      <div className="product-slider-dots">

        {products.map((_, index) => (

          <button
            key={index}
            type="button"
            className={
              index === currentIndex
                ? "active"
                : ""
            }
            onClick={() =>
              setCurrentIndex(
                Math.min(
                  index,
                  products.length - visibleCards
                )
              )
            }
            aria-label={`Go to product ${index + 1}`}
          />

        ))}

      </div>

    </section>
  );
}

export default ProductSlider;