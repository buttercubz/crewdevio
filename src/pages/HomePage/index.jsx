import React from "react";
import ShowCase from "./ShowCase";
import ProjectsSection from "./ProjectsSection";
import AboutSection from "./AboutSection";

import "./css.css"

const HomePage = () => (
  <div className="container">
    <ShowCase />
    <ProjectsSection two={2} title="two of our" />
    <AboutSection />
  </div>
);

export default HomePage;