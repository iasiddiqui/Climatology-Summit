import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/navbar.jsx";
import Footer from "../Home/Footer/Footer.jsx";
const Register = () => {
  return (
    <div>
      <Navbar />
      <div className="hero-section">
        <img
          className="hero-picture"
          src="https://img.freepik.com/free-photo/digital-art-with-planet-earth_23-2151064529.jpg?t=st=1726221129~exp=1726224729~hmac=0873f43a7584025bcf333e051cc4f55792f889164a6552bdc0c142ada654dde8&w=1060"
          alt="Hero"
        />
        <div className="overlay">
          <h1 className="home-h1">Register</h1>
        </div>
      </div>
      <div>
        <h1>coming soon</h1>
      </div>
      <Footer/>
    </div>
  );
};

export default Register;
