import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./upcoming.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";
import { conferences } from "./ConferenceData";


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, 
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const UpcomingConference = () => {
  return (
    <motion.div
      className="upcoming-conference"
      initial="hidden"
      whileInView="show" // Animation triggers when in view
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <h1 className="upcoming-conference-h1">Upcoming Conferences</h1>
      <div className="upcoming-conference-container">
        {conferences.map((conference) => (
          <motion.div
            key={conference.id}
            className="upcoming-conference-details"
            variants={cardVariants}
          >
            <Link className="upcoming-conference-link" to={conference.link}>
              <img
                className="upcoming-conference-img"
                src={conference.imageUrl}
                alt={conference.title}
              />
            </Link>
            <Link className="upcoming-conference-link" to={conference.link}>
              <h2 className="upcoming-conference-h2">{conference.title}</h2>
            </Link>
            <p className="upcoming-conference-p">
              <span>
                <CalendarMonthIcon /> {conference.date}
              </span>
              <span>
                <PlaceIcon /> {conference.location}
              </span>
            </p>

            <Link to={conference.registrationLink}>
              <button className="upcoming-conference-button">
                Register Now
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default UpcomingConference;
