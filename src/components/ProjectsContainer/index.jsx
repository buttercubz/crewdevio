import React, { Fragment } from "react";
import ProjectCard from "Components/ProjectCard";
import { projectList } from "StaticData/index";

import "./css.css";

function ProjectsContainer({ amout, title }) {
  amout--;
  let list = projectList.sort(() => Math.random() * 0.5);
  if (amout && amout < list.length) {
    list = list.slice(0, amout);
  }
  return (
    <section>
      <h1 className="projects-title">
        {title ? title : "Our"}
        <span className="color-blue"> Projects</span>
      </h1>
      <div className="projects-container">
        {list.map((ProjectInfo, index) => {
          return <ProjectCard ProjectInfo={ProjectInfo} key={index} />;
        })}
      </div>
    </section>
  );
}

export default ProjectsContainer;
