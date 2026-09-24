import React, { useState, useEffect } from "react";
import "../Styles/leadpopup.css";

const Leadpopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    businessAddress: "",
    contact: "",
    mail: "",
  });

  useEffect(() => {
    const popupShown = sessionStorage.getItem("leadPopupShown");

    if (!popupShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("leadPopupShown", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
*🚀 New Lead - MSME Business Care*

👤 Name: ${formData.name}

🏢 Business Address: ${formData.businessAddress}

📱 Contact: ${formData.contact}

📧 Mail: ${formData.mail}
`;

    // WhatsApp Number
    const whatsappNumber = "917042438293";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");

    setShowPopup(false);

    setFormData({
      name: "",
      businessAddress: "",
      contact: "",
      mail: "",
    });
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">

        {/* CLOSE BUTTON */}
        <button
          className="close-btn"
          onClick={() => setShowPopup(false)}
          type="button"
        >
          ×
        </button>

        {/* HEADING */}
        <h2>🚀 Grow Your Business</h2>

        <p>
          For any type of query, please fill in your details.
        </p>

        <form onSubmit={handleSubmit}>

          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* BUSINESS ADDRESS */}
          <textarea
            name="businessAddress"
            rows="3"
            placeholder="Business Address"
            value={formData.businessAddress}
            onChange={handleChange}
            required
          />

          {/* CONTACT */}
          <input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
          />

          {/* MAIL */}
          <input
            type="email"
            name="mail"
            placeholder="Mail"
            value={formData.mail}
            onChange={handleChange}
            required
          />

          {/* SUBMIT */}
          <button type="submit" className="submit-btn">
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default Leadpopup;