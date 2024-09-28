import React from "react";
import "./AboutConference.css";
import {
  CalendarMonth,
  Place,
  CloudDownload,
  Bookmark,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import aboutConferenceData from "./AboutConferenceData";
import { motion } from "framer-motion";

const AboutConference = () => {
  const { conferenceDetails, aboutConference } = aboutConferenceData;

  return (
    <div className="conference-page">
      <section className="details-section">
        <div className="details-cards">
          <motion.div
            className="card conference-details"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            viewport={{ once: true }} 
          >
            <img
              src="pictures/upcoming img 1.jpg"
              alt="Conference Details"
            />
            <div className="card-content">
              <h3>Conference Details</h3>
              <div className="info">
                <CalendarMonth />
                <p className="about-conference-date">
                  Dates: <strong>{conferenceDetails.date}</strong>
                </p>
              </div>
              <div className="info">
                <Place />
                <p className="about-conference-date">
                  Venue: <strong>{conferenceDetails.venue}</strong>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="card brochure-download"
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }} 
            viewport={{ once: true }} 
          >
            <img
              src="pictures/upcoming img 2.jpg"
              alt="Brochure Download"
            />
            <div className="card-content">
              <CloudDownload />
              <h3>Brochure Download</h3>
              <Link to="/green-technologies-brochure">
                <button>Download Here</button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="card program-download"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src="pictures/upcoming img 3.jpg"
              alt="Tentative Program"
            />
            <div className="card-content">
              <Bookmark />
              <h3>Tentative Program</h3>
              <a href={conferenceDetails.programDownloadLink} download>
                <button>Download Here</button>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="card speaker-guidelines"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="pictures/upcoming img 4.jpg"
              alt="Speaker Guidelines"
            />
            <div className="card-content">
              <Bookmark />
              <h3>Speaker Guidelines</h3>
              <Link to="/speaker-guidline">
                <button>Download Here</button>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-conference"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="about-conference-h2">{aboutConference.title}</h2>
          <p className="about-conference-p">{aboutConference.description}</p>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutConference;
