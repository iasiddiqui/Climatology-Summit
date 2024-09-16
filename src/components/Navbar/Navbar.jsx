import { NavLink } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="public\pictures\ClimateLogo.jpg"
          alt="Event Logo"
        />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={isMenuOpen ? "active" : ""}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav active-link" : "nav")}
          >
            Home
          </NavLink>
        </li>
        <li className="dropdown">
          <NavLink
            to="/upcoming-event"
            className={({ isActive }) => (isActive ? "nav active-link" : "nav")}
          >
            Upcoming Events
            <ArrowDropDownIcon />
          </NavLink>
          <ul className="dropdown-content">
            <li>
              <NavLink className="dropdown-nav" to="/climate-change-conference">
                Climate Change and Public Health Conference
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-nav" to="/green-technologies-conference">
                Green Technologies and Renewable Energy Conference
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-nav" to="/ocean-health-conference">
                Ocean Health and Climate Dynamics Conference
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-nav" to="/biodiversity-conference">
                Climate Change and Biodiversity Conference
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink
            to="/venue"
            className={({ isActive }) => (isActive ? "nav active-link" : "nav")}
          >
            Venue
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/awards"
            className={({ isActive }) => (isActive ? "nav active-link" : "nav")}
          >
            Awards
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/speaker-guidline"
            className={({ isActive }) => (isActive ? "nav active-link" : "nav")}
          >
            Speaker Guidelines
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "nav active-link" : "nav")}
          >
            Contact
          </NavLink>
        </li>
        <li className="register-li">
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? "register-link active-link" : "register-link")}
          >
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
