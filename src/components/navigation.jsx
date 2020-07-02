/* @jsx insertionJsx */

import insertionJsx from "insertion";

import { Link } from "insertion/router";

import logo from "../images/logo.png";

function Navigation() {
  return (
    <nav className="nav-main">
      <div className="main-logo btn">
        <img src={logo} alt="CrewView logo" />
        <h1>
          Crew <span className="color-red"> Dev</span>
        </h1>
      </div>
      <span id="menu-icon">&#9776;</span>
      <div className="nav-menu">
      <ul >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Navigation;
