import React from "react";
import "./HealthConference.css";
import Navbar from "../Navbar/navbar";
import ConferenceDetails from "../ConferenceDetails/ConferenceDetails";
import ScientificSessions from "../ScientificSession/ScientificSessions";
import SimpleSlider from "./Slider";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import WifiIcon from "@mui/icons-material/Wifi";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import RoomServiceOutlinedIcon from "@mui/icons-material/RoomServiceOutlined";
import SmokeFreeOutlinedIcon from "@mui/icons-material/SmokeFreeOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PetsIcon from "@mui/icons-material/Pets";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import GetInTouch from "../GetInTouch/GetInTouch";
import RegistrationSection from "../RegistrationSection/RegistrationSection";
import MediaPartners from "../Home/MediaPartners/MediaPartners";
import ContactUs from "../ContactUsForm/ContactUs";
import Footer from "../Home/Footer/Footer";
import HealthConferenceFaq from "./HealthConferenceFaq";

const HealthConference = () => {
  return (
    <>
      <Navbar />
      <ConferenceDetails />
      <ScientificSessions />
      <div className="venue-attraction-conatiner">
        <div className="venue-attraction">
          <h2 className="venue-attraction-h2">Venue Attraction</h2>
          <span className="venue-attraction-span">
            Hotel Services & Amenities
          </span>
          <ul className="venue-attraction-list">
            {" "}
            {/* Changed <li> to <ul> */}
            <li className="venue-attraction-list">
              <AttachFileIcon />
              Connecting Rooms
            </li>
            <li className="venue-attraction-list">
              <RestaurantIcon /> Breakfast
            </li>
            <li className="venue-attraction-list">
              <WifiIcon /> Free WiFi
            </li>
            <li className="venue-attraction-list">
              <RoomServiceOutlinedIcon /> Concierge
            </li>
            <li className="venue-attraction-list">
              <SmokeFreeOutlinedIcon /> Non-smoking Rooms
            </li>
            <li className="venue-attraction-list">
              <KeyOutlinedIcon /> Digital Key
            </li>
            <li className="venue-attraction-list">
              <RestaurantMenuOutlinedIcon /> On-site Restaurant
            </li>
            <li className="venue-attraction-list">
              <FitnessCenterOutlinedIcon /> Fitness Center
            </li>
            <li className="venue-attraction-list">
              <EmailOutlinedIcon /> Express Mail
            </li>
            <li className="venue-attraction-list">
              <PetsIcon /> Pet-friendly Rooms
            </li>
            <li className="venue-attraction-list">
              <RoomServiceIcon /> Room Service
            </li>
            <li className="venue-attraction-list">
              <MeetingRoomIcon /> Meeting Rooms
            </li>
          </ul>{" "}
        </div>
        <div className="venue-attraction-simple-slider">
          <SimpleSlider />
        </div>
      </div>
      <RegistrationSection />
      <GetInTouch />
    <MediaPartners />
    <ContactUs />
    <HealthConferenceFaq/>
    <Footer />
    
  
    </>
  );
};

export default HealthConference;
