/* @jsx insertionJsx */

import insertionJsx from "insertion";

import { Link } from "insertion/router";

function Navigation() {
  return (
    <nav className="nav-main">
      <div className="main-logo btn">
        <h1 className="color-yellow">
          Crew <span className="color-blue"> Dev</span>
        </h1>
      </div>
      <span id="menu-icon">&#9776;</span>
      <div className="nav-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/team">Our Team</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
