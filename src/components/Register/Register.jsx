import React, { useState } from "react";
import "./register.css";
import PaymentInfo from "./PaymentMethod/PaymentMethod";

function Register() {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [abstractCategory, setAbstractCategory] = useState("");
  const [registrationType, setRegistrationType] = useState("");
  const [registrationPrice, setRegistrationPrice] = useState(0);
  const [numberOfParticipants, setNumberOfParticipants] = useState(1);
  const [accomodationType, setAccomodationType] = useState("");
  const [accomodationPrice, setAccomodationPrice] = useState(0);
  const [checkinDate, setCheckinDate] = useState("");
  const [paymentType, setPaymentType] = useState("");

  const handleRegistrationTypeChange = (event) => {
    setRegistrationType(event.target.value);
    const priceMap = {
      "speaker-academia": 799,
      "speaker-business": 699,
    };
    setRegistrationPrice(priceMap[event.target.value] || 0);
  };

  const handleAccomodationTypeChange = (event) => {
    setAccomodationType(event.target.value);
    const priceMap = {
      "single-2": 400,
      "single-3": 650,
    };
    setAccomodationPrice(priceMap[event.target.value] || 0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      title,
      firstName,
      lastName,
      email,
      phoneNumber,
      country,
      fullAddress,
      abstractCategory,
      registrationType,
      registrationPrice,
      numberOfParticipants,
      accomodationType,
      accomodationPrice,
      checkinDate,
      paymentType,
    });
  };

  return (
    <div className="register-container">
    <form className="register-form" onSubmit={handleSubmit}>
      <h2 className="register-title">Personal Details</h2>
      <div className="register-field">
        <label className="register-label" htmlFor="title">Title:</label>
        <select className="register-select" id="title" value={title} onChange={(e) => setTitle(e.target.value)}>
          <option value="">Select Any</option>
          <option value="Mr.">Mr.</option>
          <option value="Mrs.">Mrs.</option>
          <option value="Ms.">Ms.</option>
        </select>
      </div>
      <div className="register-field">
        <label className="register-label" htmlFor="firstName">First Name:</label>
        <input
          className="register-input"
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div className="register-field">
        <label className="register-label" htmlFor="lastName">Last Name:</label>
        <input
          className="register-input"
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div className="register-field">
        <label className="register-label" htmlFor="email">Email:</label>
        <input
          className="register-input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="register-field">
        <label className="register-label" htmlFor="phoneNumber">Phone Number:</label>
        <input
          className="register-input"
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>

      <h2 className="register-title">Further Information</h2>
      <div className="register-field">
        <label className="register-label" htmlFor="country">Country:</label>
        <select className="register-select" id="country" value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">Select country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>
      </div>
     
      <div className="register-field">
        <label className="register-label" htmlFor="abstractCategory">Abstract Category:</label>
        <select
          className="register-select"
          id="abstractCategory"
          value={abstractCategory}
          onChange={(e) => setAbstractCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Technology">Technology</option>
          <option value="Science">Science</option>
        </select>
      </div>
      <div className="register-field">
        <label className="register-label" htmlFor="fullAddress">Full Postal Address:</label>
        <textarea
          className="register-textarea"
          id="fullAddress"
          value={fullAddress}
          onChange={(e) => setFullAddress(e.target.value)}
        />
      </div>

      <PaymentInfo />
    </form>
    </div>
  );
}

export default Register;
