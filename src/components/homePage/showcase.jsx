import LazyLoading from "../lazyloading.jsx";
import logo from "../../static/images/crewdev_logo.png";
import React from "react";

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
