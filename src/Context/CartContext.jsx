import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  /* =========================================
     ADD TO BAG
  ========================================= */

  const addToCart = (product) => {
    setCartItems((previousItems) => {
      const existingProduct = previousItems.find(
        (item) =>
          item.name === product.name &&
          item.size === product.size
      );

      /* Same product + same size = quantity increase */

      if (existingProduct) {
        return previousItems.map((item) =>
          item.name === product.name &&
          item.size === product.size
            ? {
                ...item,
                quantity:
                  item.quantity + (product.quantity || 1),
              }
            : item
        );
      }

      /* New product */

      return [
        ...previousItems,
        {
          ...product,
          price: Number(product.price),
          quantity: product.quantity || 1,
        },
      ];
    });

    /* Open side bag */

    setCartOpen(true);
  };


  /* =========================================
     INCREASE QUANTITY
  ========================================= */

  const increaseQuantity = (name, size) => {
    setCartItems((previousItems) =>
      previousItems.map((item) =>
        item.name === name && item.size === size
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };


  /* =========================================
     DECREASE QUANTITY
  ========================================= */

  const decreaseQuantity = (name, size) => {
    setCartItems((previousItems) =>
      previousItems
        .map((item) =>
          item.name === name && item.size === size
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };


  /* =========================================
     REMOVE PRODUCT
  ========================================= */

  const removeFromCart = (name, size) => {
    setCartItems((previousItems) =>
      previousItems.filter(
        (item) =>
          !(
            item.name === name &&
            item.size === size
          )
      )
    );
  };


  /* =========================================
     TOTAL ITEMS
  ========================================= */

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );


  /* =========================================
     GRAND TOTAL
  ========================================= */

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total +
      Number(item.price) * item.quantity,
    0
  );


  return (
    <CartContext.Provider
      value={{
        cartItems,

        addToCart,

        increaseQuantity,
        decreaseQuantity,
        removeFromCart,

        totalItems,
        totalPrice,

        cartOpen,
        setCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}


export function useCart() {
  return useContext(CartContext);
}