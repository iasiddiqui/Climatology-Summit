import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./climate.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const ClimateChange = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <div className="Climate-Change-main">
      <h1 className="Climate-Change-h1">Why Climate Change</h1>
      <motion.p
        className="Climate-Change-p"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={controls}
      >
        Climate Change conference is designed to provide its attendees with an
        enriching experience that will enhance their academic work and an
        opportunity to collaborate and network with peers.
      </motion.p>

      <div className="Climate-Change-content">
        {/* Image with fade-in animation */}
        <motion.img
          ref={ref}
          className="Climate-Change-img"
          src="public/pictures/green_earth.png"
          alt="Climate Change"
          initial={{ opacity: 0 }}
          animate={controls}
        />

        <div className="Climate-Change-content-p">
          <div className="Climate-Change-content-item">
            <KeyboardDoubleArrowRightIcon />
            <motion.p ref={ref} initial={{ opacity: 0 }} animate={controls}>
              Present your research, receive feedback from your peers, and get
              published in prestigious academic journals.
            </motion.p>
          </div>
          <div className="Climate-Change-content-item">
            <KeyboardDoubleArrowRightIcon />
            <motion.p ref={ref} initial={{ opacity: 0 }} animate={controls}>
              Take the next step in your academic career by identifying new
              research opportunities and partners.
            </motion.p>
          </div>
          <div className="Climate-Change-content-item">
            <KeyboardDoubleArrowRightIcon />
            <motion.p ref={ref} initial={{ opacity: 0 }} animate={controls}>
              Join the network of academics and help define the future of the
              field.
            </motion.p>
          </div>
          <div className="Climate-Change-content-item">
            <KeyboardDoubleArrowRightIcon />
            <motion.p ref={ref} initial={{ opacity: 0 }} animate={controls}>
              Discover the beauty of Amsterdam and indulge in local cuisines.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Target Audience Section */}
      <div className="target-audience">
        <h1 className="target-audience-h1">Target Audience</h1>
        <div className="target-audience-content">
          <div className="target-audience-text">
            <div className="target-audience-item">
              <KeyboardDoubleArrowRightIcon />
              <motion.p ref={ref} initial={{ opacity: 0 }} animate={controls}>
                Researchers, Climate Scientists, Students, and Industrialists as
                well as representatives of climate organizations, research
                institutions, and government agencies.
              </motion.p>
            </div>
            <div className="Climate-Change-content-item">
              <div className="icon-container">
                <KeyboardDoubleArrowRightIcon />
              </div>
              <motion.p ref={ref} initial={{ opacity: 0 }} animate={controls}>
                Present your research, receive feedback from your peers, and get
                published in prestigious academic journals.
              </motion.p>
            </div>
          </div>
          <motion.div
            className="target-audience-img"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={controls}
          >
            <img
              className="target-audience-img-item"
              src="public/pictures/green_earth.png"
              alt="Target Audience"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClimateChange;
