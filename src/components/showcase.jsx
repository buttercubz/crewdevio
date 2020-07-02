/* @jsx insertionJsx */

import insertionJsx from "insertion";

import logo from "../images/crewdev_logo.png";

function ShowCase() {
  return (
    <section class="showcase">

        <h1 class="title">
          Crew
          <span class="color-red"> Dev</span>
        </h1>
        <div class="welcome-message">
          <img class="logo" src={logo} alt="CrewDev logo" />
          <p>
            <span class="color-gray font-size-double">
              Open source first, Better world
            </span>
          </p>
        </div>
        <hr class="divider-right" />
    </section>
  );
}

export default ShowCase;
