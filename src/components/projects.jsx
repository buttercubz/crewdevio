import React from "react";
import { Link } from "react-router-dom";
import trexLogo from "../images/trex_logo.png";
import importqlLogo from "../images/importql_logo.png";

const projectList = [
  {
    name: "Trex",
    description:
      "is a Package management for deno similar to npm but maintaining the deno philosophy.",
    url: "https://github.com/crewdevio/Trex",
    imgPath: trexLogo,
  },
  {
    name: "Importql",
    description: "easy way to import and parse graphql files in deno.",
    url: "https://github.com/crewdevio/importql",
    imgPath: importqlLogo,
  },
].sort(() => Math.random() * 0.5);

function Projects({ two, title }) {
  const list = two ? [projectList[0], projectList[1]] : projectList;
  return (
    <section>
      <h1 className="projects-title">
        {title ? title : "Our"}
        <span className="color-blue"> Projects</span>
      </h1>
      <div className="projects-container">
        {list.map(({ description, imgPath, name }, index) => {
          return (
            <div className="project-card" key={index}>
              <img src={imgPath} className="project-logo" alt={index} />
              <h3 className="project-name">{name}</h3>
              <p className="project-desc">{description}</p>
              <Link className="project-link" to={`/projects/${name}`}>
                View project
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
