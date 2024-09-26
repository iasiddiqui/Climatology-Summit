import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Footer = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img
            className="footer-img"
            src="public\pictures\logo footer.png"
            alt="Footer Logo"
          />
          <p className="footer-p">
            Ecosystem that brings Scholars, people in the scientific study &
            research, knowledge groups of society, students, learners, and more
            to a common ground – to share their knowledge on scientific progress
            that benefits humanity and existence itself.
          </p>
        </div>

        <div className="footer-link">
          <h3 className="footer-link-h3">USEFUL LINKS</h3>
          <ul className="footer-link-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <div className="dropdown-container">
                {/* Link for navigation */}
                <Link to="/upcoming-event">Upcoming Events</Link>

                <span className="dropdown-span" onClick={toggleDropdown}>
                  {dropdownOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                </span>
              </div>

              {dropdownOpen && (
                <ul className="footer-dropdown">
                  <li>
                    <Link to="/event1">
                      Climate Change and Public Health Conference
                    </Link>
                  </li>
                  <li>
                    <Link to="/event2">
                      Green Technologies and Renewable Energy Conference
                    </Link>
                  </li>
                  <li>
                    <Link to="/event3">
                      Ocean Health and Climate Dynamics Conference
                    </Link>
                  </li>
                  <li>
                    <Link to="/event4">
                      Climate Change and Biodiversity Conference
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/venue">Venue</Link>
            </li>
            <li>
              <Link to="/awards">Awards</Link>
            </li>
            <li>
              <Link to="/speaker-guidline">Speaker Guidelines</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="contact-info">
          <h3 className="contact-h3">CONTACT INFO</h3>
          <p className="contact-info-p">
            +1 630 768 1199
            <br />
            support@stripeconferences.com
            <br />
            16192 Coastal Highway Lewes, Delaware, USA 19958
          </p>
        </div>
      </div>

      

      <div className="footer-bottom">
        <p>
          Copyright 2024 &copy; Climatology Summit{" "}
          <strong>(Stripe Conferences)</strong>{" "}
          <span className="foooter-span">
            <Link to="/cancellation-policy"> | Cancellation Policy</Link>
          </span>
          <span className="foooter-span">
          <Link to="/terms-and-conditions"> | Terms and Conditions</Link>
          </span>
          <span className="foooter-span">
          <Link to="/privacy-policy"> | Privacy Policy</Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
