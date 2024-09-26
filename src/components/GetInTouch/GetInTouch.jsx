import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./GetInTouch.css";
import PinDropIcon from "@mui/icons-material/PinDrop";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import contactData from "./ContactData";

const iconMap = {
  PinDropIcon: PinDropIcon,
  PhoneInTalkIcon: PhoneInTalkIcon,
  EmailIcon: EmailIcon,
};

const GetInTouch = () => {
  // Using the useInView hook to detect when the section is in the viewport
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  const cardVariant = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <div className="contact-main" ref={ref}>
      <div className="contact-section">
        <div className="container">
          <h2 className="get-in-title">Get In Touch</h2>
          <p className="get-in-description">
            To learn more about our conferences and events, please get in touch
            with us. Join our extensive network of scientists, professional
            experts, and research scholars to stay informed and connected.
          </p>
          <div className="contact-info-contact">
            {contactData.map(({ id, icon, title, content }) => {
              const IconComponent = iconMap[icon];
              return (
                <motion.div
                  key={id}
                  className="get-in-info-card"
                  variants={cardVariant}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  <div className="info-text">
                    <IconComponent className="contact-icon" />
                    <h3>{title}</h3>
                    <p>{content}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
