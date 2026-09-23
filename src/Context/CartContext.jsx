import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const CartContext = createContext();

/* =========================================================
   CART STORAGE KEY
========================================================= */

const CART_STORAGE_KEY = "luxuryEcommerceCart";

/* =========================================================
   CART PROVIDER
========================================================= */

export function CartProvider({ children }) {
  /* =======================================================
     CART ITEMS
  ======================================================= */

  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);

      if (!savedCart) {
        return [];
      }

      const parsedCart = JSON.parse(savedCart);

      return Array.isArray(parsedCart) ? parsedCart : [];
    } catch (error) {
      console.error("Cart loading error:", error);
      return [];
    }
  });

  /* =======================================================
     CART DRAWER
  ======================================================= */

  const [cartOpen, setCartOpen] = useState(false);

  /* =======================================================
     SAVE CART TO LOCAL STORAGE
  ======================================================= */

  useEffect(() => {
    try {
      localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(cartItems)
      );
    } catch (error) {
      console.error("Cart saving error:", error);
    }
  }, [cartItems]);

  /* =========================================================
     ADD TO BAG
  ========================================================= */

  const addToCart = (product) => {
    if (!product || !product.name) {
      console.warn("Invalid product passed to addToCart");
      return;
    }

    const productSize = product.size || "Default";
    const productPrice = Number(product.price) || 0;
    const productQuantity = Math.max(
      1,
      Number(product.quantity) || 1
    );

    setCartItems((previousItems) => {
      const existingProduct = previousItems.find(
        (item) =>
          item.name === product.name &&
          (item.size || "Default") === productSize
      );

      /* =====================================================
         SAME PRODUCT + SAME SIZE
         Increase Quantity
      ===================================================== */

      if (existingProduct) {
        return previousItems.map((item) =>
          item.name === product.name &&
          (item.size || "Default") === productSize
            ? {
                ...item,
                price: productPrice,
                quantity:
                  Number(item.quantity || 0) +
                  productQuantity,
              }
            : item
        );
      }

      /* =====================================================
         NEW PRODUCT
      ===================================================== */

      return [
        ...previousItems,
        {
          ...product,
          size: productSize,
          price: productPrice,
          quantity: productQuantity,
        },
      ];
    });

    /* Open Cart Drawer */

    setCartOpen(true);
  };

  /* =========================================================
     INCREASE QUANTITY
  ========================================================= */

  const increaseQuantity = (name, size = "Default") => {
    setCartItems((previousItems) =>
      previousItems.map((item) =>
        item.name === name &&
        (item.size || "Default") === size
          ? {
              ...item,
              quantity: Number(item.quantity || 0) + 1,
            }
          : item
      )
    );
  };

  /* =========================================================
     DECREASE QUANTITY
  ========================================================= */

  const decreaseQuantity = (name, size = "Default") => {
    setCartItems((previousItems) =>
      previousItems
        .map((item) =>
          item.name === name &&
          (item.size || "Default") === size
            ? {
                ...item,
                quantity: Math.max(
                  0,
                  Number(item.quantity || 0) - 1
                ),
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  /* =========================================================
     REMOVE PRODUCT
  ========================================================= */

  const removeFromCart = (
    name,
    size = "Default"
  ) => {
    setCartItems((previousItems) =>
      previousItems.filter(
        (item) =>
          !(
            item.name === name &&
            (item.size || "Default") === size
          )
      )
    );
  };

  /* =========================================================
     CLEAR ENTIRE CART
     Useful after successful payment
  ========================================================= */

  const clearCart = () => {
    setCartItems([]);
    setCartOpen(false);
  };

  /* =========================================================
     TOTAL ITEMS
  ========================================================= */

  const totalItems = useMemo(() => {
    return cartItems.reduce(
      (total, item) =>
        total + Number(item.quantity || 0),
      0
    );
  }, [cartItems]);

  /* =========================================================
     TOTAL PRICE
  ========================================================= */

  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (total, item) =>
        total +
        Number(item.price || 0) *
          Number(item.quantity || 0),
      0
    );
  }, [cartItems]);

  /* =========================================================
     CONTEXT VALUE
  ========================================================= */

  const contextValue = {
    /* Cart */

    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,

    /* Totals */

    totalItems,
    totalPrice,

    /* Drawer */

    cartOpen,
    setCartOpen,
  };

  /* =========================================================
     PROVIDER
  ========================================================= */

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

/* =========================================================
   USE CART HOOK
========================================================= */

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}