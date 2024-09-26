import React from "react";
import "./MediaPartners.css";
import { mediaPartnersData } from "./MediaPartnersData"; // Import media partner data

const MediaPartners = () => {

  const duplicatedData = [...mediaPartnersData, ...mediaPartnersData];

  return (
    <div className="media-partner">
      <h1 className="media-partner-h1">Media Partners</h1>
      <div className="media-partner-images">
        {duplicatedData.map((partner, index) => (
          <img
            key={index} 
            className="media-partner-img"
            src={partner.imageUrl}
            alt={partner.altText}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaPartners;
