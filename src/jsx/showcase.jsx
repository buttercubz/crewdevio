/* @jsx insertionJsx */

import insertionJsx from "insertion";

function ShowCase() {
  return (
    <section>
      <div class="showcase">
        <h1 class="title">
          Crew
           <span class="color-red"> Dev</span>
        </h1>
        <div class="welcome-message">
          <img class="logo" src="./images/logo.png" alt="CrewDev logo" />
          <p>
            <span class="color-red font-size-double">
              open source first, better world
            </span>
          </p>
        </div>
        <hr class="divider-right" />
      </div>
    </section>
  );
}

export default ShowCase;
