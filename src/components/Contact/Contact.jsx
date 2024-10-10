import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import "./contact.css";
import PinDropIcon from "@mui/icons-material/PinDrop";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import contactData from "../GetInTouch/ContactData.jsx";
import ContactUs from "../ContactUsForm/ContactUs.jsx";
import Footer from "../Home/Footer/Footer.jsx";

const iconMap = {
  PinDropIcon: PinDropIcon,
  PhoneInTalkIcon: PhoneInTalkIcon,
  EmailIcon: EmailIcon,
};

const Contact = () => {
  const [showBoxes, setShowBoxes] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBoxes(true);
    }, 100); 

    return () => clearTimeout(timer); 
  }, []);


  const cardVariant = {
    hidden: { opacity: 0, y: 20 }, 
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: index * 0.2, 
      },
    }),
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="contact-section">
          <div className="container">
            <h2 className="contact-page-title">Contact Us</h2>
            <p className="contact-page-description">
              To learn more about our conferences and events, please get in
              touch with us. Join our extensive network of scientists,
              professional experts, and research scholars to stay informed and
              connected.
            </p>
            <div className="contact-page-info-contact">
              {contactData.map(({ id, icon, title, content }, index) => {
                const IconComponent = iconMap[icon];
                return (
                  <motion.div
                    key={id}
                    className="contact-page-info-card"
                    variants={cardVariant}
                    initial="hidden"
                    animate={showBoxes ? "visible" : "hidden"}
                    custom={index} 
                  >
                    <div className="info-text">
                      <IconComponent className="contact-page-icon" />
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

      <ContactUs mapUrl={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d38981.2623804173!2d4.904096!3d52.364456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1728559562204!5m2!1sen!2sus"} />
      <Footer />
    </>
  );
};

export default Contact;
