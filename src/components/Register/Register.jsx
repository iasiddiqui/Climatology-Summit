import React, { useState } from "react";
import "./register.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import RegistrationForm from "./RegistrationForm";
import ReactFlagsSelect from "react-flags-select";

function Register() {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [abstractCategory, setAbstractCategory] = useState("");
  const [selected, setSelected] = useState("");

 

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
    
    });
  };

  return (
    <>
      <Navbar />
      <div className="hero-section">
        <img
          className="hero-picture"
          src="public\pictures\awards.jpg"
          alt="Hero"
        />

        <div className="overlay">
          <h1 className="hero-h1">Register</h1>
        </div>
      </div>

      <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2 className="register-title">Personal Details</h2>

          <div className="register-row">
            <div className="register-field">
              <label className="register-label" htmlFor="title">
                Title:
              </label>
              <select
                className="register-select"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              >
                <option value="">Select Any</option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Ms.">Ms.</option>
              </select>
            </div>

            <div className="register-field">
              <label className="register-label" htmlFor="firstName">
                First Name:
              </label>
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
              <label className="register-label" htmlFor="lastName">
                Last Name:
              </label>
              <input
                className="register-input"
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="register-row">
            <div className="register-field">
              <label className="register-label" htmlFor="email">
                Email:
              </label>
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
              <label className="register-label" htmlFor="phoneNumber">
                Phone Number:
              </label>
              <input
                className="register-input"
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          </div>

          <h2 className="register-title">Further Information</h2>

          <div className="register-row country-abstract-row">
            <div className="register-field">
              <label className="register-country">
                Country:
                <ReactFlagsSelect
                  selected={selected}
                  onSelect={(code) => setSelected(code)}
                  placeholder="Select Country"
                  searchable
                  searchPlaceholder="Search countries"
                  className="register-field-country"
                />
              </label>
            </div>

            <div className="register-field">
              <label className="register-label" htmlFor="abstractCategory">
                Abstract Category:
              </label>
              <select
                className="register-abstract-select"
                id="abstractCategory"
                value={abstractCategory}
                onChange={(e) => setAbstractCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="Technology">Poster</option>
                <option value="Science">Oral</option>
                <option value="Delegate">Delegate</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="register-row">
            <div className="register-field">
              <label className="register-label" htmlFor="fullAddress">
                Full Postal Address:
              </label>
              <textarea
                className="register-textarea"
                id="fullAddress"
                value={fullAddress}
                onChange={(e) => setFullAddress(e.target.value)}
              />
            </div>
          </div>
          <RegistrationForm />
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Register;
