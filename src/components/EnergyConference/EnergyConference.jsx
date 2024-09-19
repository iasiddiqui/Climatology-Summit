import React from "react";
import Navbar from "../Navbar/navbar";

import Footer from "../Home/Footer/Footer";
import EnergyConferenceHero from "./EnergyConfernceHero";
import ScientificSessions from "../ScientificSession/ScientificSessions";
import VenueAttraction from "../VenueAttraction/VenueAttraction";
import RegistrationSection from "../RegistrationSection/RegistrationSection";
import MediaPartners from "../Home/MediaPartners/MediaPartners";
import ContactUs from "../ContactUsForm/ContactUs";
import EnergyFaq from "./EnergyFaq";

const EnergyConference = () => {
  return (
    <div>
      <Navbar />
      <EnergyConferenceHero />
      <ScientificSessions />
      <VenueAttraction />
      <RegistrationSection />
      <MediaPartners />
      <ContactUs />
      <EnergyFaq />
      <Footer />
    </div>
  );
};

export default EnergyConference;
