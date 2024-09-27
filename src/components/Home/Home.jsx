import { BrowserRouter, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import "./home.css";
import Navbar from "../Navbar/Navbar";
import UpcomingConference from "./UpcomingConference/UpcomingConference";
import ClimateChange from "./ClimateChange/ClimateChange";
import MediaPartners from "./MediaPartners/MediaPartners";
import Faqs from "./Faqs/Faqs";
import Footer from "./Footer/Footer";
// import ContentHero from "./ContentOfHero/ContentHero";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-main">
      <Navbar />

      {/* -------Content 1--------- */}
      <div className="video-content">
        <div className="content-1">
          <motion.div
            className="content-1-details"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <h1 className="home-h1">Climatology Summit</h1>
            <h4 className="home-h4">Act Now, Save Tomorrow</h4>

            <h2 className="content1-h2">
              Climate Change Conferences and Environmental Science Meetings
            </h2>
            <p className="content1-p">
              We are pleased to announce the Climate Change and Environmental
              Science Conference, centered on “Current Trends and Research in
              Climate Change and Environmental Science.” This event will unite
              prominent climate scientists, researchers, scholars, and industry
              professionals from across the globe to share insights and present
              their innovative research. The conference provides a distinctive
              forum for exploring the latest developments and findings in
              climate change and environmental science.
            </p>
          </motion.div>

          <motion.div
            className="register-button"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <Link to="/register">
              <button>Register</button>
            </Link>
          </motion.div>

          <motion.div
            className="content1-pic"
            initial={{ x: 100}}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <img src="public/pictures/environment-tree.png" alt="Tree" />
          </motion.div>
        </div>
      </div>

      <div className="rectangle"></div>

      {/* --------Content  Hero---------- */}
      {/* <ContentHero /> */}

      {/*----------- Upcoming Conferences------- */}
      <UpcomingConference />

      {/* ---------Climate Change--------- */}
      <ClimateChange />

      {/*-------- Media Partners---------------- */}
      <MediaPartners />

      {/*--------- FAQ'S---------------- */}
      <Faqs />

      {/* --------Footer------------ */}
      <Footer />
    </div>
  );
};

export default Home;

