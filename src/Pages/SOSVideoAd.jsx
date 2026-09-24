import React from "react";
import "../Styles/sosVideoAd.css";

function SOSVideoAd() {
  return (
    <section className="sos-video-ad">

      {/* VIDEO */}

      <video
        className="sos-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source
          src="/home/skincare.mp4"
          type="video/mp4"
        />

        Your browser does not support the video tag.
      </video>


      {/* DARK LUXURY OVERLAY */}

      <div className="sos-video-overlay"></div>


      {/* CONTENT */}

      <div className="sos-video-content">

        {/* <span className="sos-video-small">
          SOS SIGNATURE SKINCARE
        </span> */}

        <h2>
          YOUR SKIN.
          <br />
          YOUR <span>RITUAL.</span>
        </h2>

        <p>
          Discover thoughtfully crafted skincare rituals<br/>
          designed for day, night and everyday care.
        </p>

        <button
          type="button"
          className="sos-video-button"
          onClick={() => {
            document
              .getElementById("sos-products")
              ?.scrollIntoView({
                behavior: "smooth",
              });
          }}
        >
          EXPLORE THE COLLECTION
          <span>→</span>
        </button>

      </div>


      {/* BOTTOM BRAND LINE */}

      <div className="sos-video-bottom">
        <span>DAY</span>
        <i></i>
        <span>NIGHT</span>
        <i></i>
        <span>SERUM</span>
        <i></i>
        <span>CARE</span>
      </div>

    </section>
  );
}

export default SOSVideoAd;