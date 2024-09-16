import React from "react";
import "./speaker.css";
import Navbar from "../Navbar/navbar.jsx";
import { speakerGuidelinesData } from "./SpeakerGuidlineData.jsx";
import SpeakerFaqs from "./SpeakerFaqs";
import Footer from "../Home/Footer/Footer";

const SpeakerGuidline = () => {
  return (
    <>
      <Navbar />
      <div className="hero-section">
        <img
          className="hero-picture"
          src="https://img.freepik.com/free-photo/digital-art-with-planet-earth_23-2151064529.jpg?t=st=1726221129~exp=1726224729~hmac=0873f43a7584025bcf333e051cc4f55792f889164a6552bdc0c142ada654dde8&w=1060"
          alt="Hero"
        />
        <div className="overlay">
          <h1 className="home-h1">Speaker Guidelines</h1>
        </div>
      </div>
      <div className="speaker-guidline-content">
        <h2 className="speaker-guidline-h2-heading">Conference Guidelines</h2>
        {speakerGuidelinesData.map((section, index) => (
          <div className="speaker-guidline-content1" key={index}>
            <h2 className="speaker-guidline-h2-content">{section.title}</h2>
            <ul>
              {section.content.map((item, idx) => (
                <li className="speaker-guidline-li" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <SpeakerFaqs />

      <Footer />
    </>
  );
};

export default SpeakerGuidline;
