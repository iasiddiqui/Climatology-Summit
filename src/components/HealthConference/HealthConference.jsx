import React from "react";
import Navbar from "../Navbar/navbar";
import "./HealthConference.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const HealthConference = () => {
  return (
    <>
      <Navbar />
      <div className="health-conference">
        <img
          className="health-conference-img"
          src="public\pictures\Climate change.jpg"
        ></img>
        <div className="health-conference-box">
          <div className="health-conference-hero">
            <h1 className="health-conference-hero-h1">
              International Conference on Climate Change and Public Health
            </h1>
            <p className="health-conference-hero-p">
              Theme: Current Trends and Research on Climate Change and Public
              Health
            </p>
          </div>
          <div className="health-conference-hero-box">
            <CalendarMonthIcon />
            <span className="health-conference-hero-box-span">Dates:</span>
            <span className="health-conference-hero-box-span1">
              July 21-22, 2025
            </span>
          </div>
          <div className="health-conference-hero-box">
          <LocationOnIcon />  
            <span className="health-conference-hero-box-span">Dates:</span>
            <span className="health-conference-hero-box-span1">
              July 21-22, 2025
            </span>
          </div>
          <div className="health-conference-hero-box-button">
            <button className="health-conference-button">Register Now</button>
            <button className="health-conference-button">Abstract Submission</button>
            <button className="health-conference-button">Brochure Download</button>
            <button className="health-conference-button">Brochure Download</button>

          </div>
        </div>
      </div>
    </>
  );
};

export default HealthConference;
