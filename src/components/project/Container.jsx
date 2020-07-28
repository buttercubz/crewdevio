import React, { useState, useEffect } from "react";
import ProjectCard from "../cards/projectCard.jsx";

function ProjectsContainer({ title, two }) {
  const [projects, setprojects] = useState([]);

  let list = [...projects];

  useEffect(() => {
    fetch("https://api.github.com/orgs/crewdevio/repos")
      .then((response) => response.json())
      .then((data) => setprojects(data));
  }, []);

  const random = () => Math.round(Math.random() * list.length);

  if (!projects.length) return <h1 className="loading">loading</h1>;

  if (two) {
    list = [projects[random()], projects[random()]];
  }

  return (
    <section>
      <h1 className="projects-title">
        {title ? title : "Our"}
        <span className="color-blue"> Projects</span>
      </h1>
      <div className="projects-container">
        {list.map((Info, index) => {
          return <ProjectCard Info={Info} key={index} />;
        })}
      </div>
    </section>
  );
}

export default ProjectsContainer;
