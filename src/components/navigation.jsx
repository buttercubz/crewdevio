import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [toggleButton, setToggleButton] = useState(false);
  const [menuClass, setMenuClass] = useState("nav-menu");
  const toggleRef = useRef(null);
  const wrapperRef = useRef(null);

  const debounceToggle = () =>
    setTimeout(() => setToggleButton(!toggleButton), 300);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target) &&
        !toggleRef.current.contains(event.target)
      ) {
        setToggleButton(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  useEffect(() => {
    setMenuClass(toggleButton ? "nav-menu active" : "nav-menu");
  }, [toggleButton]);

  return (
    <nav className="nav-main glass animate__animated animate__fadeIn">
      <div className="main-logo btn">
        <h1 className="color-yellow">
          <Link to="/">
            <span className="color-yellow logo-letter">Crew </span>
            <span className="color-blue logo-letter"> Dev</span>
          </Link>
        </h1>
      </div>
      <span
        id="menu-icon"
        onClick={() => {
          setToggleButton(!toggleButton);
        }}
        ref={toggleRef}
      >
        &#9776;
      </span>
      <div className={menuClass} ref={wrapperRef}>
        <ul className="">
          <li>
            <Link to="/" onClick={debounceToggle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={debounceToggle}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/team" onClick={debounceToggle}>
              Our Team
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
