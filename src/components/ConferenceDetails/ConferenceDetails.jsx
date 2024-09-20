import React from "react";
import "./ConferenceDetails.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ConferenceData from "./ConferenceData";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom"; // Import Link

const HealthConferenceDetails = () => {
  return (
    <>
      <div className="conference">
        <img
          className="conference-img"
          src="/pictures/Climate change.jpg"
          alt="Climate Change"
        />
        <div className="conference-box">
          <div className="conference-hero">
            <h1 className="conference-hero-h1">
              {ConferenceData.title}
            </h1>
            <p className="conference-hero-p">
              Theme: {ConferenceData.theme}
            </p>
          </div>
          <div className="conference-hero-box">
            <CalendarMonthIcon className="conference-icon" />
            <span className="conference-hero-box-span">Dates:</span>
            <span className="conference-hero-box-span1">
              {ConferenceData.date}
            </span>
          </div>
          <div className="conference-hero-box">
            <LocationOnIcon className="conference-icon" />
            <span className="conference-hero-box-span">Venue:</span>
            <span className="conference-hero-box-span1">
              {ConferenceData.location}
            </span>
          </div>
          <div className="conference-hero-box">
            <NotificationsIcon className="blinking-icon" />
            <span className="blinking">
              {ConferenceData.deadline}
            </span>
          </div>
          <div className="conference-hero-box-button">
            {ConferenceData.buttons.map((button, index) => (
              button.link ? (
                <Link key={index} to={button.link}>
                  <button className="conference-button">
                    {button.text}
                  </button>
                </Link>
              ) : (
                <button key={index} className="conference-button" disabled>
                  {button.text}
                </button>
              )
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthConferenceDetails;
