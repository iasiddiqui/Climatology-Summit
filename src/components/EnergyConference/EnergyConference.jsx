import React from "react";
import Navbar from "../Navbar/Navbar";

import Footer from "../Home/Footer/Footer";
import EnergyConferenceHero from "./EnergyConfernceHero";
import VenueAttraction from "../VenueAttraction/VenueAttraction";
import RegistrationSection from "../RegistrationSection/RegistrationSection";
import MediaPartners from "../Home/MediaPartners/MediaPartners";
import ContactUs from "../ContactUsForm/ContactUs";
import EnergyFaq from "./EnergyFaq";
import AboutConference from "../AboutConference/AboutConference";
import ScientificSessionEnergy from "../ScientificSession/ScientificSessionEnergy";
import { aboutConferenceDataEnergy } from "../AboutConference/AboutConferenceData"; 
import { venueAttractionDataEnergy } from "../VenueAttraction/VenueAttractionData";


const EnergyConference = () => {
  return (
    <div>
      <Navbar />
      <EnergyConferenceHero />
      <AboutConference
        conferenceDetails={aboutConferenceDataEnergy.conferenceDetails}
        aboutConference={aboutConferenceDataEnergy.aboutConference}
      />
      <ScientificSessionEnergy />
      <VenueAttraction description={venueAttractionDataEnergy.description} />
      <RegistrationSection />
      <ContactUs mapUrl={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d40937.88090369958!2d8.676624!3d50.112165!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd096f477096c5%3A0x422435029b0c600!2sFrankfurt%2C%20Germany!5e0!3m2!1sen!2sus!4v1728559437781!5m2!1sen!2sus"}/>
      <MediaPartners />
      <EnergyFaq />
      <Footer />
    </div>
  );
};

export default EnergyConference;
