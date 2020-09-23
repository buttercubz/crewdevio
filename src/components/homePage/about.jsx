import React from "react";

import Programming_rafiki from "../../static/images/Programming-rafiki.svg";

function About() {
  return (
    <section>
      <h1 className="about-title">
        About <span className="color-blue">Us</span>
      </h1>
      <div className="about">
        <p>
          We are a team of software developers from the{" "}
          <span className="color-yellow"> Dominican Republic </span> and we create
          different open source projects, in areas such as web,
          command line tools, backend and frontend.
        </p>
        <img src={Programming_rafiki} alt="img" />
      </div>
    </section>
  );
}

export default About;
