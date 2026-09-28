import React from "react";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaChevronUp,
} from "react-icons/fa";

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

      <div className="footer-container">


        {/* ================= SHOP ================= */}

        <div className="footer-column">

          <h3>SHOP</h3>

          <Link to="/shop/makeup">
            MAKEUP
          </Link>

          <Link to="/shop/facial-care">
            FACIAL CARE
          </Link>

          <Link to="/shop/body-care">
            BODY CARE
          </Link>

          <Link to="/shop/hair-care">
            HAIR CARE
          </Link>

          <Link to="/shop/mens-care">
            MEN'S CARE
          </Link>

          <Link to="/shop/mother-baby-care">
            MOTHER & BABY CARE
          </Link>

          <Link to="/shop/wellness">
            WELLNESS
          </Link>

          <Link to="/shop/gifting">
            GIFTING
          </Link>

          <Link to="/shop/corporate-gifting">

            CORPORATE GIFTING

            <span className="new-badge">
              NEW
            </span>

          </Link>

        </div>



        {/* ================= ABOUT ================= */}

        <div className="footer-column">

          <h3>ABOUT</h3>

          <Link to="/ourphilosophy">
            OUR PHILOSOPHY
          </Link>

          <Link to="/about/social-responsibility">
            SOCIAL RESPONSIBILITY
          </Link>

          <Link to="/terms">
            TERMS
          </Link>

          <Link to="/faqs">
            FAQS
          </Link>

          <Link to="/stores">
            STORES
          </Link>

          <Link to="/careers">
            CAREERS
          </Link>

        </div>



        {/* ================= QUICK LINKS ================= */}

        <div className="footer-column">

          <h3>QUICK LINKS</h3>

          <Link to="/account">
            MY ACCOUNT
          </Link>

          <Link to="/blog">
            BLOG
          </Link>

          <Link to="/orders">
            MY ORDER(S)
          </Link>

          <Link to="/track-order">
            TRACK MY ORDER
          </Link>

          <Link to="/ingredients">
            OUR INGREDIENTS
          </Link>

        </div>



        {/* ================= CONTACT ================= */}

        <div className="footer-column contact-column">

          <h3>CONTACT</h3>

          <div className="contact-item">

            <span>Email:</span>

            <a href="mailto:hello@tellusessentials.com">
              hello@tellusessentials.com
            </a>

          </div>


          <div className="contact-item">

            <span>Phone:</span>

            <a href="tel:+919999999999">
              +91-9999999999
            </a>

          </div>


          <Link
            to="/contact"
            className="contact-link"
          >
            CONTACT US
          </Link>



          {/* FOLLOW */}

          <h3 className="follow-title">
            FOLLOW
          </h3>


          <div className="social-icons">

            <a
              href="#"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>

            <a
              href="#"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

          </div>

        </div>

      </div>



      {/* ================= BOTTOM ================= */}

      <div className="footer-bottom">


        {/* PAYMENT */}

        <div className="payment-section">

          <h4>
            PAYMENT METHODS
          </h4>

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
              ₹ CASH ON
              <br />
              DELIVERY
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



      {/* SCROLL TOP */}

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