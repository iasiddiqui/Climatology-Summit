import React, { useState } from "react";
import { HealthData } from "./HealthData";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const HealthConferenceFaq = () => {
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
      <div className="faqs-list">
        {HealthData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              {openFaq === index ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
              {item.question}
            </div>
            {openFaq === index && (
              <div className="faq-answer" dangerouslySetInnerHTML={{ __html: item.answer }} />

            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthConferenceFaq;
