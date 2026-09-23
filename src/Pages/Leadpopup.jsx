import React, { useState, useEffect } from "react";
import "../Styles/leadpopup.css";


const Leadpopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    business: "",
    message: "",
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
📱 Mobile: ${formData.mobile}
📧 Email: ${formData.email}
🏢 Business: ${formData.business}
📝 Message: ${formData.message}
`;

    // Apna WhatsApp Number
    const whatsappNumber = "917042438293";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");

    setShowPopup(false);

    setFormData({
      name: "",
      mobile: "",
      email: "",
      business: "",
      message: "",
    });
  };

  if (!showPopup) return null;

  return (
    <>
   
    
   
    <div className="popup-overlay">
      <div className="popup-container">

        <button
          className="close-btn"
          onClick={() => setShowPopup(false)}
        >
          ×
        </button>

        <h2>🚀 Grow Your Business</h2>

        <p>
         Contact us for enquiries and bookings
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="business"
            placeholder="Business Name"
            value={formData.business}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Tell us about your business"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn">
            Get Free Consultation
          </button>

        </form>
      </div>
    </div>
     </>
  );
};

export default Leadpopup;