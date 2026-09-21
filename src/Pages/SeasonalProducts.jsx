import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/seasonalProducts.css";
import { useCart } from "../Context/CartContext";
import Reviews from "./Reviews";

const products = [
  {
    image: "/home/soap/soapgreen.jfif",
    images: [
      "/home/soap/soapgreen.jfif",
     "/home/soap/soapgreen.jfif",
     "/home/soap/soapgreen.jfif",
      "/home/soap/soapgreen.jfif",
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
    image: "/home/soap/soapred.jfif",
    images: [
      "/home/soap/soapred.jfif",
      "/home/soap/soapred-2.jfif",
      "/home/soap/nisha-3.jfif",
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
    image: "/home/soap/soapgreen.jfif",
    images: [
      "/home/soap/soapgreen.jfif",
     "/home/soap/soapgreen.jfif",
     "/home/soap/soapgreen.jfif",
      "/home/soap/soapgreen.jfif",
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
    image: "/home/soap/soapred.jfif",
    images: [
      "/home/soap/soapred.jfif",
      "/home/soap/soapred-2.jfif",
      "/home/soap/nisha-3.jfif",
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
    image: "/home/soap/soapgreen.jfif",
    images: [
      "/home/soap/soapgreen.jfif",
     "/home/soap/soapgreen.jfif",
     "/home/soap/soapgreen.jfif",
      "/home/soap/soapgreen.jfif",
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
   image: "/home/soap/soapred.jfif",
    images: [
      "/home/soap/soapred.jfif",
      "/home/soap/soapred-2.jfif",
      "/home/soap/nisha-3.jfif",
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
     image: "/home/soap/soapgreen.jfif",
    images: [
      "/home/soap/soapgreen.jfif",
     "/home/soap/soapgreen.jfif",
     "/home/soap/soapgreen.jfif",
      "/home/soap/soapgreen.jfif",
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
    image: "/home/soap/soapred.jfif",
    images: [
      "/home/soap/soapred.jfif",
      "/home/soap/soapred-2.jfif",
      "/home/soap/nisha-3.jfif",
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
  onClick={() => openProductDetails(product)}
>
              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <button
  type="button"
  className="quick-add"
  onClick={(e) => {
    e.stopPropagation();

    addToCart({
      ...product,
      price: Number(product.price),
      quantity: 1,
    });
  }}
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

    <span>WHAT OUR CUSTOMERS SAY</span>

    <h2>
      Real experiences,
      <br />
      real rituals
    </h2>

    <p>
      Discover what our customers have to say about
      their experience with our Ayurvedic beauty rituals.
    </p>

    <button type="button">
      VIEW ALL REVIEWS
    </button>

  </div>


  <div className="ingredients-grid">

    {[
      {
        name: "Priya Sharma",
        location: "Delhi, India",
        rating: 5,
        comment:
          "I have been using this product for a few weeks and absolutely love the texture. My skin feels soft, hydrated and fresh after every use.",
        image: "/home/girl.jfif",
      },

      {
        name: "Ananya Mehta",
        location: "Mumbai, India",
        rating: 5,
        comment:
          "The fragrance is beautiful and the overall experience feels very luxurious. It has become a part of my daily skincare ritual.",
       image: "/home/girlad.jfif",
      },

      {
        name: "Ritika Kapoor",
        location: "Bangalore, India",
        rating: 4,
        comment:
          "I really enjoyed using this product. It feels gentle on the skin and gives a lovely refreshing feeling without being heavy.",
        image: "/home/girladd.jfif",
      },

      {
        name: "Neha Verma",
        location: "Gurgaon, India",
        rating: 5,
        comment:
          "The quality feels premium and the packaging is beautiful. I especially liked how nourished my skin felt after regular use.",
       image: "/home/girladdd.jfif",
      },

      {
        name: "Kavya Singh",
        location: "Jaipur, India",
        rating: 5,
        comment:
          "The rose-infused feel is amazing. My skin feels comfortable, hydrated and naturally fresh. Definitely something I enjoy using every day.",
        image: "/home/girl.jfif",
      },

      {
        name: "Meera Malhotra",
        location: "Chandigarh, India",
        rating: 5,
        comment:
          "A beautiful Ayurvedic-inspired experience. The product feels soothing and luxurious, and I really like the subtle natural fragrance.",
        image: "/home/girlad.jfif",
      },
    ].map((review, index) => (

      <div
        className="ingredient-card review-card"
        key={index}
      >

        {/* CUSTOMER IMAGE */}

        <div className="ingredient-image review-image">

          <img
            src={review.image}
            alt={review.name}
          />

        </div>


        {/* STARS */}

        <div className="review-stars">

          {"★".repeat(review.rating)}

          {"☆".repeat(5 - review.rating)}

        </div>


        {/* COMMENT */}

        <p className="review-comment">
          "{review.comment}"
        </p>


        <div className="ingredient-line"></div>


        {/* CUSTOMER */}

        <h3>
          {review.name}
        </h3>

        <span className="review-location">
          {review.location}
        </span>

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

<Reviews />
    </>
  
  );
}

export default SeasonalProducts;