import React, { useState } from "react";
import "../Styles/review.css";

const defaultReviews = [
  {
    name: "Beatrix ",
    location: "UK",
    rating: 5,
    comment:
      "I have been using this product for a few weeks and absolutely love the texture. My skin feels soft, hydrated and fresh after every use.",
    image: "/home/girl.jfif",
  },

  {
    name: "Sophia",
    location: "USA",
    rating: 5,
    comment:
      "The fragrance is beautiful and the overall experience feels very luxurious. It has become a part of my daily skincare ritual.",
    image: "/home/girlad.jfif",
  },

  {
    name: "Elena",
    location: "Russia",
    rating: 4,
    comment:
      "I really enjoyed using this product. It feels gentle on the skin and gives a lovely refreshing feeling without being heavy.",
    image: "/home/girladd.jfif",
  },

  {
    name: "Amara",
    location: "Italy",
    rating: 5,
    comment:
      "The quality feels premium and the packaging is beautiful. I especially liked how nourished my skin felt after regular use.",
    image: "/home/girladdd.jfif",
  },

  {
    name: "Chloe",
    location: "France",
    rating: 5,
    comment:
      "The rose-infused feel is amazing. My skin feels comfortable, hydrated and naturally fresh. Definitely something I enjoy using every day.",
    image: "/home/girlaad.jfif",
  },

  {
    name: "Zeynep",
    location: "UK",
    rating: 5,
    comment:
      "A beautiful Ayurvedic-inspired experience. The product feels soothing and luxurious, and I really like the subtle natural fragrance.",
    image: "/home/girlaadd.jfif",
  },
];

function ReviewsSection() {
  const [reviews, setReviews] = useState(defaultReviews);

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    rating: 0,
    comment: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRating = (rating) => {
    setFormData({
      ...formData,
      rating,
    });
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!formData.rating) {
      alert("Please select your rating.");
      return;
    }

    if (!formData.comment.trim()) {
      alert("Please write your review.");
      return;
    }

    const newReview = {
      name: formData.name,
      location: formData.location || "India",
      rating: formData.rating,
      comment: formData.comment,
      image: "/home/girl.jfif",
    };

    setReviews((previousReviews) => [
      newReview,
      ...previousReviews,
    ]);

    setFormData({
      name: "",
      location: "",
      rating: 0,
      comment: "",
    });

    setShowForm(false);

    alert("Thank you! Your review has been submitted.");
  };

  return (
    <section className="ingredients-section">

      {/* =====================================================
          LEFT TITLE
      ====================================================== */}

      <div className="ingredients-title">

        <span>WHAT OUR CUSTOMERS SAY</span>

        <h2>
          Real experiences,
          <br />
          real rituals
        </h2>

        <p>
          Discover what our customers have to say about
          their experience with our Ayurvedic beauty rituals.
        </p>

        <button
          type="button"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "CLOSE REVIEW" : "WRITE A REVIEW"}
        </button>

      </div>


      {/* =====================================================
          REVIEW FORM
      ====================================================== */}

      {showForm && (

        <div className="review-form-box">

          <div className="review-form-heading">

            <span>SHARE YOUR EXPERIENCE</span>

            <h3>
              Tell us about your
              <br />
              beauty ritual
            </h3>

          </div>


          <form onSubmit={handleSubmitReview}>

            {/* NAME */}

            <div className="review-form-row">

              <div className="review-input-group">

                <label>
                  YOUR NAME
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                />

              </div>


              {/* LOCATION */}

              <div className="review-input-group">

                <label>
                  LOCATION
                </label>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Delhi, India"
                />

              </div>

            </div>


            {/* RATING */}

            <div className="review-rating-input">

              <label>
                YOUR RATING
              </label>

              <div className="rating-select">

                {[1, 2, 3, 4, 5].map((star) => (

                  <button
                    key={star}
                    type="button"
                    className={
                      star <= formData.rating
                        ? "rating-star active"
                        : "rating-star"
                    }
                    onClick={() => handleRating(star)}
                  >
                    ★
                  </button>

                ))}

                {formData.rating > 0 && (

                  <span className="rating-number">
                    {formData.rating}/5
                  </span>

                )}

              </div>

            </div>


            {/* COMMENT */}

            <div className="review-input-group">

              <label>
                YOUR REVIEW
              </label>

              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                placeholder="Write about your experience..."
                rows="5"
              />

            </div>


            {/* SUBMIT */}

            <button
              type="submit"
              className="submit-review-btn"
            >
              SUBMIT REVIEW
            </button>

          </form>

        </div>

      )}


      {/* =====================================================
          REVIEWS GRID
      ====================================================== */}

      <div className="ingredients-grid">

        {reviews.map((review, index) => (

          <div
            className="ingredient-card review-card"
            key={index}
          >

            {/* CUSTOMER IMAGE */}

            <div className="ingredient-image review-image">

              <img
                src={review.image}
                alt={review.name}
              />

            </div>


            {/* STARS */}

            <div className="review-stars">

              {"★".repeat(review.rating)}

              <span className="empty-stars">
                {"☆".repeat(5 - review.rating)}
              </span>

            </div>


            {/* COMMENT */}

            <p className="review-comment">
              "{review.comment}"
            </p>


            <div className="ingredient-line"></div>


            {/* CUSTOMER */}

            <h3>
              {review.name}
            </h3>

            <span className="review-location">
              {review.location}
            </span>


            {/* VERIFIED */}

            <span className="verified-review">
              ✓ CUSTOMER REVIEW
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default ReviewsSection;