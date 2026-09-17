import React, { useEffect, useState } from "react";
import "../Styles/slide.css"

function Slide() {

  const slides = [
    {
      image: "/home/slide/tellus.jfif",
      // small: "NATURAL BEAUTY",
      // title: "TIME",
      // title2: "TO GLOW",
      // description: "Discover Your Everyday Beauty Ritual",
      // button: "SHOP NOW",

      // boxTitle: "DAILY BEAUTY ESSENTIALS",
      boxText:
        "Discover carefully selected skincare products designed for your everyday beauty routine.",
      boxButton: "EXPLORE SKINCARE",
    },

    {
      image: "/home/slide/tellusdrop.jfif",
      // small: "SKIN CARE",
      // title: "PURE",
      // title2: "SELF CARE",
      // description: "Luxury Essentials For Beautiful Skin",
      // button: "EXPLORE",

      // boxTitle: "SKINCARE COLLECTION",
      boxText:
        "Nourish, hydrate and refresh your skin with our premium skincare collection.",
      boxButton: "SHOP SKINCARE",
    },

    {
      image: "/home/slide/tellusname.jfif",
      // small: "HAIR CARE",
      // title: "HEALTHY",
      // title2: "HAIR DAYS",
      // description: "Nourish Your Hair With Nature",
      // button: "SHOP HAIR",

      // boxTitle: "HAIR CARE RITUAL",
      boxText:
        "Give your hair the care it deserves with nourishing oils, shampoos and conditioners.",
      boxButton: "EXPLORE HAIR CARE",
    },

    {
      image: "/home/slide/tellussaopgreen.jfif",
      // small: "SPECIAL GIFTS",
      // title: "GIVE",
      // title2: "BEAUTIFULLY",
      // description: "Thoughtful Gifts For Every Occasion",
      // button: "SHOP GIFTS",

      // boxTitle: "BEAUTY GIFT COLLECTION",
      boxText:
        "Find beautiful gift sets and thoughtful combinations for your loved ones.",
      boxButton: "EXPLORE GIFTS",
    },
     {
      image: "/home/slide/tellussoap.jfif",
      // small: "SPECIAL GIFTS",
      // title: "GIVE",
      // title2: "BEAUTIFULLY",
      // description: "Thoughtful Gifts For Every Occasion",
      // button: "SHOP GIFTS",

      // boxTitle: "BEAUTY GIFT COLLECTION",
      boxText:
        "Find beautiful gift sets and thoughtful combinations for your loved ones.",
      boxButton: "EXPLORE GIFTS",
    },
  ];


  const [currentSlide, setCurrentSlide] = useState(0);


  // AUTO SLIDER

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrentSlide(
        (prev) => (prev + 1) % slides.length
      );

    }, 5000);

    return () => clearInterval(timer);

  }, [slides.length]);


  // NEXT SLIDE

  const nextSlide = () => {

    setCurrentSlide(
      (prev) => (prev + 1) % slides.length
    );

  };


  // PREVIOUS SLIDE

  const prevSlide = () => {

    setCurrentSlide(
      (prev) =>
        (prev - 1 + slides.length) %
        slides.length
    );

  };


  const slide = slides[currentSlide];


  return (

    <section className="hero-slider">

      {/* =========================
          IMAGE SLIDER
      ========================= */}

      <div
        className="hero-image"
        style={{
          backgroundImage: `url(${slide.image})`,
        }}
      >

        {/* OVERLAY */}

        <div className="hero-overlay"></div>


        {/* TEXT */}

        <div className="hero-content">

          <p className="hero-small">
            {slide.small}
          </p>


          <h1>

            {slide.title}

            <br />

            <span>
              {slide.title2}
            </span>

          </h1>


          <p className="hero-description">
            {slide.description}
          </p>


          <button className="hero-button">

            {slide.button} →

          </button>

        </div>


        {/* LEFT ARROW */}

        <button
          className="hero-arrow hero-left"
          onClick={prevSlide}
        >
          ‹
        </button>


        {/* RIGHT ARROW */}

        <button
          className="hero-arrow hero-right"
          onClick={nextSlide}
        >
          ›
        </button>


        {/* DOTS */}

        <div className="hero-dots">

          {slides.map((_, index) => (

            <span
              key={index}
              className={
                currentSlide === index
                  ? "hero-dot active"
                  : "hero-dot"
              }
              onClick={() =>
                setCurrentSlide(index)
              }
            ></span>

          ))}

        </div>

      </div>


      {/* =========================
          BOTTOM INFORMATION BOX
      ========================= */}

      <div className="slider-info">

        <div className="info-number">

          0{currentSlide + 1}

        </div>


        <div className="info-content">

          <p className="info-label">
            FEATURED COLLECTION
          </p>

          <h2>
            {slide.boxTitle}
          </h2>

          <p>
            {slide.boxText}
          </p>

        </div>


        <button className="info-button">

          {slide.boxButton} →

        </button>

      </div>

    </section>
  );
}

export default Slide;