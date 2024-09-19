import React from "react";
import Navbar from "../Navbar/navbar";

import Footer from "../Home/Footer/Footer";
import EnergyConferenceHero from "./EnergyConfernceHero";

const EnergyConference = () => {
  return (
    <div>
      <Navbar />
      <EnergyConferenceHero />
      <Footer />
    </div>
  );
};

export default EnergyConference;
