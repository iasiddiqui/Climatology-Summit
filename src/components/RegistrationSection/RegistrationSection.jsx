import React from "react";
import './Registration.css'; 
import MicIcon from '@mui/icons-material/Mic';
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import RegistrationSectionData from "./RegistratinSectionData"

const iconMap = {
  MicIcon: MicIcon,
  SchoolIcon: SchoolIcon,
  WorkHistoryIcon: WorkHistoryIcon,
};

const RegistrationSection = () => {
  return (
    <div className="registeration-section">
      <div className="containerr">
        <h2 className="registeration-title">Registration</h2>
        <p className="registeration-description">Mid Term Registration Open</p>
        <div className="registeration-info-contact">
          {RegistrationSectionData.map(({ id, icon, title, content }) => {
            const IconComponent = iconMap[icon];
            if (!IconComponent) {
              return null;
            }

            return (
              <div key={id} className="registeration-card">
                <div className="registeration-text">
                  <IconComponent className="registeration-icon" />
                  <h3>{title}</h3>
                  <p>{content}</p>
                  <button className="registration-btn">Register Now</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RegistrationSection;
