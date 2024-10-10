import React from "react";
import "./GreenTechnologyBrochure.css";

import BrochureForm from "./BrochureForm/BrochureForm";
import GetInTouch from "../GetInTouch/GetInTouch";
import Footer from "../Home/Footer/Footer";
import Navbar from "../Navbar/Navbar";

const GreenTechnologyBrochure = ({ title }) => {
  return (
    <>
      <Navbar />
      <div className="brochure-hero">
        <div className="hero-section">
          <img
            className="hero-picture"
            src="https://plus.unsplash.com/premium_photo-1680262688126-bd3f21907a61?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero"
          />
          <div className="overlay">
            <h1 className="brochure-h1">{title}</h1>
            <h3>Feel free to let me know if there’s anything else you need help with!
</h3>
          </div>
        </div>
      </div>
      <BrochureForm />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default GreenTechnologyBrochure;
