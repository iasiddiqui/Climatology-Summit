import React from "react";
import Navbar from "../Navbar/navbar";
import BioDiversityHero from "./BiodiversityConferenceHero";
import BioDiversiScientific from "./BiodiversityScientific";
import VenueAttraction from "../VenueAttraction/VenueAttraction";
import RegistrationSection from "../RegistrationSection/RegistrationSection";
import GetInTouch from "../GetInTouch/GetInTouch";
import MediaPartners from "../Home/MediaPartners/MediaPartners";
import ContactUs from "../ContactUsForm/ContactUs";
import Footer from "../Home/Footer/Footer";

const BiodiversityConference = () => {
  return (
    <div>
      <Navbar />
      <BioDiversityHero />
      <BioDiversiScientific />
      <VenueAttraction />
      <RegistrationSection />
      <GetInTouch />
      <MediaPartners />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default BiodiversityConference;
