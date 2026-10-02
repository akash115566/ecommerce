import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Styles/footer.css";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      {/* =================================================
          FOOTER LINKS
      ================================================= */}

      <div className="footer-container">

        {/* SHOP */}
        <div className="footer-column">

          <h3>SHOP</h3>

          <Link to="/skincare">SKIN CARE</Link>

          <Link to="/skincare">BATH & BODY</Link>

          <Link to="/skincare">
            PREMIUM LUXURY SOAP
          </Link>

          <Link to="/donkeymilksoap">
            DUNKY MILK SOAP
          </Link>

          <Link to="/skincare">
            CAMEL MILK SOAP
          </Link>

          <Link to="/gifting">
            GIFTING
          </Link>

        </div>


        {/* LUXURY RANGE */}
        <div className="footer-column">

          <h3>LUXURY RANGE</h3>

          <Link to="/serum">
            HAIR CLEANSER
          </Link>

          <Link to="/collection">
            7 STAR HOTEL LUXURY RANGE
          </Link>

          <Link to="/collection">
            COLLECTIONS
          </Link>

          <Link to="/most-loved-rituals">
            MOST LOVED RITUALS
          </Link>

          <Link to="/seasonal">
            SEASONAL COLLECTION
          </Link>

          <Link to="/just-in">
            JUST IN
          </Link>

        </div>


        {/* ABOUT */}
        <div className="footer-column">

          <h3>ABOUT</h3>

          {/* SAME LINK AS BEFORE */}
          <Link to="/ourphilosophy">
            OUR PHILOSOPHY
          </Link>

          <Link to="/our-story">
            OUR STORY
          </Link>

          <Link to="/about">
            ABOUT
          </Link>

          <Link to="/blog">
            BLOG
          </Link>

          <Link to="/terms">
            TERMS
          </Link>

        </div>

      </div>


      {/* =================================================
          FOOTER BOTTOM
      ================================================= */}

      <div className="footer-bottom">

        {/* PAYMENT */}
        <div className="payment-section">

          <h4>PAYMENT METHODS</h4>

          <div className="payment-methods">

            <span className="payment visa">
              VISA
            </span>

            <span className="payment mastercard">
              ●●
            </span>

            <span className="payment amex">
              AMEX
            </span>

            <span className="payment rupay">
              RuPay
            </span>

            <span className="payment paypal">
              PayPal
            </span>

            <span className="payment netbanking">
              Net Banking
            </span>

            <span className="payment cod">
              ₹ CASH ON DELIVERY
            </span>

          </div>

        </div>


        {/* COPYRIGHT */}
        <div className="copyright">

          <p>
            © 2026 Tellus Essentials. All Rights Reserved.
          </p>

        </div>

      </div>


      {/* BACK TO TOP */}
      <button
        className="scroll-top"
        onClick={scrollTop}
        aria-label="Back to top"
      >
        <FaChevronUp />
      </button>

    </footer>
  );
}

export default Footer;