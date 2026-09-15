import React from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import "../Styles/checkout.css";

function Checkout() {
    const navigate = useNavigate();
  const {
    cartItems,
    totalPrice,
  } = useCart();

  return (
    <div className="checkout-page">

      {/* PAGE TITLE */}

      <div className="checkout-top">

        <h1>
          CHECKOUT
        </h1>

        <p>
          Complete your details to place your order
        </p>

      </div>


      <div className="checkout-container">

        {/* ==================================================
            LEFT SIDE
        ================================================== */}

        <div className="checkout-left">


          {/* LOGIN */}

          <div className="checkout-box">

            <div className="checkout-box-title">

              <h2>
                Login
              </h2>

              <span>
                Already have an account?
              </span>

            </div>

            <p>
              To redeem Soundarya points, Gift Cards
              please log in.
            </p>

            <button className="login-btn">
              LOGIN / SIGN UP
            </button>

          </div>


          {/* SOUNDARYA CLUB */}

          <div className="checkout-box club-box">

            <h2>
              Soundarya Club
            </h2>

            <p>
              Earn points and benefits when you shop
              and enjoy our products.
            </p>

            <button className="benefits-btn">
              VIEW BENEFITS
            </button>


            <div className="club-options">

              <label>
                <input
                  type="radio"
                  name="club"
                  defaultChecked
                />

                I'M INTERESTED
              </label>

              <label>
                <input
                  type="radio"
                  name="club"
                />

                NO THANKS
              </label>

            </div>

          </div>


          {/* SHIPPING ADDRESS */}

          <div className="checkout-box">

            <h2>
              Shipping Address
            </h2>


            {/* EMAIL */}

            <div className="form-group">

              <label>
                EMAIL ADDRESS *
              </label>

              <input
                type="email"
                placeholder="Enter your email address"
              />

              <small>
                You can create an account after checkout.
              </small>

            </div>


            {/* FIRST NAME */}

            <div className="form-group">

              <label>
                FIRST NAME *
              </label>

              <input
                type="text"
                placeholder="First Name"
              />

            </div>


            {/* LAST NAME */}

            <div className="form-group">

              <label>
                LAST NAME *
              </label>

              <input
                type="text"
                placeholder="Last Name"
              />

            </div>


            {/* STREET ADDRESS */}

            <div className="form-group">

              <label>
                STREET ADDRESS *
              </label>

              <input
                type="text"
                placeholder="Street Address"
              />

              <input
                type="text"
                placeholder="Apartment, suite, unit, etc."
              />

            </div>


            {/* POSTAL CODE */}

            <div className="form-row">

              <div className="form-group">

                <label>
                  POSTAL CODE *
                </label>

                <input
                  type="text"
                  placeholder="Postal Code"
                  maxLength="6"
                />

              </div>


              {/* CITY */}

              <div className="form-group">

                <label>
                  CITY *
                </label>

                <input
                  type="text"
                  placeholder="City"
                />

              </div>

            </div>


            {/* COUNTRY */}

            <div className="form-group">

              <label>
                COUNTRY *
              </label>

              <select defaultValue="India">

                <option value="India">
                  India
                </option>

                <option value="USA">
                  United States
                </option>

                <option value="UAE">
                  United Arab Emirates
                </option>

                <option value="UK">
                  United Kingdom
                </option>

              </select>

            </div>


            {/* STATE */}

            <div className="form-group">

              <label>
                STATE / PROVINCE *
              </label>

              <select defaultValue="">

                <option value="" disabled>
                  Please select a state or province
                </option>

                <option>
                  Uttar Pradesh
                </option>

                <option>
                  Delhi
                </option>

                <option>
                  Maharashtra
                </option>

                <option>
                  Haryana
                </option>

                <option>
                  Rajasthan
                </option>

                <option>
                  Gujarat
                </option>

                <option>
                  Punjab
                </option>

              </select>

            </div>


            {/* PHONE */}

            <div className="form-group">

              <label>
                PHONE NUMBER *
              </label>

              <input
                type="tel"
                placeholder="Phone Number"
                maxLength="10"
              />

            </div>


            {/* INSTRUCTIONS */}

            <div className="form-group">

              <label>
                DELIVERY INSTRUCTIONS
              </label>

              <textarea
                placeholder="E.g. Please deliver after 5 PM"
                rows="4"
              ></textarea>

            </div>

          </div>


          {/* SHIPPING METHOD */}

          <div className="checkout-box shipping-method">

            <h2>
              Shipping Methods
            </h2>

            <label className="shipping-option">

              <input
                type="radio"
                name="shipping"
                defaultChecked
              />

              <div>

                <strong>
                  Fixed Rate
                </strong>

                <span>
                  ₹0.00
                </span>

              </div>

            </label>

          </div>

        </div>


        {/* ==================================================
            RIGHT SIDE - ORDER SUMMARY
        ================================================== */}

        <div className="checkout-right">

          <div className="order-summary">

            <h2>
              Order Summary
            </h2>


            {/* ITEMS */}

            <div className="summary-items">

              {cartItems.length === 0 ? (

                <p className="empty-summary">
                  Your cart is empty.
                </p>

              ) : (

                cartItems.map((item, index) => (

                  <div
                    className="summary-product"
                    key={`${item.name}-${item.size}-${index}`}
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                    />


                    <div className="summary-product-info">

                      <h3>
                        {item.name}
                      </h3>

                      <p>
                        Size: {item.size}
                      </p>

                      <p>
                        Qty: {item.quantity}
                      </p>

                      <strong>
                        ₹
                        {(
                          Number(item.price) *
                          item.quantity
                        ).toLocaleString("en-IN")}
                      </strong>

                    </div>

                  </div>

                ))

              )}

            </div>


            {/* SUBTOTAL */}

            <div className="summary-row">

              <span>
                Subtotal
              </span>

              <strong>
                ₹
                {Number(totalPrice).toLocaleString("en-IN")}
              </strong>

            </div>


            {/* SHIPPING */}

            <div className="summary-row">

              <span>
                Shipping
              </span>

              <strong>
                ₹0.00
              </strong>

            </div>


            {/* TOTAL */}

            <div className="summary-total">

              <span>
                Total
              </span>

              <strong>
                ₹
                {Number(totalPrice).toLocaleString("en-IN")}
              </strong>

            </div>


            {/* POINTS */}

            <div className="points-box">

              <span>
                ♧
              </span>

              <p>
                Earn up to{" "}
                <strong>
                  {Math.floor(Number(totalPrice) / 100)}
                </strong>{" "}
                points with your purchase today.
              </p>

            </div>


            {/* PAYMENT BUTTON */}

           <button
  className="payment-btn"
  onClick={() => navigate("/payment")}
>
  PROCEED TO PAYMENT
</button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;