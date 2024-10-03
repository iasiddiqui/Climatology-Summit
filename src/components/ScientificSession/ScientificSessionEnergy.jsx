import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./ScientificSessions.css";
import { ScientificSessionEnergyData } from "./ScientificSessionEnergyData";
import MicIcon from "@mui/icons-material/Mic";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom"; 

const ScientificSessionEnergy = () => {
  const [openFaq, setOpenFaq] = useState([]); 
    const navigate = useNavigate();
  
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
      navigate("/green-technologies-conference/scientific-eessions-energy"); 
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


        {/* <Link to="/green-technologies-conference/Scientific-Sessions-Energy"> */}
        <button 
          className="scientific-sessions-button"
          onClick={handleViewAllClick}
        >
          View All Scientific Sessions
        </button>
        {/* </Link> */}
      </div>
    );
  };

export default ScientificSessionEnergy;
