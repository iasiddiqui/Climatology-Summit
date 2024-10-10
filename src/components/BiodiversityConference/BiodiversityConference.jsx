import React from "react";
import Navbar from "../Navbar/Navbar";
import BioDiversityHero from "./BiodiversityConferenceHero";
import BioDiversiScientific from "./BiodiversityScientific";
import VenueAttraction from "../VenueAttraction/VenueAttraction";
import RegistrationSection from "../RegistrationSection/RegistrationSection";
import GetInTouch from "../GetInTouch/GetInTouch";
import MediaPartners from "../Home/MediaPartners/MediaPartners";
import ContactUs from "../ContactUsForm/ContactUs";
import Footer from "../Home/Footer/Footer";
import AboutConference from "../AboutConference/AboutConference";
import { aboutConferenceDataBiodiversity} from "../AboutConference/AboutConferenceData"; 
import { venueAttractionDataBioduversity } from "../VenueAttraction/VenueAttractionData";


const BiodiversityConference = () => {
  return (
    <div>
      <Navbar />
      <BioDiversityHero />
      <AboutConference
        conferenceDetails={aboutConferenceDataBiodiversity.conferenceDetails}
        aboutConference={aboutConferenceDataBiodiversity.aboutConference}
      />
      <BioDiversiScientific />
      <VenueAttraction description={venueAttractionDataBioduversity.description} />
      <RegistrationSection />
      <GetInTouch />
      <ContactUs mapUrl={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d38981.2623804173!2d4.904096!3d52.364456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1728559562204!5m2!1sen!2sus"}/>
      <MediaPartners />
      <Footer />
    </div>
  );
};

export default BiodiversityConference;
