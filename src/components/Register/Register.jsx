import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/navbar.jsx";
import Footer from "../Home/Footer/Footer.jsx";
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
        <h1>coming soon</h1>
      </div>
      <Footer/>
    
    </>
  );
};

export default Register;
