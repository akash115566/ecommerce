import React, { useEffect, useMemo, useState } from "react";
import "../Styles/reviews.css";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  // =========================================
  // LOAD REVIEWS
  // =========================================

  useEffect(() => {
    const savedReviews = localStorage.getItem("customerReviews");

    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, []);

  // =========================================
  // SAVE REVIEW
  // =========================================

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !comment.trim()) {
      alert("Please enter your name and review.");
      return;
    }

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      rating: Number(rating),
      comment: comment.trim(),
      date: new Date().toLocaleDateString("en-IN"),
      verified: true,
    };

    const updatedReviews = [
      newReview,
      ...reviews,
    ];

    setReviews(updatedReviews);

    localStorage.setItem(
      "customerReviews",
      JSON.stringify(updatedReviews)
    );

    setName("");
    setRating(5);
    setComment("");
    setShowForm(false);
  };

  // =========================================
  // REVIEW SUMMARY
  // =========================================

  const totalReviews = reviews.length;

  const averageRating = useMemo(() => {
    if (!totalReviews) return "0.0";

    const total = reviews.reduce(
      (sum, review) => sum + Number(review.rating),
      0
    );

    return (total / totalReviews).toFixed(1);
  }, [reviews, totalReviews]);

  const ratingCount = (star) => {
    return reviews.filter(
      (review) => Number(review.rating) === star
    ).length;
  };

  const ratingPercentage = (star) => {
    if (!totalReviews) return 0;

    return Math.round(
      (ratingCount(star) / totalReviews) * 100
    );
  };

  return (
    <section className="reviews-section">

      {/* =====================================
          HEADING
      ===================================== */}

      <div className="reviews-heading">

        <div>
          <span>CUSTOMER REVIEWS</span>

          <h2>
            What our customers say
          </h2>
        </div>

        <button
          type="button"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "CLOSE" : "WRITE A REVIEW"}
        </button>

      </div>


      {/* =====================================
          WRITE REVIEW FORM
      ===================================== */}

      {showForm && (

        <div className="review-form-wrapper">

          <form
            className="review-form"
            onSubmit={handleSubmit}
          >

            <h3>
              Share Your Experience
            </h3>

            <p>
              Tell us about your experience with the product.
            </p>


            {/* NAME */}

            <div className="form-group">

              <label>
                YOUR NAME
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />

            </div>


            {/* RATING */}

            <div className="form-group">

              <label>
                YOUR RATING
              </label>

              <div className="rating-select">

                {[1, 2, 3, 4, 5].map((star) => (

                  <button
                    type="button"
                    key={star}
                    className={
                      star <= rating
                        ? "star-button active"
                        : "star-button"
                    }
                    onClick={() => setRating(star)}
                  >
                    ★
                  </button>

                ))}

              </div>

            </div>


            {/* COMMENT */}

            <div className="form-group">

              <label>
                YOUR REVIEW
              </label>

              <textarea
                rows="5"
                placeholder="Write your review..."
                value={comment}
                onChange={(e) =>
                  setComment(e.target.value)
                }
              />

            </div>


            <button
              type="submit"
              className="submit-review"
            >
              SUBMIT REVIEW
            </button>

          </form>

        </div>

      )}


      {/* =====================================
          SUMMARY
      ===================================== */}

      <div className="review-summary">

        <div className="review-rating">

          <strong>
            {averageRating}
          </strong>

          <div className="stars">

            {totalReviews > 0
              ? "★★★★★"
              : "☆☆☆☆☆"}

          </div>

          <p>
            Based on {totalReviews}{" "}
            {totalReviews === 1
              ? "review"
              : "reviews"}
          </p>

        </div>


        <div className="rating-bars">

          {[5, 4, 3, 2, 1].map((star) => (

            <div
              className="rating-row"
              key={star}
            >

              <span>
                {star}
              </span>

              <div className="rating-bar">

                <div
                  style={{
                    width: `${ratingPercentage(
                      star
                    )}%`,
                  }}
                ></div>

              </div>

              <small>
                {ratingCount(star)}
              </small>

            </div>

          ))}

        </div>

      </div>


      {/* =====================================
          REVIEWS
      ===================================== */}

      <div className="reviews-grid">

        {reviews.length === 0 ? (

          <div className="no-reviews">

            <h3>
              No reviews yet
            </h3>

            <p>
              Be the first customer to share your experience.
            </p>

            <button
              type="button"
              onClick={() => setShowForm(true)}
            >
              WRITE THE FIRST REVIEW
            </button>

          </div>

        ) : (

          reviews.map((review) => (

            <div
              className="review-card"
              key={review.id}
            >

              <div className="review-stars">

                {"★".repeat(review.rating)}

                <span>
                  {"★".repeat(5 - review.rating)}
                </span>

              </div>


              <h3>
                {review.rating === 5
                  ? "Absolutely beautiful"
                  : review.rating === 4
                  ? "Really nice product"
                  : "Good experience"}
              </h3>


              <p>
                "{review.comment}"
              </p>


              <div className="review-customer">

                <strong>
                  {review.name}
                </strong>

                <span>
                  ✓ Verified Customer
                </span>

              </div>


              <small className="review-date">
                {review.date}
              </small>

            </div>

          ))

        )}

      </div>

    </section>
  );
}

export default Reviews;