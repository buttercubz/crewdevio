import React from "react";
import ShowCase from "./showcase.jsx";
import ProjectsSection from "../project/Section.jsx";
import AboutSection from "./about.jsx";

const HomePage = () => (
  <div className="container">
    <ShowCase />
    <ProjectsSection two={true} title="two of our" />
    <AboutSection />
  </div>
);

export default HomePage;
