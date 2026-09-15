import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // ADD TO CART
  const addToCart = (product) => {
    setCartItems((prevItems) => {

      const existingProduct = prevItems.find(
        (item) =>
          item.name === product.name &&
          item.size === product.size
      );

      if (existingProduct) {
        return prevItems.map((item) =>
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

      return [
        ...prevItems,
        {
          ...product,
          quantity: product.quantity || 1,
        },
      ];
    });

    // Cart Drawer open hoga
    setCartOpen(true);
  };

  // QUANTITY +
  const increaseQuantity = (name, size) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === name && item.size === size
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // QUANTITY -
  const decreaseQuantity = (name, size) => {
    setCartItems((prevItems) =>
      prevItems
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

  // REMOVE PRODUCT
  const removeFromCart = (name, size) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(item.name === name && item.size === size)
      )
    );
  };

  // TOTAL ITEMS
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // TOTAL PRICE
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
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

// CUSTOM HOOK
export function useCart() {
  return useContext(CartContext);
}