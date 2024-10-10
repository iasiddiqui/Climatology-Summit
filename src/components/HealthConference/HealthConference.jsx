// src/components/HealthConference/HealthConference.jsx
import React from "react";
import "./HealthConference.css";
import Navbar from "../Navbar/Navbar";
import HealthConferenceDetails from "../ConferenceDetails/ConferenceDetails";
import ScientificSessions from "../ScientificSession/ScientificSessions";
import GetInTouch from "../GetInTouch/GetInTouch";
import RegistrationSection from "../RegistrationSection/RegistrationSection";
import MediaPartners from "../Home/MediaPartners/MediaPartners";
import ContactUs from "../ContactUsForm/ContactUs";
import Footer from "../Home/Footer/Footer";
import HealthConferenceFaq from "./HealthConferenceFaq";
import VenueAttraction from "../VenueAttraction/VenueAttraction";
import AboutConference from "../AboutConference/AboutConference";
import {aboutConferenceDataHealth} from "../AboutConference/AboutConferenceData"; 
import { venueAttractionDataHealth } from "../VenueAttraction/VenueAttractionData";
const HealthConference = () => {
  return (
    <>
      <Navbar />
      <HealthConferenceDetails />
      <AboutConference
        conferenceDetails={aboutConferenceDataHealth.conferenceDetails}
        aboutConference={aboutConferenceDataHealth.aboutConference}
      />
      <ScientificSessions />
      <VenueAttraction description={venueAttractionDataHealth.description} />
      <RegistrationSection />
      <GetInTouch />
      <ContactUs mapUrl={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d41647.75024497684!2d-123.121502!3d49.276693!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sus!4v1728559339499!5m2!1sen!2sus"}/>
      <MediaPartners />
      <HealthConferenceFaq />
      <Footer />
    </>
  );
};

export default HealthConference;
