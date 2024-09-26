import React, { useState, useEffect } from "react";
import "./ScientificSessions.css";
import { ScientificSessionData } from "./ScientificSessionsData";
import MicIcon from "@mui/icons-material/Mic";
import RemoveIcon from "@mui/icons-material/Remove";

const ScientificSessions = () => {
  const [openFaq, setOpenFaq] = useState([]);

  useEffect(() => {
    setOpenFaq([0, 1]);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq((prevOpenFaq) => {
      if (prevOpenFaq.includes(index)) {
        return prevOpenFaq.filter((i) => i !== index);
      } else {
        const newOpenFaq = [...prevOpenFaq, index];
        if (newOpenFaq.length > 2) {
          newOpenFaq.shift();
        }
        return newOpenFaq;
      }
    });
  };

  const handleViewAllClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="scientific-sessions-container">
      <h1 className="scientific-sessions-h1">Scientific Sessions</h1>
      <p className="scientific-sessions-p">
        Below are the scientific sessions of the Environmental Science Event
      </p>

      <div className="scientific-sessions-main">
        {ScientificSessionData.map((item, index) => (
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

export default ScientificSessions;
