import React from "react";
import "./HealthConference.css";
import Navbar from "../Navbar/navbar";
import HealthConferenceDetails from "../ConferenceDetails/ConferenceDetails";
import ScientificSessions from "../ScientificSession/ScientificSessions";
import GetInTouch from "../GetInTouch/GetInTouch";
import RegistrationSection from "../RegistrationSection/RegistrationSection";
import MediaPartners from "../Home/MediaPartners/MediaPartners";
import ContactUs from "../ContactUsForm/ContactUs";
import Footer from "../Home/Footer/Footer";
import HealthConferenceFaq from "./HealthConferenceFaq";
import VenueAttraction from "../VenueAttraction/VenueAttraction";

const HealthConference = () => {
  return (
    <>
      <Navbar />
      <HealthConferenceDetails />
      <ScientificSessions />
      <VenueAttraction />
      <RegistrationSection />
      <GetInTouch />
      <MediaPartners />
      <ContactUs />
      <HealthConferenceFaq />
      <Footer />
    </>
  );
};

export default HealthConference;
