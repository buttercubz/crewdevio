import LazyLoading from "../../../components/lazyLoading";
import logo from "Images/crewdev_logo.png";
import React from "react";
import "./css.css";

function ShowCase() {
  return (
    <section className="showcase">
      <h1 className="title">
        Crew
        <span className="color-red"> Dev</span>
      </h1>
      <div className="welcome-message">
        <LazyLoading className="logo" image={logo} alt="CrewDev logo" />
        <p>
          <span className="color-gray font-size-double">
            Open source first, Better world
          </span>
        </p>
      </div>
      <hr className="divider-right" />
    </section>
  );
}

export default ShowCase;
