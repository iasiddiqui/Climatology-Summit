import React from "react";
import { Link } from "react-router-dom";
import "./upcoming.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";
import { conferences } from "./ConferenceData"; // Import the data

const UpcomingConference = () => {
  return (
    <div className="upcoming-conference">
      <h1 className="upcoming-conference-h1">Upcoming Conferences</h1>
      <div className="upcoming-conference-container">
        {conferences.map((conference) => (
          <div key={conference.id} className="upcoming-conference-details">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingConference;
