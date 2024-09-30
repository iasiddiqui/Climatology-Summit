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

const EnergyConference = () => {
  return (
    <div>
      <Navbar />
      <EnergyConferenceHero />
      <AboutConference />
      <ScientificSessionEnergy />
      <VenueAttraction />
      <RegistrationSection />
      <ContactUs />
      <MediaPartners />
      <EnergyFaq />
      <Footer />
    </div>
  );
};

export default EnergyConference;
