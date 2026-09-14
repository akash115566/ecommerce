import React, { useEffect, useRef, useState } from "react";
import "../Styles/seasonalProducts.css";

const products = [
  {
    image: "/pic.png",
    name: "OVERNIGHT REPAIR MASK PANCHPUSHPI",
    description: "Replenishes Moisture, Restores Radiance",
    size: "60 g",
    price: "₹1,975.00",
  },
  {
    image: "/pic.png",
    name: "LUXURY SUGAR SOAP PANCHPUSHP",
    description: "Handmade Ayurvedic Soap",
    size: "125 g",
    price: "₹595.00",
  },
  {
    image: "/pic.png",
    name: "SERUM INFUSED FACIAL MIST",
    description: "Revitalising & Rehydrating",
    size: "100 ml",
    price: "₹750.00",
  },
  {
    image: "/pic.png",
    name: "SHEER SUNSCREEN BODY SPRAY",
    description: "Weightless, Dewy Protection",
    size: "130 ml",
    price: "₹2,250.00",
  },
  {
     image: "/pic.png",
    name: "AYURVEDIC FACIAL CLEANSER",
    description: "Gentle cleansing for radiant skin",
    size: "200 ml",
    price: "₹895.00",
  },
  {
     image: "/pic.png",
    name: "LUXURY BODY LOTION",
    description: "Deep nourishment & hydration",
    size: "200 ml",
    price: "₹1,250.00",
  },
  {
     image: "/pic.png",
    name: "AYURVEDIC HAIR CLEANSER",
    description: "Nourishes scalp and strengthens hair",
    size: "200 ml",
    price: "₹1,450.00",
  },
  {
     image: "/pic.png",
    name: "PREMIUM ROSE FACE MIST",
    description: "Refreshing & hydrating facial mist",
    size: "100 ml",
    price: "₹995.00",
  },
];

function SeasonalProducts() {
  const sliderRef = useRef(null);

  // Products ko 3 times repeat kar rahe hain
  const infiniteProducts = [
    ...products,
    ...products,
    ...products,
  ];

  // Middle set se start
  const [currentIndex, setCurrentIndex] = useState(products.length);

  const [cardWidth, setCardWidth] = useState(0);

  // Card width calculate
  useEffect(() => {
    const calculateWidth = () => {
      if (sliderRef.current) {
        setCardWidth(sliderRef.current.offsetWidth / 4);
      }
    };

    calculateWidth();

    window.addEventListener("resize", calculateWidth);

    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, []);

  // Automatic slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Jab second set complete ho jaye
  useEffect(() => {
    if (currentIndex >= products.length * 2) {
      setTimeout(() => {
        setCurrentIndex(products.length);
      }, 800);
    }
  }, [currentIndex]);

  return (
    <section className="seasonal-section">

      {/* Heading */}

      <div className="seasonal-heading">

        <h2>Seasonal Indulgences</h2>

        <button>
          VIEW ALL →
        </button>

      </div>

      {/* Slider */}

      <div
        className="seasonal-slider"
        ref={sliderRef}
      >

        <div
          className="seasonal-track"
          style={{
            transform: `translateX(-${
              currentIndex * cardWidth
            }px)`,
          }}
        >

          {infiniteProducts.map((product, index) => (

            <div
              className="seasonal-card"
              key={index}
            >

              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <button className="quick-add">
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
                    {product.price}
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
  );
}

export default SeasonalProducts;