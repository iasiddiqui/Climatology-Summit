import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./home.css";
import Navbar from "../Navbar/navbar.jsx";

const Home = () => {
  return (
    <div className="home-main">
      <Navbar />

      <div className="hero-section">
        <img
          className="hero-picture"
          src="https://img.freepik.com/free-photo/digital-art-with-planet-earth_23-2151064529.jpg?t=st=1726221129~exp=1726224729~hmac=0873f43a7584025bcf333e051cc4f55792f889164a6552bdc0c142ada654dde8&w=1060"
          alt="Hero"
        />
        <div className="overlay">
          <h1 className="home-h1">Climatology Summit</h1>
          <h4 className="home-h4">Act Now, Save Tomorrow</h4>
        </div>
      </div>

      {/* -------Content 1--------- */}

      <div className="content-1">
        <div className="content-1-details">
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
            forum for exploring the latest developments and findings in climate
            change and environmental science.
          </p>
        </div>
        <div className="content1-pic">
          <img
            className="content1-pic"
            src="https://climatologysummit.com/wp-content/uploads/2024/07/f4b27bf4f15eda71b9ffa85489cb2898.jpg"
            alt="Conference Image"
          />
        </div>
      </div>

      {/*----------- Upcoming Conferences------- */}
    </div>
  );
};

export default Home;
