// src/components/ContactUs/ContactUs.jsx
import React, { useState } from "react";
import "./ContactUs.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactUs = ({ mapUrl }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phoneNumber: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>CONTACT US</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <PhoneInput
            country={"in"}
            value={formData.phoneNumber}
            onChange={handlePhoneChange}
            containerClass="phone-input-container"
            inputProps={{
              name: "phoneNumber",
              required: true,
            }}
          />
          <label>
            Your Message (optional):
            <textarea
              className="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
      <div className="contact-map">
        <iframe
          title="Google Map"
          src={mapUrl} 
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
