import React, { useEffect, useRef, useState } from "react";
import "../Styles/mostLovedrituals.css";

const products = [
  {
    image: "/kromaic.jfif",
    title: "FRAGRANT MOISTURE-LOCK DUO",
    description: "Replenishes Moisture & Scents The Skin",
    price: "₹3,845.00",
  },
  {
   image: "/nisha.jfif",
    title: "BATH SET - LIME & SAFFRON",
    description: "Purifies, Detoxifies & Moisturises",
    price: "₹3,600.00",
  },
  {
    image: "/kromaic.jfif",
    title: "DAILY CLEANSE & SHIELD PAIR",
    description: "Daily Cleansing & Protection Ritual",
    price: "₹2,870.00",
  },
  {
    image: "/soap.jfif",
    title: "RADIANT SKIN RITUAL",
    description: "Illuminates Dull Skin",
    price: "₹5,550.00",
  },
  {
    image: "/soap-protam.jfif",
    title: "ROSE & SANDALWOOD RITUAL",
    description: "Nourishes Skin & Enhances Radiance",
    price: "₹3,250.00",
  },
  {
   image: "/nisha.jfif",
    title: "AYURVEDIC BODY CARE SET",
    description: "Softens, Nourishes & Hydrates",
    price: "₹4,150.00",
  },
  {
    image: "/soap.jfif",
    title: "LUXURY HAIR RITUAL",
    description: "Strengthens Hair & Nourishes Scalp",
    price: "₹3,950.00",
  },
  {
    image: "/kromaic.jfif",
    title: "PREMIUM WELLNESS RITUAL",
    description: "A Complete Everyday Self-Care Ritual",
    price: "₹4,750.00",
  },
];

function MostLovedRituals() {
  const sliderRef = useRef(null);

  /*
    Products ko 3 baar repeat kiya hai.
    Isse 8 ke baad 1 par visible jump nahi hoga.
  */
  const infiniteProducts = [
    ...products,
    ...products,
    ...products,
  ];

  // Middle set se start
  const [currentIndex, setCurrentIndex] = useState(products.length);

  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  /*
    Responsive card width
  */
  useEffect(() => {
    const updateSlider = () => {
      if (!sliderRef.current) return;

      const width = sliderRef.current.offsetWidth;

      const visible = window.innerWidth <= 600 ? 2 : 4;

      setVisibleCards(visible);
      setCardWidth(width / visible);
    };

    updateSlider();

    window.addEventListener("resize", updateSlider);

    return () => {
      window.removeEventListener("resize", updateSlider);
    };
  }, []);

  /*
    Automatic one-card slide
  */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  /*
    Jab second copy ke end ke paas pahunchta hai,
    silently middle copy par aa jata hai.
  */
  useEffect(() => {
    if (currentIndex >= products.length * 2) {
      const resetTimer = setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current
            .querySelector(".ritual-track")
            ?.classList.add("no-transition");
        }

        setCurrentIndex(products.length);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (sliderRef.current) {
              sliderRef.current
                .querySelector(".ritual-track")
                ?.classList.remove("no-transition");
            }
          });
        });
      }, 850);

      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex]);

  /*
    Manual next
  */
  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  /*
    Manual previous
  */
  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev <= products.length) {
        return products.length * 2 - 1;
      }

      return prev - 1;
    });
  };

  return (
    <section className="ritual-section">

      {/* HEADER */}

      <div className="ritual-header">

        <h2>MOST LOVED RITUALS</h2>

        <button className="view-all">
          VIEW ALL <span>→</span>
        </button>

      </div>


      {/* SLIDER */}

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

          {infiniteProducts.map((product, index) => (

            <div
              className="ritual-card"
              key={`${product.title}-${index}`}
              style={{
                width: `${cardWidth}px`,
                flexBasis: `${cardWidth}px`,
              }}
            >

              {/* IMAGE */}

              <div className="ritual-image">

                <img
                  src={product.image}
                  alt={product.title}
                />

                <button
                  className="heart-btn"
                  aria-label="Add to wishlist"
                >
                  ♡
                </button>

              </div>


              {/* DETAILS */}

              <div className="ritual-details">

                <h3>
                  {product.title}
                </h3>

                <p>
                  {product.description}
                </p>

                <div className="ritual-price">
                  {product.price}
                </div>

                <button className="add-bag">
                  Add to Bag
                </button>

              </div>

            </div>

          ))}

        </div>


        {/* ARROWS */}

        <button
          className="ritual-arrow ritual-prev"
          onClick={prevSlide}
        >
          ‹
        </button>

        <button
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