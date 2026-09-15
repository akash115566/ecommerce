import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import "../Styles/payment.css";

function Payment() {

    const [upiProcessing, setUpiProcessing] = useState(false);
  const navigate = useNavigate();

  const { totalPrice, cartItems } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [upi, setUpi] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");

  const [processing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const orderId =
    "ORD" +
    Math.floor(100000 + Math.random() * 900000);

  const handlePayment = (e) => {
    e.preventDefault();

    setProcessing(true);

    // Demo payment processing
    setTimeout(() => {
      setProcessing(false);
      setPaymentSuccess(true);
    }, 2500);
  };

  if (paymentSuccess) {
    return (
      <div className="payment-success-page">

        <div className="success-box">

          <div className="success-icon">
            ✓
          </div>

          <h1>
            Payment Successful
          </h1>

          <p>
            Your payment has been successfully processed.
          </p>

          <div className="order-success-details">

            <div>
              <span>
                Order ID
              </span>

              <strong>
                {orderId}
              </strong>
            </div>

            <div>
              <span>
                Amount Paid
              </span>

              <strong>
                ₹{Number(totalPrice).toLocaleString("en-IN")}
              </strong>
            </div>

            <div>
              <span>
                Items
              </span>

              <strong>
                {cartItems.length}
              </strong>
            </div>

          </div>

          <p className="success-message">
            Thank you for your purchase. Your order
            will be processed shortly.
          </p>

          <button
            className="continue-shopping"
            onClick={() => navigate("/")}
          >
            CONTINUE SHOPPING
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="payment-page">

      {/* HEADER */}

      <div className="payment-header">

        <h1>
          PAYMENT
        </h1>

        <p>
          Complete your payment securely
        </p>

      </div>


      <div className="payment-container">

        {/* LEFT */}

        <div className="payment-left">

          <div className="payment-box">

            <h2>
              Choose Payment Method
            </h2>


            {/* PAYMENT METHODS */}

            <div className="payment-methods">

              <button
                type="button"
                className={
                  paymentMethod === "upi"
                    ? "payment-method active"
                    : "payment-method"
                }
                onClick={() => setPaymentMethod("upi")}
              >
                <span>
                  UPI
                </span>

                <small>
                  Google Pay / PhonePe / Paytm
                </small>
              </button>


              <button
                type="button"
                className={
                  paymentMethod === "card"
                    ? "payment-method active"
                    : "payment-method"
                }
                onClick={() => setPaymentMethod("card")}
              >
                <span>
                  Credit / Debit Card
                </span>

                <small>
                  Visa / Mastercard / RuPay
                </small>
              </button>


              <button
                type="button"
                className={
                  paymentMethod === "netbanking"
                    ? "payment-method active"
                    : "payment-method"
                }
                onClick={() =>
                  setPaymentMethod("netbanking")
                }
              >
                <span>
                  Net Banking
                </span>

                <small>
                  All major banks
                </small>
              </button>

            </div>


            {/* UPI */}

        {paymentMethod === "upi" && (
  <div className="payment-form">

    <label>
      UPI ID
    </label>

    <input
      type="text"
      placeholder="example@upi"
      value={upi}
      onChange={(e) => setUpi(e.target.value)}
    />

    <p className="payment-note">
      Example: yourname@upi
    </p>

    <button
      type="button"
      className="upi-pay-btn"
      disabled={upiProcessing}
      onClick={() => {

        if (!upi.trim()) {
          alert("Please enter your UPI ID");
          return;
        }

        setUpiProcessing(true);

        setTimeout(() => {
          setUpiProcessing(false);
          setProcessing(true);

          setTimeout(() => {
            setProcessing(false);
            setPaymentSuccess(true);
          }, 2000);

        }, 1500);

      }}
    >
      {upiProcessing
        ? "VERIFYING UPI..."
        : `CONTINUE TO PAY ₹${Number(totalPrice).toLocaleString("en-IN")}`
      }
    </button>

  </div>
)}


            {/* CARD */}

            {paymentMethod === "card" && (

              <div className="payment-form">

                <label>
                  CARD NUMBER
                </label>

                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                  value={cardNumber}
                  onChange={(e) =>
                    setCardNumber(e.target.value)
                  }
                />


                <label>
                  CARD HOLDER NAME
                </label>

                <input
                  type="text"
                  placeholder="Name on card"
                  value={cardName}
                  onChange={(e) =>
                    setCardName(e.target.value)
                  }
                />


                <div className="card-row">

                  <div>

                    <label>
                      EXPIRY
                    </label>

                    <input
                      type="text"
                      placeholder="MM/YY"
                      maxLength="5"
                      value={expiry}
                      onChange={(e) =>
                        setExpiry(e.target.value)
                      }
                    />

                  </div>


                  <div>

                    <label>
                      CVV
                    </label>

                    <input
                      type="password"
                      placeholder="***"
                      maxLength="3"
                      value={cvv}
                      onChange={(e) =>
                        setCvv(e.target.value)
                      }
                    />

                  </div>

                </div>

              </div>

            )}


            {/* NET BANKING */}

            {paymentMethod === "netbanking" && (

              <div className="payment-form">

                <label>
                  SELECT YOUR BANK
                </label>

                <select defaultValue="">

                  <option
                    value=""
                    disabled
                  >
                    Select Bank
                  </option>

                  <option>
                    HDFC Bank
                  </option>

                  <option>
                    State Bank of India
                  </option>

                  <option>
                    ICICI Bank
                  </option>

                  <option>
                    Axis Bank
                  </option>

                  <option>
                    Kotak Mahindra Bank
                  </option>

                </select>

              </div>

            )}


            {/* SECURITY */}

            <div className="secure-payment">

              🔒

              <span>
                Your payment information is securely
                processed.
              </span>

            </div>


            {/* PAY BUTTON */}

            <button
              className="pay-now-btn"
              onClick={handlePayment}
              disabled={processing}
            >

              {processing
                ? "PROCESSING PAYMENT..."
                : `PAY ₹${Number(totalPrice).toLocaleString("en-IN")}`
              }

            </button>

          </div>

        </div>


        {/* RIGHT - ORDER SUMMARY */}

        <div className="payment-right">

          <div className="payment-summary">

            <h2>
              Order Summary
            </h2>


            <div className="payment-products">

              {cartItems.map((item, index) => (

                <div
                  className="payment-product"
                  key={`${item.name}-${item.size}-${index}`}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>

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

              ))}

            </div>


            <div className="payment-summary-row">

              <span>
                Subtotal
              </span>

              <strong>
                ₹
                {Number(totalPrice).toLocaleString("en-IN")}
              </strong>

            </div>


            <div className="payment-summary-row">

              <span>
                Shipping
              </span>

              <strong>
                ₹0.00
              </strong>

            </div>


            <div className="payment-total">

              <span>
                Total
              </span>

              <strong>
                ₹
                {Number(totalPrice).toLocaleString("en-IN")}
              </strong>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Payment;