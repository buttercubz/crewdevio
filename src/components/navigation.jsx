/* @jsx insertionJsx */

import insertionJsx from "insertion";

import { Link } from "insertion/router";

import logo from '../images/logo.png';

function Navigation() {
  return (
    <nav className="nav-main">
      <div className="main-logo btn">
        <img src={logo} alt="CrewView logo" />
        <h1>
          Crew <span className="color-red"> Dev</span>
        </h1>
      </div>
      <ul className="nav-menu">
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
    </nav>
  );
}

export default Navigation;
