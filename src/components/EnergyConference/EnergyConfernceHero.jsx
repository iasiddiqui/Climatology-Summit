import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EnergyHeroData from "./EnergyHeroData";

const EnergyConferenceHero = () => {
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
              {EnergyHeroData.title}
            </h1>
            <p className="conference-hero-p">
              Theme: {EnergyHeroData.theme}
            </p>
          </div>
          <div className="conference-hero-box">
            <CalendarMonthIcon className="conference-icon" />
            <span className="conference-hero-box-span">Dates:</span>
            <span className="conference-hero-box-span1">
              {EnergyHeroData.date}
            </span>
          </div>
          <div className="conference-hero-box">
            <LocationOnIcon className="conference-icon" />
            <span className="conference-hero-box-span">Venue:</span>
            <span className="conference-hero-box-span1">
              {EnergyHeroData.location}
            </span>
          </div>
          <div className="conference-hero-box">
            <NotificationsIcon className="blinking-icon" />
            <span className="blinking">
              {EnergyHeroData.open}
            </span>
          </div>
          <div className="conference-hero-box">
            <NotificationsIcon className="blinking-icon" />
            <span className="blinking">
              {EnergyHeroData.deadline}
            </span>
          </div>
          <div className="conference-hero-box-button">
            {EnergyHeroData.buttons.map((button, index) => (
              <button key={index} className="conference-button">
                {button.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EnergyConferenceHero;
