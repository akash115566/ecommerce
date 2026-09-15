import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import "../Styles/cartdrawer.css";

function CartDrawer({ isOpen, onClose }) {
  const navigate = useNavigate();

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalItems,
    totalPrice,
  } = useCart();

  // CHECKOUT
  const goToCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  return (
    <>
      {/* ================= OVERLAY ================= */}

      {isOpen && (
        <div
          className="cart-overlay"
          onClick={onClose}
        ></div>
      )}


      {/* ================= DRAWER ================= */}

      <aside
        className={`cart-drawer ${
          isOpen ? "cart-drawer-open" : ""
        }`}
      >

        {/* ================= HEADER ================= */}

        <div className="cart-header">

          <h2>
            Your Bag
          </h2>

          <button
            className="cart-close"
            onClick={onClose}
          >
            ×
          </button>

        </div>


        {/* ================= OFFERS ================= */}

        <div className="cart-offer">

          <h3>
            Available Offers
          </h3>

          <p>
            Shop for ₹12,999+ to avail a complimentary
            limited-edition Tote Bag worth ₹895.
          </p>

          <button type="button">
            SHOW MORE →
          </button>

        </div>


        {/* ================= POINTS ================= */}

        <div className="cart-points">

          ✨ Earn upto <strong>242</strong> points
          with your purchase today.

          <br />

          <span>
            SIGN IN OR JOIN SOUNDARYA CLUB
          </span>

        </div>


        {/* ================= BAG TITLE ================= */}

        <div className="bag-title">

          <h2>
            Your Bag
          </h2>

          <span>
            {totalItems}{" "}
            {totalItems === 1 ? "item" : "items"}
          </span>

        </div>


        {/* ================= PRODUCTS ================= */}

        <div className="cart-products">

          {cartItems.length === 0 ? (

            <div className="empty-cart">

              <p>
                Your bag is empty.
              </p>

            </div>

          ) : (

            cartItems.map((item, index) => (

              <div
                className="cart-product"
                key={`${item.name}-${item.size}-${index}`}
              >

                {/* IMAGE */}

                <div className="cart-product-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                </div>


                {/* DETAILS */}

                <div className="cart-product-info">

                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    {item.size}
                  </p>


                  {/* QUANTITY */}

                  <div className="cart-quantity">

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


                  {/* PRICE */}

                  <strong>
                    ₹
                    {(
                      Number(item.price) *
                      item.quantity
                    ).toLocaleString("en-IN")}
                  </strong>

                </div>


                {/* REMOVE */}

                <button
                  type="button"
                  className="remove-product"
                  onClick={() =>
                    removeFromCart(
                      item.name,
                      item.size
                    )
                  }
                >
                  ×
                </button>

              </div>

            ))

          )}

        </div>


        {/* ================= FOOTER ================= */}

        {cartItems.length > 0 && (

          <div className="cart-footer">

            <div className="cart-total">

              <strong>
                Total
              </strong>

              <strong>
                ₹
                {Number(totalPrice).toLocaleString(
                  "en-IN"
                )}
              </strong>

            </div>


            {/* CHECKOUT */}

            <button
              className="go-to-bag"
              onClick={goToCheckout}
            >
              CHECKOUT
            </button>

          </div>

        )}

      </aside>
    </>
  );
}

export default CartDrawer;