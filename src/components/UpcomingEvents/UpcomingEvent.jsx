import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Upcomingevent.css";
import ContactUs from "../ContactUsForm/ContactUs.jsx";
import Footer from "../Home/Footer/Footer.jsx";
import GetInTouch from "../GetInTouch/GetInTouch.jsx";

const UpcomingEvent = () => {
  return (
    <div>
      <Navbar />
      <div className="hero-section">
        <img
          className="hero-picture"
          src="pictures\Spekaer Guidline heroo.jpg"
          alt="Hero"
        />
        <div className="overlay">
          <h1 className="home-h1-event">
            Climate Change and Environmental Science Speakers
          </h1>
        </div>
      </div>
      <div>
        <h1>coming soon</h1>
      </div>
      <GetInTouch />
      <ContactUs />

      <Footer />
    </div>
  );
};

export default UpcomingEvent;
