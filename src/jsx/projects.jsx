/* @jsx insertionJsx */

import insertionJsx from "insertion";

const projectList = [
  {
    name: "Trex",
    description:
      "is a Package management for deno similar to npm but maintaining the deno philosophy. packages are cached and only one import_map.json file is generated.",
    url: "https://github.com/crewdevio/Trex",
    imgPath: "./images//trex_logo.png",
  },
  {
    name: "Importql",
    description: "easy way to import and parse graphql files in deno.",
    url: "https://github.com/crewdevio/importql",
    imgPath: "./images/importql_logo.png",
  },
];

function Projects() {
  return (
    <section>
      <h1 class="projects-title">
        Our <span class="color-red">Projects</span>
      </h1>
      <div class="projects-container">
        {projectList.map(({ description, imgPath, name, url }) => {
          return (
            <div class="project-card">
              <img src={imgPath} class="project-logo" />
              <h3 class="project-name">{name}</h3>
              <p class="project-desc">{description}</p>
              <a href={url} class="project-link">
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
