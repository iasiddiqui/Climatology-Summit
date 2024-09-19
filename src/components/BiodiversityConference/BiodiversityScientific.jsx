import React, { useState } from "react";
import { BioDiversiScientificData } from "./BiodiversityScirntificData";
import MicIcon from "@mui/icons-material/Mic";
import RemoveIcon from "@mui/icons-material/Remove";

const BioDiversiScientific = () => {
  const [openFaq, setOpenFaq] = useState([0, 1]); // Open first two by default

  const toggleFaq = (index) => {
    setOpenFaq((prevOpenFaq) => {
      if (prevOpenFaq.includes(index)) {
        return prevOpenFaq.filter((i) => i !== index); // Close if it's already open
      } else {
        const newOpenFaq = [...prevOpenFaq, index]; // Open new item
        if (newOpenFaq.length > 2) {
          newOpenFaq.shift(); // Keep only two FAQs open
        }
        return newOpenFaq;
      }
    });
  };

  const handleViewAllClick = () => {
    window.location.href = "/scientific-sessions"; // Update the URL as needed
  };

  return (
    <div className="scientific-sessions-container">
      <h1 className="scientific-sessions-h1">Scientific Sessions</h1>
      <p className="scientific-sessions-p">
        Below are the scientific sessions of the Environmental Science Event
      </p>

      <div className="scientific-sessions-main">
        {BioDiversiScientificData.map((item, index) => (
          <div
            key={index}
            className={`scientific-sessions-item ${
              openFaq.includes(index) ? "open" : "closed"
            }`}
          >
            <div
              className="scientific-sessions-question"
              onClick={() => toggleFaq(index)}
            >
              {openFaq.includes(index) ? <RemoveIcon /> : <MicIcon />}
              {item.question}
            </div>
            {openFaq.includes(index) && (
              <div
                className="scientific-sessions-answer"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            )}
          </div>
        ))}
      </div>

      <button className="scientific-sessions-button" onClick={handleViewAllClick}>
        View All Scientific Sessions
      </button>
    </div>
  );
};

export default BioDiversiScientific;
