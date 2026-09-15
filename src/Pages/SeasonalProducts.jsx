import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/seasonalProducts.css";

const products = [
  {
    image: "/kromaic.jfif",
    images: [
      "/kromaic.jfif",
      "/kromaic-2.jfif",
      "/kromaic-3.jfif",
      "/kromaic-4.jfif",
    ],
    name: "OVERNIGHT REPAIR MASK PANCHPUSHPI",
    description: "Replenishes Moisture, Restores Radiance",
    size: "60 g",
    sizes: ["60 g", "100 g"],
    price: 1975,
    category: "Hair Care",
    productDescription:
      "A nourishing overnight repair mask that replenishes moisture and restores natural radiance.",
    benefits: [
      "Deeply nourishes hair",
      "Helps restore moisture",
      "Improves hair softness",
      "Suitable for regular hair care",
    ],
  },
  {
    image: "/nisha.jfif",
    images: [
      "/nisha.jfif",
      "/nisha-2.jfif",
      "/nisha-3.jfif",
    ],
    name: "LUXURY SUGAR SOAP PANCHPUSHP",
    description: "Handmade Ayurvedic Soap",
    size: "125 g",
    sizes: ["125 g"],
    price: 595,
    category: "Body Care",
    productDescription:
      "A handmade Ayurvedic soap crafted to gently cleanse and refresh the skin.",
    benefits: [
      "Gentle cleansing",
      "Helps remove impurities",
      "Leaves skin feeling fresh",
      "Made with Ayurvedic ingredients",
    ],
  },
  {
    image: "/soap-protam.jfif",
    images: [
      "/soap-protam.jfif",
      "/soap-protam-2.jfif",
      "/soap-protam-3.jfif",
      "/soap-protam-4.jfif",
    ],
    name: "SERUM INFUSED FACIAL MIST",
    description: "Revitalising & Rehydrating",
    size: "100 ml",
    sizes: ["50 ml", "100 ml", "130 ml"],
    price: 750,
    category: "Facial Care",
    productDescription:
      "A refreshing facial mist infused with nourishing ingredients to instantly hydrate and refresh the skin.",
    benefits: [
      "Instantly refreshes the skin",
      "Provides lightweight hydration",
      "Helps improve skin softness",
      "Suitable for daily use",
    ],
  },
  {
    image: "/soap.jfif",
    images: [
      "/soap.jfif",
      "/soap-2.jfif",
      "/soap-3.jfif",
    ],
    name: "SHEER SUNSCREEN BODY SPRAY",
    description: "Weightless, Dewy Protection",
    size: "130 ml",
    sizes: ["130 ml"],
    price: 2250,
    category: "Body Care",
    productDescription:
      "A lightweight sunscreen body spray that offers comfortable, dewy protection for everyday use.",
    benefits: [
      "Lightweight body protection",
      "Easy spray application",
      "Non-heavy finish",
      "Ideal for daily use",
    ],
  },
  {
    image: "/kromaic.jfif",
    images: [
      "/kromaic.jfif",
      "/kromaic-2.jfif",
      "/kromaic-3.jfif",
    ],
    name: "AYURVEDIC FACIAL CLEANSER",
    description: "Gentle cleansing for radiant skin",
    size: "200 ml",
    sizes: ["100 ml", "200 ml"],
    price: 895,
    category: "Facial Care",
    productDescription:
      "A gentle Ayurvedic facial cleanser designed to remove impurities while maintaining skin comfort.",
    benefits: [
      "Gently cleanses skin",
      "Removes excess oil",
      "Leaves skin feeling fresh",
      "Suitable for everyday use",
    ],
  },
  {
    image: "/nisha.jfif",
    images: [
      "/nisha.jfif",
      "/nisha-2.jfif",
      "/nisha-3.jfif",
    ],
    name: "LUXURY BODY LOTION",
    description: "Deep nourishment & hydration",
    size: "200 ml",
    sizes: ["100 ml", "200 ml"],
    price: 1250,
    category: "Body Care",
    productDescription:
      "A rich body lotion that helps nourish dry skin and provides long-lasting hydration.",
    benefits: [
      "Deeply moisturises skin",
      "Helps reduce dryness",
      "Leaves skin smooth",
      "Comfortable daily-use formula",
    ],
  },
  {
    image: "/soap-protam.jfif",
    images: [
      "/soap-protam.jfif",
      "/soap-protam-2.jfif",
      "/soap-protam-3.jfif",
    ],
    name: "AYURVEDIC HAIR CLEANSER",
    description: "Nourishes scalp and strengthens hair",
    size: "200 ml",
    sizes: ["100 ml", "200 ml"],
    price: 1450,
    category: "Hair Care",
    productDescription:
      "An Ayurvedic hair cleanser formulated to gently cleanse the scalp and support healthy-looking hair.",
    benefits: [
      "Gently cleanses scalp",
      "Helps remove buildup",
      "Supports healthy-looking hair",
      "Suitable for regular use",
    ],
  },
  {
    image: "/soap.jfif",
    images: [
      "/soap.jfif",
      "/soap-2.jfif",
      "/soap-3.jfif",
    ],
    name: "PREMIUM ROSE FACE MIST",
    description: "Refreshing & hydrating facial mist",
    size: "100 ml",
    sizes: ["50 ml", "100 ml"],
    price: 995,
    category: "Facial Care",
    productDescription:
      "A refreshing rose face mist that helps hydrate and revive tired-looking skin.",
    benefits: [
      "Refreshes tired-looking skin",
      "Provides light hydration",
      "Easy to use throughout the day",
      "Leaves a soft refreshing feel",
    ],
  },
];

