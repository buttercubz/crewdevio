import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

function Navigation() {
  const [toggleButton, setToggleButton] = useState(false);
  const [menuClass, setMenuClass] = useState("nav-menu");

  useEffect(() => {
    var newClassName = toggleButton ? "nav-menu active" : "nav-menu";
    setMenuClass(newClassName);
  }, [toggleButton]);

  return (
    <nav className="nav-main">
      <div className="main-logo btn">
        <h1 className="color-yellow">
          <Link to="/">
            <span className="color-yellow">Crew </span>
            <span className="color-blue"> Dev</span>
          </Link>
        </h1>
      </div>
      <span
        id="menu-icon"
        onClick={() => {
          setToggleButton(!toggleButton);
        }}
      >
        &#9776;
      </span>
      <div className={menuClass}>
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
