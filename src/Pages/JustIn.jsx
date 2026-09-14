import React, { useEffect, useRef, useState } from "react";
import "../Styles/justin.css";

const products = [
  {
    image: "/images/product1.jpg",
    name: "ROSE GLOW FACE SERUM",
    use: "Brightens, Hydrates & Revitalises Skin",
  },
  {
    image: "/images/product2.jpg",
    name: "LUXURY SAFFRON CLEANSER",
    use: "Gently Cleanses & Refreshes Skin",
  },
  {
    image: "/images/product3.jpg",
    name: "BHRINGRAJ HAIR OIL",
    use: "Nourishes Scalp & Strengthens Hair",
  },
  {
    image: "/images/product4.jpg",
    name: "KUMKUMADI FACE OIL",
    use: "Improves Radiance & Skin Texture",
  },
  {
    image: "/images/product5.jpg",
    name: "SANDALWOOD BODY LOTION",
    use: "Deeply Moisturises & Softens Skin",
  },
  {
    image: "/images/product6.jpg",
    name: "VETIVER COOLING MIST",
    use: "Refreshes & Hydrates Skin",
  },
  {
    image: "/images/product7.jpg",
    name: "AYURVEDIC FACE MASK",
    use: "Purifies, Revives & Brightens Skin",
  },
  {
    image: "/images/product8.jpg",
    name: "ROSE & JASMINE BODY MIST",
    use: "Refreshes Skin With A Floral Fragrance",
  },
];

function JustIn() {
  const sliderRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(products.length);
  const [cardWidth, setCardWidth] = useState(0);

  // Products ko 3 times repeat kar rahe hain
  const infiniteProducts = [
    ...products,
    ...products,
    ...products,
  ];

  // Card width calculate
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

  // Continuous auto slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  // Invisible reset
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

  // Next button
  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  // Previous button
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

      {/* =========================
          TOP HEADER
      ========================= */}

      <div className="justin-header">

        <div className="justin-heading">

          <p>JUST IN</p>

          <h2>
            Explore our latest launches
          </h2>

        </div>

        <a href="/shop" className="justin-view-all">
          VIEW ALL <span>→</span>
        </a>

      </div>


      {/* =========================
          SLIDER
      ========================= */}

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


              {/* PRODUCT DETAILS */}

              <div className="justin-content">

                <h3>
                  {product.name}
                </h3>

                <p>
                  {product.use}
                </p>

                <a
                  href="/shop"
                  className="shop-now"
                >
                  SHOP NOW <span>→</span>
                </a>

              </div>

            </div>

          ))}

        </div>


        {/* ARROWS */}

        <button
          className="justin-arrow justin-prev"
          onClick={prevSlide}
          aria-label="Previous"
        >
          ‹
        </button>

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