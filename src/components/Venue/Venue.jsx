import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Home/Footer/Footer.jsx";

const Venue = () => {
  return (
    <div className="Venue">
      <Navbar />
      <div className="hero-section">
        <img
          className="hero-picture"
          src="public\pictures\Venue.jpg"
          alt="Hero"
        />
        <div className="overlay">
          <h1 className="home-h1">Venue</h1>
          <h4 className="home-h4">Act Now, Save Tomorrow</h4>
        </div>
      </div>
      <div>
        <h1>coming soon</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Venue;
