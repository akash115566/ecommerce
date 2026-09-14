import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaChevronUp,
} from "react-icons/fa";
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

          <a href="/shop/makeup">MAKEUP</a>
          <a href="/shop/facial-care">FACIAL CARE</a>
          <a href="/shop/body-care">BODY CARE</a>
          <a href="/shop/hair-care">HAIR CARE</a>
          <a href="/shop/mens-care">MEN'S CARE</a>
          <a href="/shop/mother-baby-care">
            MOTHER & BABY CARE
          </a>
          <a href="/shop/wellness">WELLNESS</a>
          <a href="/shop/gifting">GIFTING</a>

          <a href="/shop/corporate-gifting">
            CORPORATE GIFTING
            <span className="new-badge">NEW</span>
          </a>

        </div>


        {/* ================= ABOUT ================= */}

        <div className="footer-column">

          <h3>ABOUT</h3>

          <a href="/about">OUR PHILOSOPHY</a>
          <a href="/about/social-responsibility">
            SOCIAL RESPONSIBILITY
          </a>
          <a href="/about/media">MEDIA & PRESS</a>
          <a href="/policies">POLICIES</a>
          <a href="/terms">TERMS</a>
          <a href="/faqs">FAQS</a>
          <a href="/club-faqs">SOUNDARYA CLUB FAQS</a>
          <a href="/stores">STORES</a>
          <a href="/careers">CAREERS</a>

        </div>


        {/* ================= QUICK LINKS ================= */}

        <div className="footer-column">

          <h3>QUICK LINKS</h3>

          <a href="/account">MY ACCOUNT</a>
          <a href="/club">SOUNDARYA CLUB SIGN IN</a>
          <a href="/offers">CURRENT OFFERS</a>
          <a href="/customised-skincare">
            CUSTOMISED SKINCARE
          </a>
          <a href="/blog">BLOG</a>
          <a href="/orders">MY ORDER(S)</a>
          <a href="/track-order">TRACK MY ORDER</a>
          <a href="/ingredients">OUR INGREDIENTS</a>
          <a href="/uk">FOREST ESSENTIALS UK</a>

        </div>


        {/* ================= CONTACT ================= */}

        <div className="footer-column contact-column">

          <h3>CONTACT</h3>

          <div className="contact-item">

            <span>Email:</span>

            <a href="mailto:hello@example.com">
              hello@example.com
            </a>

          </div>

          <div className="contact-item">

            <span>Phone:</span>

            <a href="tel:+919999999999">
              +91-9999999999
            </a>

          </div>

          <a
            href="/contact"
            className="contact-link"
          >
            Contact Us
          </a>


          {/* SOCIAL */}

          <h3 className="follow-title">
            FOLLOW
          </h3>

          <div className="social-icons">

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>

            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM ================= */}

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
              ₹ CASH ON
              <br />
              DELIVERY
            </span>

          </div>

        </div>


        {/* COPYRIGHT */}

        <div className="copyright">

          <p>
            © 2026 Your Beauty Store
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