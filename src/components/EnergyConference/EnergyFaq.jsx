import React, { useState } from "react";
import { EnergyFaqData } from "./EnergyFaqData";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const EnergyFaq = () => {
  const [openFaq, setOpenFaq] = useState(null); // Manage which FAQ is open

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="faqs-main">
      <div className="faqs-list">
        {EnergyFaqData.map((item, index) => (
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

export default EnergyFaq;
