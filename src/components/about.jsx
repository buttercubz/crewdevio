/* @jsx insertionJsx */

import insertionJsx from "insertion";

import Programming_rafiki from "../images/Programming-rafiki.svg";

function About() {
  return (
    <section>
      <h1 class="about-title">
        About <span class="color-blue">Us</span>
      </h1>
      <div class="about">
        <p>
          We are a team of software developers from the{" "}
          <span class="color-yellow"> Dominican Republic </span> and we create
          different solutions for the node js and deno ecosystem,
          we create solutions for both frontend and backend.
        </p>
        <img src={Programming_rafiki} alt="img" />
      </div>
    </section>
  );
}

export default About;
