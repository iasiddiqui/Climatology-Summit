import React from "react";
import "./DynamicsConference.css"
import Navbar from "../Navbar/navbar";
import DynamicConferenceHero from "./DynamicConferecneHero";
import DynamicsScientificConference from "./DynamicScientific/DynamicScientificSession";
import VenueAttraction from "../VenueAttraction/VenueAttraction";
import RegistrationSection from "../RegistrationSection/RegistrationSection";
import GetInTouch from "../GetInTouch/GetInTouch";
import MediaPartners from "../Home/MediaPartners/MediaPartners";
import ContactUs from "../ContactUsForm/ContactUs";
import DynamicFaq from "./DynamicFaq";
import Footer from "../Home/Footer/Footer";

const DynamicsConference = () => {
  return (
    <div>
      <Navbar />
      <DynamicConferenceHero />
      <DynamicsScientificConference />
      <div className="dynamic-Conference-container">
        <h1 className="dynamic-Conference-speaker-h1">Our Brilliant Speakers</h1>
        <p className="dynamic-Conference-speaker-p">No team members found</p>
      </div>
      <VenueAttraction />
      <RegistrationSection />
      <GetInTouch />
      <MediaPartners />
      <ContactUs />
      <DynamicFaq />
      <Footer />
    </div>
  );
};

export default DynamicsConference;
