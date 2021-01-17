import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ Info = {} }) {
  const { description, name } = Info;
  if (!description && !name) return;

  return (
    <div className="project-card glass">
      <h3 className="project-name">{name}</h3>
      <p className="project-desc">{description}</p>
      <Link className="project-link" to={`/projects/${name}`}>
        View project
      </Link>
    </div>
  );
}

export default ProjectCard;
