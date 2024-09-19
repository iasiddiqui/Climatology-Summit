import React, { useState } from "react";
import { DynamicFaqData } from "./DynamicFaqData";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const DynamicFaq = () => {
  const [openFaq, setOpenFaq] = useState(null); // Manage which FAQ is open

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="faqs-main">
      <div className="faqs-list">
        {DynamicFaqData.map((item, index) => (
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

export default DynamicFaq;
