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
import { motion } from "framer-motion"; 

const VenueAttraction = () => {
  return (
    <div className="venue-attraction-container">
      <div className="venue-attraction">
        {/* Header with animation */}
        <motion.h2 
          className="venue-attraction-h2" 
          initial={{ y: -50, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: true }} 
        >
          Venue Attraction
        </motion.h2>
        
        <motion.span 
          className="venue-attraction-span" 
          initial={{ y: -50, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.3 }} 
          viewport={{ once: true }} 
        >
          Hotel Services & Amenities
        </motion.span>

        <ul className="venue-attraction-list">
          {[
            { icon: <AttachFileIcon />, text: "Connecting Rooms" },
            { icon: <RestaurantIcon />, text: "Breakfast" },
            { icon: <WifiIcon />, text: "Free WiFi" },
            { icon: <RoomServiceOutlinedIcon />, text: "Concierge" },
            { icon: <SmokeFreeOutlinedIcon />, text: "Non-smoking Rooms" },
            { icon: <KeyOutlinedIcon />, text: "Digital Key" },
            { icon: <RestaurantMenuOutlinedIcon />, text: "On-site Restaurant" },
            { icon: <FitnessCenterOutlinedIcon />, text: "Fitness Center" },
            { icon: <EmailOutlinedIcon />, text: "Express Mail" },
            { icon: <PetsIcon />, text: "Pet-friendly Rooms" },
            { icon: <RoomServiceIcon />, text: "Room Service" },
            { icon: <MeetingRoomIcon />, text: "Meeting Rooms" },
          ].map((item, index) => (
            <motion.li 
              key={index} 
              initial={{ x: -50, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }} 
            >
              {item.icon} {item.text}
            </motion.li>
          ))}
        </ul>
      </div>
      
      <div className="venue-attraction-simple-slider">
        <SimpleSlider />
      </div>
    </div>
  );
};

export default VenueAttraction;
