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
          src="https://img.freepik.com/free-photo/close-up-people-studying-language-together_23-2149300725.jpg?t=st=1726478016~exp=1726481616~hmac=4c49ee9355a58586e799b29db605ee7ca34161d7855d7c16d31d89c2b9cf4827&w=900"
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
