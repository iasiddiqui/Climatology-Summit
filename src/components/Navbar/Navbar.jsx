import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Navbar.css";
import { useState } from "react"; // Corrected import

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://climatologysummit.com/wp-content/uploads/2024/07/Climate-e1721998462429.png"
          alt="Event Logo"
        />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={isMenuOpen ? "active" : ""}>
        <li>
          <Link className="nav" to="/">
            Home
          </Link>
        </li>
        <li className="dropdown">
          <Link className="nav" to="">
            Upcomming Events
            <ArrowDropDownIcon />
          </Link>
          <ul className="dropdown-content">
            <li>
              <Link className="dropdown-nav" to="">Climate Change and Public Health Conference</Link>
            </li>
            <li>
              <Link className="dropdown-nav" to="">
                Green Technologies and Renewable Energy Conference
              </Link>
            </li>
            <li>
              <Link className="dropdown-nav" to="">Ocean Health and Climate Dynamics Conference</Link>
            </li>
            <li>
              <Link className="dropdown-nav" to="">Climate Change and Biodiversity Conference</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link className="nav" to="">Venue</Link>
        </li>
        <li>
          <Link className="nav" to="">Awards</Link>
        </li>
        <li>
          <Link to="">Speaker Guidelines</Link>
        </li>
        <li>
          <Link className="nav" to="">Contact</Link>
        </li>
        <li className="register-li">
          <Link className="ragister-link" to="">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
