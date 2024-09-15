import React from 'react';
import './GetInTouch.css';
import PinDropIcon from "@mui/icons-material/PinDrop";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import contactData from './ContactData';

const iconMap = {
  PinDropIcon: PinDropIcon,
  PhoneInTalkIcon: PhoneInTalkIcon,
  EmailIcon: EmailIcon,
};

const GetInTouch = () => {
  return (
    <div>
      <div className="contact-section">
        <div className="container">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-description">
            To learn more about our conferences and events, please get in touch
            with us. Join our extensive network of scientists, professional
            experts, and research scholars to stay informed and connected.
          </p>
          <div className="contact-info-contact">
            {contactData.map(({ id, icon, title, content }) => {
              const IconComponent = iconMap[icon];
              return (
                <div key={id} className="info-card">
                  <div className="info-text">
                    <IconComponent className="contact-icon" />
                    <h3>{title}</h3>
                    <p>{content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
