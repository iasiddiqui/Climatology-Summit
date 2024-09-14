import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Footer = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img
            className="footer-img"
            src="https://climatologysummit.com/wp-content/uploads/2024/07/123-1.png"
            alt="Footer Logo"
          />
          <p className="footer-p">
            Ecosystem that brings Scholars, people in the scientific study & research, knowledge groups of society, students, learners, and more to a common ground – to share their knowledge on scientific progress that benefits humanity and existence itself.
          </p>
        </div>
        <div className="footer-link">
          <h3 className="footer-link-h3">USEFUL LINKS</h3>
          <ul className="footer-link-list">
            <li><Link to="/">Home</Link></li>
            <li>
              <button onClick={toggleDropdown} className="footer-link-button">
                Upcoming Events <KeyboardArrowDownIcon className={`dropdown-icon ${dropdownOpen ? 'open' : ''}`} />
              </button>
              {dropdownOpen && (
                <ul className="footer-dropdown">
                  <li><Link to="/event1">Event 1</Link></li>
                  <li><Link to="/event2">Event 2</Link></li>
                  <li><Link to="/event3">Event 3</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/venue">Venue</Link></li>
            <li><Link to="/awards">Awards</Link></li>
            <li><Link to="/speaker-guidelines">Speaker Guidelines</Link></li>
            <li><Link to="/contact">Contact</Link></li>
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
      <div className="policy">
        <ul className="policy-list">
          <li><Link to="/cancellation-policy">Cancellation Policy</Link></li>
          <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p> Copyright 2024 &copy; Climatology Summit (Stripe Conferences)</p>
      </div>
    </footer>
  );
};

export default Footer;
