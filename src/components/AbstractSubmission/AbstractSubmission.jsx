import React from "react";
import "./AbstractSubmission.css";
import Navbar from "../Navbar/navbar";
import AbstractForm from "./form/AbstractForm";
import GetInTouch from "../GetInTouch/GetInTouch";
import ContactUs from "../ContactUsForm/ContactUs";
import Footer from "../Home/Footer/Footer";


const AbstractSubmission = () => {
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
            <h1 className="abstract-h1">
              Climate Change Abstract Submission Form
            </h1>
            <h1 className="abstract-h3">
              Feel free to let me know if there’s anything else you need help
              with!
            </h1>
          <div className="abstract-hero">
            <span className="abstract-hero-span">Abstract Template</span>
            <button className="abstract-hero-btn">Download Here</button>
          </div>
          </div>
        </div>
        <AbstractForm />
        <GetInTouch />
        <ContactUs />
        <Footer />

    </>
  );
};

export default AbstractSubmission;