function SeasonalProducts() {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const infiniteProducts = [
    ...products,
    ...products,
    ...products,
  ];

  const [currentIndex, setCurrentIndex] = useState(products.length);
  const [cardWidth, setCardWidth] = useState(0);
  const [instantReset, setInstantReset] = useState(false);

  useEffect(() => {
    const calculateWidth = () => {
      if (sliderRef.current) {
        const visibleCards = window.innerWidth <= 600 ? 2 : 4;

        setCardWidth(
          sliderRef.current.offsetWidth / visibleCards
        );
      }
    };

    calculateWidth();

    window.addEventListener("resize", calculateWidth);

    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((previousIndex) => previousIndex + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex >= products.length * 2) {
      const resetTimer = setTimeout(() => {
        setInstantReset(true);
        setCurrentIndex(products.length);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setInstantReset(false);
          });
        });
      }, 800);

      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex]);

  const openProductDetails = (product) => {
    navigate("/product-details", {
      state: {
        product: {
          ...product,
          price: Number(product.price),
        },
      },
    });
  };

  return (
    <>
      <section className="seasonal-section">

      <div className="seasonal-heading">
        <h2>Seasonal Indulgences</h2>

        <button
          onClick={() => navigate("/shop")}
          className="view-all-btn"
        >
          VIEW ALL →
        </button>
      </div>

      <div
        className="seasonal-slider"
        ref={sliderRef}
      >
        <div
          className={`seasonal-track ${
            instantReset ? "instant-reset" : ""
          }`}
          style={{
            transform: `translate3d(-${
              currentIndex * cardWidth
            }px, 0, 0)`,
          }}
        >
          {infiniteProducts.map((product, index) => (
            <div
              className="seasonal-card"
              key={`${product.name}-${index}`}
            >
              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <button
                  className="quick-add"
                  onClick={() => openProductDetails(product)}
                >
                  ADD TO BAG
                </button>

              </div>

              <div className="product-content">

                <h3>
                  {product.name}
                </h3>

                <p>
                  {product.description}
                </p>

                <span>
                  {product.size}
                </span>

                <div className="product-bottom">

                  <strong>
                    ₹{product.price.toLocaleString("en-IN")}
                  </strong>

                  <span>
                    ★★★★★
                  </span>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* =========================================
   KEY INGREDIENTS
========================================= */}

<section className="ingredients-section">

  <div className="ingredients-title">

    <span>KEY INGREDIENTS</span>

    <h2>
      What's inside that really
      <br />
      matters
    </h2>

    <button>
      VIEW FULL LIST
    </button>

  </div>


  <div className="ingredients-grid">

    {[
      {
        image: "/ingredients/aloe.jpg",
        name: "Aloe Vera 200X",
        text:
          "With its strong, soothing, hydrating, and moisturising properties, Aloe Vera stimulates regeneration of the skin.",
      },
      {
        image: "/ingredients/jasmine.jpg",
        name: "Jasmine",
        text:
          "This flower's sweet scent is known to help alleviate stress and anxiety, helping the body to unwind.",
      },
      {
        image: "/ingredients/kewda.jpg",
        name: "Kewda Water",
        text:
          "Kewda Water has cooling and refreshing properties and helps provide a soothing experience.",
      },
      {
        image: "/ingredients/marigold.jpg",
        name: "Marigold",
        text:
          "Marigold has a high content of flavonoids that act as antioxidants and support healthy-looking skin.",
      },
      {
        image: "/ingredients/rose.jpg",
        name: "Rose",
        text:
          "Rose helps tone, refresh and deeply hydrate the skin while leaving it soft and comfortable.",
      },
      {
        image: "/ingredients/saffron.jpg",
        name: "Saffron Stigma Extract",
        text:
          "Saffron Stigma is known for its soothing properties and helps improve the appearance of the skin.",
      },
    ].map((ingredient, index) => (

      <div
        className="ingredient-card"
        key={index}
      >

        <div className="ingredient-image">

          <img
            src={ingredient.image}
            alt={ingredient.name}
          />

        </div>

        <h3>
          {ingredient.name}
        </h3>

        <div className="ingredient-line"></div>

        <p>
          {ingredient.text}
        </p>

      </div>

    ))}

  </div>

</section>


{/* =========================================
   HOW TO USE
========================================= */}

<section className="how-to-use-section">

  <div className="how-to-use-content">

    <span>HOW TO USE</span>

    <h2>
      How to use
    </h2>

    <p>
      After shaking well to mix the water and oil phases thoroughly,
      close your eyes and spray evenly over your entire face from a
      distance of 4 to 8 inches from the skin. Let it absorb fully
      before following up with a moisturiser.
    </p>

  </div>

</section>


{/* =========================================
   REVIEWS
========================================= */}

<section className="reviews-section">

  <div className="reviews-heading">

    <div>
      <span>CUSTOMER REVIEWS</span>

      <h2>
        What our customers say
      </h2>
    </div>

    <button>
      WRITE A REVIEW
    </button>

  </div>


  <div className="review-summary">

    <div className="review-rating">

      <strong>
        4.8
      </strong>

      <div className="stars">
        ★★★★★
      </div>

      <p>
        Based on 126 reviews
      </p>

    </div>


    <div className="rating-bars">

      <div className="rating-row">
        <span>5</span>
        <div className="rating-bar">
          <div style={{ width: "86%" }}></div>
        </div>
      </div>

      <div className="rating-row">
        <span>4</span>
        <div className="rating-bar">
          <div style={{ width: "10%" }}></div>
        </div>
      </div>

      <div className="rating-row">
        <span>3</span>
        <div className="rating-bar">
          <div style={{ width: "3%" }}></div>
        </div>
      </div>

      <div className="rating-row">
        <span>2</span>
        <div className="rating-bar">
          <div style={{ width: "1%" }}></div>
        </div>
      </div>

      <div className="rating-row">
        <span>1</span>
        <div className="rating-bar">
          <div style={{ width: "0%" }}></div>
        </div>
      </div>

    </div>

  </div>


  {/* REVIEW CARDS */}

  <div className="reviews-grid">

    <div className="review-card">

      <div className="review-stars">
        ★★★★★
      </div>

      <h3>
        Absolutely refreshing
      </h3>

      <p>
        "The facial mist feels incredibly refreshing and
        lightweight. My skin feels hydrated and fresh
        throughout the day."
      </p>

      <span>
        Verified Customer
      </span>

    </div>


    <div className="review-card">

      <div className="review-stars">
        ★★★★★
      </div>

      <h3>
        Beautiful product
      </h3>

      <p>
        "I love how gentle this product feels on my skin.
        It has become a part of my everyday skincare routine."
      </p>

      <span>
        Verified Customer
      </span>

    </div>


    <div className="review-card">

      <div className="review-stars">
        ★★★★★
      </div>

      <h3>
        Worth trying
      </h3>

      <p>
        "The fragrance is subtle and the skin feels soft
        after using it. Really nice product."
      </p>

      <span>
        Verified Customer
      </span>

    </div>

  </div>

</section>
    </>
  
  );
}

export default SeasonalProducts;