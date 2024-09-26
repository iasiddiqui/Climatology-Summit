import React, { useEffect, useRef, useState } from "react"; // Import useEffect and useRef
import './Registration.css'; 
import MicIcon from '@mui/icons-material/Mic';
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import RegistrationSectionData from "./RegistratinSectionData"; 
import { Link } from "react-router-dom"; 
import { motion } from "framer-motion"; // Import Framer Motion

const iconMap = {
  MicIcon: MicIcon,
  SchoolIcon: SchoolIcon,
  WorkHistoryIcon: WorkHistoryIcon,
};

const RegistrationSection = () => {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const sectionRef = useRef(null); // Reference to the section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when the section is in view
          observer.disconnect(); // Stop observing after visibility is set
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observe the section
    }

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, []);

  return (
    <div className="registeration-section" ref={sectionRef}>
      <div className="containerr">
        <h2 className="registeration-title">Registration</h2>
        <p className="registeration-description">Mid Term Registration Open</p>
        <div className="registeration-info-contact">
          {RegistrationSectionData.map(({ id, icon, title, content }, index) => {
            const IconComponent = iconMap[icon];
            if (!IconComponent) {
              return null;
            }

            return (
              <motion.div
                key={id}
                className="registeration-card"
                initial={{ opacity: 0, x: -100 }} // Start from the left
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} // Animate only if visible
                transition={{ duration: 0.5, delay: isVisible ? index * 0.3 : 0 }} // Delay based on visibility
              >
                <div className="registeration-text">
                  <IconComponent className="registeration-icon" />
                  <h3>{title}</h3>
                  <p>{content}</p>
                  <Link to="/register"> 
                    <button className="registration-btn">Register Now</button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RegistrationSection;
