import React from "react";
import { Link } from "react-router-dom";

import "./css.css";

function ProjectCard({ProjectInfo}) {
  const { description, imgPath, name } = ProjectInfo;
  return (
    <div className="project-card">
      <img src={imgPath} className="project-logo" alt={`project ${name} logo`} />
      <h3 className="project-name">{name}</h3>
      <p className="project-desc">{description}</p>
      <Link className="project-link" to={`/projects/${name}`}>
        View project
      </Link>
    </div>
  );
}

export default ProjectCard;