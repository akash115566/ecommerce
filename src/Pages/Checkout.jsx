import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import "../Styles/checkout.css";

function Checkout() {

  const navigate = useNavigate();

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalItems,
    totalPrice,
  } = useCart();


  return (
    <main className="checkout-page">

      <div className="checkout-container">

        {/* =====================================
            LEFT
        ===================================== */}

        <section className="checkout-left">

          <div className="checkout-heading">

            <div>
              <span>
                SHOPPING BAG
              </span>

              <h1>
                YOUR BAG
              </h1>
            </div>

            <p>
              {totalItems}{" "}
              {totalItems === 1
                ? "ITEM"
                : "ITEMS"}
            </p>

          </div>


          {cartItems.length === 0 ? (

            <div className="empty-checkout">

              <h2>
                Your Bag is Empty
              </h2>

              <p>
                Explore our collection and
                add something to your bag.
              </p>

              <button
                type="button"
                onClick={() => navigate("/")}
              >
                CONTINUE SHOPPING
              </button>

            </div>

          ) : (

            <div className="checkout-products">

              {cartItems.map((item, index) => (

                <div
                  className="checkout-product"
                  key={`${item.name}-${item.size}-${index}`}
                >

                  {/* IMAGE */}

                  <div className="checkout-product-image">

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                  </div>


                  {/* DETAILS */}

                  <div className="checkout-product-info">

                    <p className="checkout-category">
                      {item.category}
                    </p>

                    <h2>
                      {item.name}
                    </h2>

                    <p className="checkout-size">
                      Size: {item.size}
                    </p>


                    <strong className="checkout-price">

                      ₹
                      {Number(item.price)
                        .toLocaleString("en-IN")}

                    </strong>


                    {/* QUANTITY */}

                    <div className="checkout-quantity">

                      <button
                        type="button"
                        onClick={() =>
                          decreaseQuantity(
                            item.name,
                            item.size
                          )
                        }
                      >
                        −
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          increaseQuantity(
                            item.name,
                            item.size
                          )
                        }
                      >
                        +
                      </button>

                    </div>


                    <button
                      type="button"
                      className="checkout-remove"
                      onClick={() =>
                        removeFromCart(
                          item.name,
                          item.size
                        )
                      }
                    >
                      REMOVE
                    </button>

                  </div>


                  {/* ITEM TOTAL */}

                  <div className="checkout-item-total">

                    ₹
                    {(
                      Number(item.price) *
                      item.quantity
                    ).toLocaleString("en-IN")}

                  </div>

                </div>

              ))}

            </div>

          )}

        </section>


        {/* =====================================
            ORDER SUMMARY
        ===================================== */}

        {cartItems.length > 0 && (

          <aside className="checkout-summary">

            <span className="summary-small">
              ORDER SUMMARY
            </span>

            <h2>
              Your Order
            </h2>


            <div className="summary-row">

              <span>
                Products
              </span>

              <span>
                {totalItems}
              </span>

            </div>


            <div className="summary-row">

              <span>
                Subtotal
              </span>

              <span>
                ₹
                {Number(totalPrice)
                  .toLocaleString("en-IN")}
              </span>

            </div>


            <div className="summary-row">

              <span>
                Shipping
              </span>

              <span>
                FREE
              </span>

            </div>


            <div className="summary-line"></div>


            <div className="summary-total">

              <span>
                GRAND TOTAL
              </span>

              <strong>
                ₹
                {Number(totalPrice)
                  .toLocaleString("en-IN")}
              </strong>

            </div>


            <button
              type="button"
              className="payment-btn"
              onClick={() =>
                navigate("/payment")
              }
            >
              PROCEED TO PAYMENT
            </button>


            <button
              type="button"
              className="continue-shopping"
              onClick={() => navigate("/")}
            >
              ← CONTINUE SHOPPING
            </button>

          </aside>

        )}

      </div>

    </main>
  );
}

export default Checkout;