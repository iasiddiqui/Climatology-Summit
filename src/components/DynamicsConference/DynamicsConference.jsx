import React from "react";
import "./DynamicsConference.css"
import Navbar from "../Navbar/Navbar";
import DynamicConferenceHero from "./DynamicConferecneHero";
import DynamicsScientificConference from "./DynamicScientific/DynamicScientificSession";
import VenueAttraction from "../VenueAttraction/VenueAttraction";
import RegistrationSection from "../RegistrationSection/RegistrationSection";
import GetInTouch from "../GetInTouch/GetInTouch";
import MediaPartners from "../Home/MediaPartners/MediaPartners";
import ContactUs from "../ContactUsForm/ContactUs";
import DynamicFaq from "./DynamicFaq";
import Footer from "../Home/Footer/Footer";
import AboutConference from "../AboutConference/AboutConference";
import { aboutConferenceDataDynamics } from "../AboutConference/AboutConferenceData"; 
import { venueAttractionDataDynamics } from "../VenueAttraction/VenueAttractionData";


const DynamicsConference = () => {
  return (
    <div>
      <Navbar />
      <DynamicConferenceHero />
      <AboutConference
        conferenceDetails={aboutConferenceDataDynamics.conferenceDetails}
        aboutConference={aboutConferenceDataDynamics.aboutConference}
      />
      <DynamicsScientificConference />
      
      <VenueAttraction description={venueAttractionDataDynamics.description} />
      <RegistrationSection />
      <GetInTouch />
      <ContactUs mapUrl={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57762.91679889274!2d55.268168!3d25.197074!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1728559497957!5m2!1sen!2sus"}/>
      <MediaPartners />
      <DynamicFaq />
      <Footer />
    </div>
  );
};

export default DynamicsConference;
