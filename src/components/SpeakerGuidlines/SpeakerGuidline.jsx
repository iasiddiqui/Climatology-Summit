import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./speaker.css";
import Navbar from "../Navbar/navbar.jsx";
import { speakerGuidelinesData } from "./SpeakerGuidlineData.jsx";
import SpeakerFaqs from "./SpeakerFaqs";
import Footer from "../Home/Footer/Footer";

const SpeakerGuidline = () => {
  const [showSections, setShowSections] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSections(true);
    }, 100); // Delay before showing the sections

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const headingVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (index) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.3, // Stagger content appearance
      },
    }),
  };

  return (
    <>
      <Navbar />
      <div className="hero-section">
        <img
          className="hero-picture"
          src="https://img.freepik.com/free-photo/close-up-people-studying-language-together_23-2149300725.jpg?t=st=1726478016~exp=1726481616~hmac=4c49ee9355a58586e799b29db605ee7ca34161d7855d7c16d31d89c2b9cf4827&w=900"
          alt="Hero"
        />
        <div className="overlay">
          <h1 className="hero-h1">Speaker Guidelines</h1>
        </div>
      </div>
      <div className="speaker-guidline-content">
        <motion.h2
          className="speaker-guidline-h2-heading"
          variants={headingVariants}
          initial="hidden"
          animate={showSections ? "visible" : "hidden"}
        >
          Conference Guidelines
        </motion.h2>
        {speakerGuidelinesData.map((section, index) => (
          <div className="speaker-guidline-content1" key={index}>
            <motion.h2
              className="speaker-guidline-h2-content"
              variants={headingVariants}
              initial="hidden"
              animate={showSections ? "visible" : "hidden"}
            >
              {section.title}
            </motion.h2>
            <ul>
              {section.content.map((item, idx) => (
                <motion.li
                  className="speaker-guidline-li"
                  key={idx}
                  variants={contentVariants}
                  initial="hidden"
                  animate={showSections ? "visible" : "hidden"}
                  custom={idx} // Pass the index for stagger effect
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <SpeakerFaqs />
      <Footer />
    </>
  );
};

export default SpeakerGuidline;
