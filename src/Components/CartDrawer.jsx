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


  const goToCheckout = () => {
    onClose();
    navigate("/checkout");
  };


  return (
    <>
      {isOpen && (
        <div
          className="cart-overlay"
          onClick={onClose}
        ></div>
      )}


      <aside
        className={`cart-drawer ${
          isOpen
            ? "cart-drawer-open"
            : ""
        }`}
      >

        {/* HEADER */}

        <div className="cart-header">

          <h2>
            YOUR BAG
          </h2>

          <button
            type="button"
            className="cart-close"
            onClick={onClose}
          >
            ×
          </button>

        </div>


        {/* OFFER */}

        <div className="cart-offer">

          <h3>
            AVAILABLE OFFERS
          </h3>

          <p>
            Shop for ₹12,999+ to avail a
            complimentary limited-edition Tote Bag.
          </p>

        </div>


        {/* BAG COUNT */}

        <div className="bag-title">

          <h2>
            YOUR BAG
          </h2>

          <span>
            {totalItems}{" "}
            {totalItems === 1
              ? "ITEM"
              : "ITEMS"}
          </span>

        </div>


        {/* PRODUCTS */}

        <div className="cart-products">

          {cartItems.length === 0 ? (

            <div className="empty-cart">

              <h3>
                Your Bag is Empty
              </h3>

              <p>
                Add some products to continue.
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


                {/* INFO */}

                <div className="cart-product-info">

                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    {item.size}
                  </p>


                  <strong>
                    ₹
                    {Number(item.price)
                      .toLocaleString("en-IN")}
                  </strong>


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


                  {/* ITEM TOTAL */}

                  <div className="cart-item-total">

                    ₹
                    {(
                      Number(item.price) *
                      item.quantity
                    ).toLocaleString("en-IN")}

                  </div>

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


        {/* FOOTER */}

        {cartItems.length > 0 && (

          <div className="cart-footer">

            <div className="cart-total">

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
              className="go-to-bag"
              onClick={goToCheckout}
            >
              VIEW BAG & CHECKOUT
            </button>

          </div>

        )}

      </aside>
    </>
  );
}

export default CartDrawer;