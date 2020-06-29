/* @jsx insertionJsx */

import insertionJsx from "insertion";

const projectList = [{
  name: "Trex",
  description: "is a Package management for deno similar to npm but maintaining the deno philosophy. packages are cached and only one import_map.json file is generated.",
  url: "https://github.com/crewdevio/Trex",
  imgPath: "./images//trex_logo.png"
}, {
  name: "Importql",
  description: "easy way to import and parse graphql files in deno.",
  url: "https://github.com/crewdevio/importql",
  imgPath: "./images/importql_logo.png"
}];

function Projects() {
  return insertionJsx(
    "section",
    null,
    insertionJsx(
      "h1",
      { "class": "projects-title" },
      "Our ",
      insertionJsx(
        "span",
        { "class": "color-red" },
        "Projects"
      )
    ),
    insertionJsx(
      "div",
      { "class": "projects-container" },
      projectList.map(({ description, imgPath, name, url }) => {
        return insertionJsx(
          "div",
          { "class": "project-card" },
          insertionJsx("img", { src: imgPath, "class": "project-logo" }),
          insertionJsx(
            "h3",
            { "class": "project-name" },
            name
          ),
          insertionJsx(
            "p",
            { "class": "project-desc" },
            description
          ),
          insertionJsx(
            "a",
            { href: url, "class": "project-link" },
            "visited out github repo"
          )
        );
      })
    )
  );
}

export default Projects;