// src/components/VenueAttraction/VenueAttraction.jsx
import React from "react";
import "./VenueAttraction.css";
import SimpleSlider from "../HealthConference/Slider";
import { motion } from "framer-motion";

const VenueAttraction = ({ description }) => {
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
        <div className="venue-content">
          <p className="venue-content-p">{description}</p>
        </div>
      </div>
      
      <div className="venue-attraction-simple-slider">
        <SimpleSlider />
      </div>
    </div>
  );
};

export default VenueAttraction;
