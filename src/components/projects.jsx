/* @jsx insertionJsx */

import insertionJsx from "insertion";

import trexLogo from "../images/trex_logo.png";
import importqlLogo from "../images/importql_logo.png";

const projectList = [
  {
    name: "Trex",
    description:
      "is a Package management for deno similar to npm but maintaining the deno philosophy. packages are cached and only one import_map.json file is generated.",
    url: "https://github.com/crewdevio/Trex",
    imgPath: trexLogo,
  },
  {
    name: "Importql",
    description: "easy way to import and parse graphql files in deno.",
    url: "https://github.com/crewdevio/importql",
    imgPath: importqlLogo,
  },
];

function Projects() {
  return (
    <section>
      <h1 class="projects-title">
        Our <span class="color-blue">Projects</span>
      </h1>
      <div class="projects-container">
        {projectList.map(({ description, imgPath, name, url }, index) => {
          return (
            <div class="project-card">
              <img src={imgPath} class="project-logo" alt={index} />
              <h3 class="project-name">{name}</h3>
              <p class="project-desc">{description}</p>
              <a href={url} class="project-link" target="blank">
                visited out github repo
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
