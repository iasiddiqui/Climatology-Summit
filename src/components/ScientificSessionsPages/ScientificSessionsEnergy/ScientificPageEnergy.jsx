import React, { useState, useEffect } from "react"; 
import "../ScientificPage.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
import MicIcon from "@mui/icons-material/Mic";
import { ScientificPageEnergyData } from "./ScientificPageEnergyData";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";

const ScientificPageEnergy = () => {
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

  return (
    <>
      <Navbar />
      <div className="hero-section">
        <img
          className="hero-picture"
          src="/pictures/awards.jpg"
          alt="Hero"
        />

        <div className="overlay">
          <h1 className="scientific-page-h1"> Green Technologies Scientific Sessions</h1>
          <h2 className="scientific-page-h2"> Feel free to let me know if there’s anything else you need help with!</h2>
        </div>
      </div>
      <div className="scientific-sessions-container">
        <h1 className="scientific-sessions-h1">Green Technologies Scientific Sessions</h1>
        <p className="scientific-sessions-p">
        Here are a few trending topics in Green Technologies Science Research
        </p>

        <div className="scientific-sessions-main">
          {ScientificPageEnergyData.map((item, index) => (
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
      </div>
      <Footer />
    </>
  );
};

export default ScientificPageEnergy;
