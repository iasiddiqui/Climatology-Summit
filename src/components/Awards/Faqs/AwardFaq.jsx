import React, { useState } from "react";
import { AwardfaqData } from "./data"; // Make sure you import the correct data file
// import "./Faqs.css";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const AwardFaqs = () => {
  const [openFaq, setOpenFaq] = useState(null); // Manage which FAQ is open

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null); 
    } else {
      setOpenFaq(index); 
    }
  };

  return (
    <div className="faqs-main">
      <h1 className="faqs-h1">FAQ's</h1>
      <div className="faqs-list">
        {AwardfaqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              {openFaq === index ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
              {faq.question}
            </div>
            {openFaq === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardFaqs;
