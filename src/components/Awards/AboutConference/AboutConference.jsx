import React from "react";
import "./AboutConference.css";
import { CalendarMonth } from "@mui/icons-material";
import PlaceIcon from "@mui/icons-material/Place";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const AboutConference = () => {
  return (
    <>
      <div className="about-conference-container">
        <div className="about-conference-pic-container">
          <div className="about-conference-img">
            <h4 className="about-conference-h4">Conference Details</h4>
            <CalendarMonth />
            <p className="Conference-Details-hero-p">
              <span className="Conference-Details-hero-span">Dates:</span>July
              21-22, 2025
            </p>
            <PlaceIcon />
            <p className="Conference-Details-hero-p">
              <span className="Conference-Details-hero-span">Venue:</span>
              Vancouver, Canada
            </p>
            <img
              className="about-conference-image-img"
              src="public\pictures\content-2.jpg"
            />
          </div>

          <div className="about-conference">
            <CloudDownloadIcon />
            <h2 className="Conference-Details-hero-h2">Brochure Download</h2>
            <button className="Conference-Details-hero-button">
              Download Brochure
            </button>
            <img
              className="about-conference-image-img"
              src="public\pictures\upcoming img 1.jpg"
            />
          </div>

          <div className="about-conference">
            <CloudDownloadIcon />
            <h2 className="Conference-Details-hero-h2">Brochure Download</h2>
            <button className="Conference-Details-hero-button">
              Download Brochure
            </button>
            <img
              className="about-conference-image-img"
              src="public\pictures\upcoming img 3.jpg"
            />
          </div>

          <div className="about-conference">
            <CloudDownloadIcon />
            <h2 className="Conference-Details-hero-h2">Brochure Download</h2>
            <button className="Conference-Details-hero-button">
              Download Brochure
            </button>
            <img
              className="about-conference-image-img"
              src="public\pictures\upcoming img 4.jpg"
            />
          </div>
        </div>
        <div className="about-conferecne-content">
          <h1 className="about-confernece-h1">
            About Climate Change Conference 2025
          </h1>
          <p className="about-conference-p">
            We are excited to extend an invitation to the International
            Conference on Climate Change and Public Health, scheduled for July
            21-22, 2025, in Vancouver, Canada. This significant gathering will
            unite prominent experts, researchers, and policymakers to examine
            the critical effects of climate change on public health and to
            discuss effective strategies for response and adaptation. Conference
            Theme: “Navigating the Intersection: Climate Change, Public Health,
            and Resilience” Under the theme “Navigating the Intersection:
            Climate Change, Public Health, and Resilience,” this conference aims
            to delve into the intricate connections between climate change and
            health outcomes. Our goal is to investigate innovative solutions,
            research insights, and policies that can empower communities to
            adapt to climate-related challenges while enhancing public health
            resilience.
          </p>
        </div>
      </div>
     
    </>
  );
};

export default AboutConference;
