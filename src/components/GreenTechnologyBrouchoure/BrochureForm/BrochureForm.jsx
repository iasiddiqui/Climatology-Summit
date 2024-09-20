import React, { useState } from "react";
import "./BrochureForm.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const BrochureForm = () => {
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
    <div className="brochure-container">
      <div className="brochure-form">
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
          <label>
            Phone Number:
            <PhoneInput
              country={"in"}
              value={formData.phoneNumber}
              onChange={handlePhoneChange}
              inputProps={{
                name: "phoneNumber",
                required: true,
              }}
            />
          </label>
          <label>
            Message Us:
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
    </div>
  );
};

export default BrochureForm;
