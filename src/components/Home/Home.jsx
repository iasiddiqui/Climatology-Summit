import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./home.css";
import Navbar from "../Navbar/navbar";
import UpcomingConference from "./UpcomingConference/UpcomingConference";
import ClimateChange from "./ClimateChange/ClimateChange";
import MediaPartners from "./MediaPartners/MediaPartners";
import Faqs from "./Faqs/Faqs";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div className="home-main">
      <Navbar />

      

      {/* -------Content 1--------- */}
      <div className="video-content">
        <div className="video-bg">
          {/* <video autoPlay muted loop playsInline>
            <source src="pictures/bg video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        </div>
        <div className="content-1">
          <div className="content-1-details">
            <h2 className="content1-h2">
              <h1 className="home-h1">Climatology Summit</h1>
              <h4 className="home-h4">Act Now, Save Tomorrow</h4>
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
          </div>
          <div className="content1-pic">
            {/* <img
              className="content1-pic"
              src="public/pictures/green_earth.png"
              alt="Conference Image"
            /> */}
            <img src="public\pictures\environment-tree.png" alt="" />
          </div>
        </div>
      </div>

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
