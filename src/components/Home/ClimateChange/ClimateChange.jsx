import React from "react";
import "./climate.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const ClimateChange = () => {
  return (
    <div className="Climate-Change-main">
      <h1 className="Climate-Change-h1">Why Climate Change</h1>

      <p className="Climate-Change-p">
        Climate Change conference is designed to provide its attendees with an
        enriching experience that will enhance their academic work and an
        opportunity to collaborate and network with peers.
      </p>

      <div className="Climate-Change-content">
        <img
          className="Climate-Change-img"
          src="pictures/green_earth.png"
          alt="Climate Change"
        />

        <div className="Climate-Change-content-p">
          {/* Content items with icons */}
          {[
            "Present your research, receive feedback from your peers, and get published in prestigious academic journals.",
            "Take the next step in your academic career by identifying new research opportunities and partners.",
            "Join the network of academics and help define the future of the field.",
            "Discover the beauty of Amsterdam and indulge in local cuisines."
          ].map((text, index) => (
            <div className="Climate-Change-content-item" key={index}>
              <div>
                <KeyboardDoubleArrowRightIcon />
              </div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Target Audience Section */}
      <div className="target-audience">
        <h1 className="target-audience-h1">Target Audience</h1>
        <div className="target-audience-content">
          <div className="target-audience-text">
            <div className="target-audience-item">
              <div>
                <KeyboardDoubleArrowRightIcon />
              </div>
              <p>
                Researchers, Climate Scientists, Students, and Industrialists as
                well as representatives of climate organizations, research
                institutions, and government agencies.
              </p>
            </div>
            <div className="Climate-Change-content-item">
              <div>
                <KeyboardDoubleArrowRightIcon />
              </div>
              <p>
                Present your research, receive feedback from your peers, and get
                published in prestigious academic journals.
              </p>
            </div>
          </div>

          <div className="target-audience-img">
            <img
              className="target-audience-img-item"
              src="pictures/green_earth.png"
              alt="Target Audience"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClimateChange;
