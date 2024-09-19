import React from "react";
import "./VenueAttraction.css";
import SimpleSlider from "../HealthConference/Slider";
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

const VenueAttraction = () => {
  return (
    <div className="venue-attraction-container">
      <div className="venue-attraction">
        <h2 className="venue-attraction-h2">Venue Attraction</h2>
        <span className="venue-attraction-span">
          Hotel Services & Amenities
        </span>
        <ul className="venue-attraction-list">
          <li>
            <AttachFileIcon />
            Connecting Rooms
          </li>
          <li>
            <RestaurantIcon /> Breakfast
          </li>
          <li>
            <WifiIcon /> Free WiFi
          </li>
          <li>
            <RoomServiceOutlinedIcon /> Concierge
          </li>
          <li>
            <SmokeFreeOutlinedIcon /> Non-smoking Rooms
          </li>
          <li>
            <KeyOutlinedIcon /> Digital Key
          </li>
          <li>
            <RestaurantMenuOutlinedIcon /> On-site Restaurant
          </li>
          <li>
            <FitnessCenterOutlinedIcon /> Fitness Center
          </li>
          <li>
            <EmailOutlinedIcon /> Express Mail
          </li>
          <li>
            <PetsIcon /> Pet-friendly Rooms
          </li>
          <li>
            <RoomServiceIcon /> Room Service
          </li>
          <li>
            <MeetingRoomIcon /> Meeting Rooms
          </li>
        </ul>
      </div>
      <div className="venue-attraction-simple-slider">
        <SimpleSlider />
      </div>
    </div>
  );
};

export default VenueAttraction;
