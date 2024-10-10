import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DynamicHeroData from "./DynamicHeroData";
import { Link } from "react-router-dom";
const DynamicConferenceHero = () => {
  return (
    <div className="conference">
      <img
        className="conference-img"
        src="pictures/Ocean Health and Climate Dynamics.avif"
        alt="Climate Change"
      />
      <div className="conference-box">
        <div className="conference-hero">
          <h1
            className="conference-hero-h1"
            dangerouslySetInnerHTML={{ __html: DynamicHeroData.title }}
          />
          <p
            className="conference-hero-p"
            dangerouslySetInnerHTML={{ __html: DynamicHeroData.theme }}
          />
        </div>
        <div className="conference-hero-box">
          <CalendarMonthIcon className="conference-icon" />
          <span className="conference-hero-box-span">Dates:</span>
          <span className="conference-hero-box-span1">
            {DynamicHeroData.date}
          </span>
        </div>
        <div className="conference-hero-box">
          <LocationOnIcon className="conference-icon" />
          <span className="conference-hero-box-span">Venue:</span>
          <span className="conference-hero-box-span1">
            {DynamicHeroData.location}
          </span>
        </div>
        <div className="conference-hero-box">
          <NotificationsIcon className="blinking-icon" />
          <span className="blinking">{DynamicHeroData.open}</span>
        </div>
        <div className="conference-hero-box">
          <NotificationsIcon className="blinking-icon" />
          <span className="blinking">{DynamicHeroData.deadline}</span>
        </div>

        <div className="conference-hero-box-button">
          {DynamicHeroData.buttons.map((button, index) =>
            button.isPDF ? (
              <a
                key={index}
                href={button.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="conference-button">{button.text}</button>
              </a>
            ) : button.link ? (
              <Link key={index} to={button.link}>
                <button className="conference-button">{button.text}</button>
              </Link>
            ) : (
              <button key={index} className="conference-button" disabled>
                {button.text}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default DynamicConferenceHero;
