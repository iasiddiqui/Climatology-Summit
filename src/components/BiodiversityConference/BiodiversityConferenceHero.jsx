import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BioDiversityHeroData from "./BiodiversityConferenceHeroData";

const BioDiversityHero = () => {
  return (
    <div className="conference">
      <img
        className="conference-img"
        src="/pictures/Climate change.jpg"
        alt="Climate Change"
      />
      <div className="conference-box">
        <div className="conference-hero">
          <h1
            className="conference-hero-h1"
            dangerouslySetInnerHTML={{ __html: BioDiversityHeroData.title }}
          />
          <p
            className="conference-hero-p"
            dangerouslySetInnerHTML={{ __html: BioDiversityHeroData.theme }}
          />
        </div>
        <div className="conference-hero-box">
          <CalendarMonthIcon className="conference-icon" />
          <span className="conference-hero-box-span">Dates:</span>
          <span className="conference-hero-box-span1">
            {BioDiversityHeroData.date}
          </span>
        </div>
        <div className="conference-hero-box">
          <LocationOnIcon className="conference-icon" />
          <span className="conference-hero-box-span">Venue:</span>
          <span className="conference-hero-box-span1">
            {BioDiversityHeroData.location}
          </span>
        </div>
        <div className="conference-hero-box">
          <NotificationsIcon className="blinking-icon" />
          <span className="blinking">{BioDiversityHeroData.open}</span>
        </div>
        <div className="conference-hero-box">
          <NotificationsIcon className="blinking-icon" />
          <span className="blinking">{BioDiversityHeroData.deadline}</span>
        </div>
        <div className="conference-hero-box-button">
          {BioDiversityHeroData.buttons.map((button, index) => (
            <button key={index} className="conference-button">
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BioDiversityHero;
