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
          different solutions for the node js and deno ecosystem,
          we create solutions for both frontend and backend.
        </p>
        <img src={Programming_rafiki} alt="img" />
      </div>
    </section>
  );
}

export default About;
