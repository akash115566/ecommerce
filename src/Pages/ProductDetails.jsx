import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import "../Styles/productdetails.css";

function ProductDetails() {
  const location = useLocation();

  const { addToCart } = useCart();

  const product = location.state?.product;

  const [selectedSize, setSelectedSize] = useState(
    product?.size || product?.sizes?.[0] || ""
  );

  const [quantity, setQuantity] = useState(1);

  // =========================================
  // PRODUCT IMAGES
  // =========================================

  const productImages = product?.images?.length
    ? product.images
    : [product?.image];

  const [selectedImage, setSelectedImage] = useState(
    productImages[0]
  );

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
      </div>
    );
  }

  // =========================================
  // ADD TO BAG
  // =========================================

  const handleAddToBag = () => {
    addToCart({
      ...product,

      image: selectedImage,

      price: Number(product.price),

      size: selectedSize,

      quantity: quantity,
    });
  };

  // =========================================
  // QUANTITY
  // =========================================

  const increase = () => {
    setQuantity((previous) => previous + 1);
  };

  const decrease = () => {
    setQuantity((previous) =>
      previous > 1 ? previous - 1 : 1
    );
  };

  return (
    <main className="product-details-page">

      <div className="product-details-container">

        {/* =====================================
            LEFT SIDE - IMAGES
        ===================================== */}

        <div className="product-image-section">

          {/* MAIN IMAGE */}

          <div className="product-details-image">

            <img
              src={selectedImage}
              alt={product.name}
            />

          </div>


          {/* =====================================
              THUMBNAIL IMAGES
          ===================================== */}

          <div className="product-thumbnails">

            {productImages.slice(0, 4).map((image, index) => (

              <button
                type="button"
                key={index}
                className={
                  selectedImage === image
                    ? "product-thumbnail active"
                    : "product-thumbnail"
                }
                onClick={() => setSelectedImage(image)}
              >

                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                />

              </button>

            ))}

          </div>

        </div>


        {/* =====================================
            RIGHT SIDE - INFORMATION
        ===================================== */}

        <div className="product-details-info">

          <p className="product-category">
            {product.category}
          </p>

          <h1>
            {product.name}
          </h1>

          <p className="product-description">
            {product.description}
          </p>


          {/* PRICE */}

          <div className="product-price">

            <strong>
              ₹
              {(
                Number(product.price) * quantity
              ).toLocaleString("en-IN")}
            </strong>

            {product.oldPrice && (
              <del>
                ₹
                {(
                  Number(product.oldPrice) * quantity
                ).toLocaleString("en-IN")}
              </del>
            )}

          </div>


          {/* SIZE */}

          {product.sizes?.length > 0 && (

            <div className="size-section">

              <h3>
                SELECT SIZE
              </h3>

              <div className="size-options">

                {product.sizes.map((size) => (

                  <button
                    key={size}
                    type="button"
                    className={
                      selectedSize === size
                        ? "size-btn active"
                        : "size-btn"
                    }
                    onClick={() =>
                      setSelectedSize(size)
                    }
                  >
                    {size}
                  </button>

                ))}

              </div>

            </div>

          )}


          {/* QUANTITY */}

          <div className="quantity-section">

            <h3>
              QUANTITY
            </h3>

            <div className="quantity-box">

              <button
                type="button"
                onClick={decrease}
              >
                −
              </button>

              <span>
                {quantity}
              </span>

              <button
                type="button"
                onClick={increase}
              >
                +
              </button>

            </div>

          </div>


          {/* ADD TO BAG */}

          <button
            type="button"
            className="details-add-bag"
            onClick={handleAddToBag}
          >
            ADD TO BAG
          </button>


          {/* BENEFITS */}

          {product.benefits?.length > 0 && (

            <div className="product-benefits">

              <h3>
                BENEFITS
              </h3>

              <ul>

                {product.benefits.map(
                  (benefit, index) => (

                    <li key={index}>
                      {benefit}
                    </li>

                  )
                )}

              </ul>

            </div>

          )}

        </div>

      </div>

    </main>
  );
}

export default ProductDetails;