import { NavLink } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-up-color"></div>
        <div className="logo">
          <img src="pictures/ClimateLogo.png" alt="Event Logo" />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
        <div className="nav-links-container">
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
              <div
                onClick={window.innerWidth <= 768 ? toggleDropdown : null}
                onMouseEnter={window.innerWidth > 768 ? () => setIsDropdownOpen(true) : null}
                onMouseLeave={window.innerWidth > 768 ? () => setIsDropdownOpen(false) : null}
                style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              >
                <NavLink
                  to="/upcoming-event"
                  className={({ isActive }) => (isActive ? "nav active-link" : "nav")}
                >
                  Upcoming Events
                </NavLink>
                <ArrowDropDownIcon />
              </div>
              {(isDropdownOpen || window.innerWidth > 768) && (
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
              )}
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
          </ul>
          <div className="nav-register-button">
            <Link to="/register">
              <button>Register</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
