import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./register.css";
import Navbar from "../Navbar/navbar.jsx";
import Footer from "../Home/Footer/Footer.jsx";
import PersonalDetails from "./PersonalDetails/PersonalDetails.jsx";
import FurtherInformation from "./PersonalDetails/FurtherInformation.jsx";
import Accommodation from "./Accommodation.jsx";
import PaymentMethod from "./PaymentMethod.jsx";
import RegistrationType from "./RegistrationType.jsx";
const Register = () => {
  return (
    <>
      <Navbar />//
      <div className="hero-section">
        <img
          className="hero-picture"
          src="public\pictures\Spekaer Guidline heroo.jpg"
          alt="Hero"
        />
        <div className="overlay">
          <h1 className="home-h1-event">
           Registration
          </h1>
        </div>
      </div>
      <div>
        <PersonalDetails />
        <FurtherInformation />
        <Accommodation />
        <RegistrationType />
        <PaymentMethod />
      </div>
      <Footer/>
    
    </>
  );
};

export default Register;
