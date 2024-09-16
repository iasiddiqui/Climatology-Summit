import React, { useState } from "react";
import { SpeakerFaqData } from "./SpeakerFaqsData";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import "./Faqs.css"; 

const SpeakerFaqs = () => {
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
        {SpeakerFaqData.map((faq, index) => (  // Corrected variable name here
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

export default SpeakerFaqs;
