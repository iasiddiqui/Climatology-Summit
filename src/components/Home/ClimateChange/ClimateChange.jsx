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
          src="https://climatologysummit.com/wp-content/uploads/2024/07/6db9f4fc064816f90deea1cda908d5de.jpg"
          alt="Climate Change"
        />
        <div className="Climate-Change-content-p">
          <div className="Climate-Change-content-item">
            <KeyboardDoubleArrowRightIcon />
            <p>
              Present your research, receive feedback from your peers, and get
              published in prestigious academic journals.
            </p>
          </div>
          <div className="Climate-Change-content-item">
            <KeyboardDoubleArrowRightIcon />
            <p>
              Take the next step in your academic career by identifying new
              research opportunities and partners.
            </p>
          </div>
          <div className="Climate-Change-content-item">
            <KeyboardDoubleArrowRightIcon />
            <p>
              Join the network of academics and help define the future of the
              field.
            </p>
          </div>
          <div className="Climate-Change-content-item">
            <KeyboardDoubleArrowRightIcon />
            <p>
              Discover the beauty of Amsterdam and indulge in local cuisines.
            </p>
          </div>
        </div>
      </div>

      {/* ----------Target Audience----------- */}
      <div className="target-audience">
  <h1 className="target-audience-h1">Target Audience</h1>
  <div className="target-audience-content">
    <div className="target-audience-text">
      <div className="target-audience-item">
        <KeyboardDoubleArrowRightIcon />
        <p>
          Researchers, Climate Scientists, Students, and Industrialists as well
          as representatives of climate organizations, research institutions,
          and government agencies.
        </p>
      </div>
      <div className="target-audience-item">
        <KeyboardDoubleArrowRightIcon />
        <p>
          You are guaranteed engaging discussions that bring diverse opinions
          under the common goal of advancing the future of the planet as
          communities around the world unite to combat climate change and global
          warming.
        </p>
      </div>
    </div>
    <div className="target-audience-img">
      <img
        className="target-audience-img-item"
        src="https://climatologysummit.com/wp-content/uploads/2024/07/9e64e883f37be233fce9fa0f128ea1e1.jpg"
        alt="Target Audience"
      />
    </div>
  </div>
</div>

    </div>
  );
};

export default ClimateChange;
