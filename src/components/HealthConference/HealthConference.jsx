import React from "react";
import Navbar from "../Navbar/navbar";
import ConferenceDetails from "../ConferenceDetails/ConferenceDetails";
import ScientificSessions from "../ScientificSession/ScientificSessions";
import SimpleSlider from "./Slider";

const HealthConference = () => {
  return (
    <>
      <Navbar />
      <ConferenceDetails />
      <ScientificSessions />
      <div className="venue-attraction-conatiner">
        <div className="venue-attraction">
          <h2 className="venue-attraction-h2">Venue Attraction</h2>
          <span className="venue-attraction-span">
            Hotel Services & Amenities
          </span>
          <ul className="venue-attraction-list">
            {" "}
            {/* Changed <li> to <ul> */}
            <li className="venue-attraction-list">Connecting Rooms</li>
            <li className="venue-attraction-list">Breakfast</li>
            <li className="venue-attraction-list">Free WiFi</li>
            <li className="venue-attraction-list">Concierge</li>
            <li className="venue-attraction-list">Non-smoking Rooms</li>
            <li className="venue-attraction-list">Digital Key</li>
            <li className="venue-attraction-list">On-site Restaurant</li>
            <li className="venue-attraction-list">Fitness Center</li>
            <li className="venue-attraction-list">Express Mail</li>
            <li className="venue-attraction-list">Pet-friendly Rooms</li>
            <li className="venue-attraction-list">Room Service</li>
            <li className="venue-attraction-list">Meeting Rooms</li>
          </ul>{" "}
        </div>
        <div className="venue-attraction-simple-slider">
          <SimpleSlider />
        </div>
      </div>
    </>
  );
};

export default HealthConference;
