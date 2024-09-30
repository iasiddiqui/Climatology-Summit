import React, { useState, useEffect } from "react";
import "./ScientificSessions.css";
import { ScientificSessionEnergyData } from "./ScientificSessionEnergyData";
import MicIcon from "@mui/icons-material/Mic";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom"; // Optional, if using React Router

const ScientificSessionEnergy = () => {
  const [openFaq, setOpenFaq] = useState([]); // Track two open FAQs at a time
  const navigate = useNavigate(); // Optional, for client-side routing with React Router

  useEffect(() => {
    setOpenFaq([0, 1]); // Open the first two FAQs by default
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq((prevOpenFaq) => {
      if (prevOpenFaq.includes(index)) {
        // If the clicked FAQ is already open, close it
        return prevOpenFaq.filter((i) => i !== index);
      } else {
        // If less than two FAQs are open, add the new one
        const newOpenFaq = [...prevOpenFaq, index];
        if (newOpenFaq.length > 2) {
          // If more than two are open, remove the first one (oldest)
          newOpenFaq.shift();
        }
        return newOpenFaq;
      }
    });
  };

  const handleViewAllClick = () => {
    navigate("/"); // Optional, if using React Router. Otherwise, stick with window.location.href
  };

  return (
    <div className="scientific-sessions-container">
      <h1 className="scientific-sessions-h1">Scientific Sessions</h1>
      <p className="scientific-sessions-p">
        Below are the scientific sessions of the Environmental Science Event
      </p>

      <div className="scientific-sessions-main">
        {ScientificSessionEnergyData.map((item, index) => (
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

      <button
        className="scientific-sessions-button"
        onClick={handleViewAllClick}
      >
        View All Scientific Sessions
      </button>
    </div>
  );
};

export default ScientificSessionEnergy;
