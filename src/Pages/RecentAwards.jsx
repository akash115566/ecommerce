import React, { useEffect, useRef, useState } from "react";
import "../Styles/recentawards.css";

const awards = [
  {
    image: "/award.webp",
    title: "Best Business Excellence Award",
  },
  {
     image: "/award.webp",
    title: "Outstanding Brand Award",
  },
  {
     image: "/award.webp",
    title: "Excellence in Media Award",
  },
  {
     image: "/award.webp",
    title: "Business Leadership Award",
  },
  {
     image: "/award.webp",
    title: "Best Growth Award",
  },
  {
     image: "/award.webp",
    title: "Entrepreneurship Excellence Award",
  },
  {
     image: "/award.webp",
    title: "Industry Excellence Award",
  },
  {
     image: "/award.webp",
    title: "National Achievement Award",
  },
];

function RecentAwards() {
  const sliderRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(awards.length);
  const [cardWidth, setCardWidth] = useState(0);

  // 3 copies for infinite slider
  const infiniteAwards = [
    ...awards,
    ...awards,
    ...awards,
  ];

  // Calculate card width
  useEffect(() => {
    const updateWidth = () => {
      if (!sliderRef.current) return;

      const visibleCards =
        window.innerWidth <= 600 ? 1 : 3;

      setCardWidth(
        sliderRef.current.offsetWidth / visibleCards
      );
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  // Continuous slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  // Invisible reset after second set
  useEffect(() => {
    if (currentIndex >= awards.length * 2) {
      const timer = setTimeout(() => {
        const track =
          sliderRef.current?.querySelector(
            ".awards-track"
          );

        if (track) {
          track.classList.add("instant-reset");
        }

        setCurrentIndex(awards.length);

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

  return (
    <section className="recent-awards">

      {/* LEFT HEADING */}

      <div className="awards-title">

        <span>OUR ACHIEVEMENTS</span>

        <h2>
          Recent
          <br />
          Awards
        </h2>

        <p>
          Celebrating recognition,
          excellence and milestones.
        </p>

      </div>


      {/* RIGHT SLIDER */}

      <div
        className="awards-slider"
        ref={sliderRef}
      >

        <div
          className="awards-track"
          style={{
            transform: `translate3d(-${
              currentIndex * cardWidth
            }px, 0, 0)`,
          }}
        >

          {infiniteAwards.map((award, index) => (

            <div
              className="award-card"
              key={`${award.title}-${index}`}
              style={{
                width: `${cardWidth}px`,
                flexBasis: `${cardWidth}px`,
              }}
            >

              <div className="award-image">

                <img
                  src={award.image}
                  alt={award.title}
                />

              </div>

              <h3>
                {award.title}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default RecentAwards;