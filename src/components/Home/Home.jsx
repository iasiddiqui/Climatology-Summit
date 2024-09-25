import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./home.css";
import Navbar from "../Navbar/navbar";
import UpcomingConference from "./UpcomingConference/UpcomingConference";
import ClimateChange from "./ClimateChange/ClimateChange";
import MediaPartners from "./MediaPartners/MediaPartners";
import Faqs from "./Faqs/Faqs";
import Footer from "./Footer/Footer";
import ContentHero from "./ContentOfHero/ContentHero";

const Home = () => {
  return (
    <div className="home-main">
      <Navbar />

      {/* -------Content 1--------- */}
      <div className="video-content">
        {/* <div className="video-bg">
          <video autoPlay muted loop playsInline>
            <source src="pictures/bg video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}
        <div className="content-1">
          <div className="content-1-details">
            <h1 className="home-h1">Climatology Summit</h1>
            <h4 className="home-h4">Act Now, Save Tomorrow</h4>
            
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
      <div className="rectangle"></div>


      {/* --------Content  Hero---------- */}
      <ContentHero />

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
