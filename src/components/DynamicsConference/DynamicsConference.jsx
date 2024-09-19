import React from "react";
import "./DynamicsConference.css"
import Navbar from "../Navbar/navbar";
import DynamicConferenceHero from "./DynamicConferecneHero";
import DynamicsScientificConference from "./DynamicScientific/DynamicScientificSession";

const DynamicsConference = () => {
  return (
    <div>
      <Navbar />
      <DynamicConferenceHero />
      <DynamicsScientificConference />
      <div className="dynamic-Conference-container">
        <h1 className="dynamic-Conference-speaker-h1">Our Brilliant Speakers</h1>
        <p className="dynamic-Conference-speaker-p">No team members found</p>
      </div>
    </div>
  );
};

export default DynamicsConference;
