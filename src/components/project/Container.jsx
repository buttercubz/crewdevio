import {
  SolarSystemLoading,
  WindMillLoading,
  EatLoading,
  RollBoxLoading,
  MeteorRainLoading,
} from "react-loadingg";
import React, { useState, useEffect } from "react";
import ProjectCard from "../cards/projectCard.jsx";

const color = "#ffca18";

export const Loading = () =>
  [
    <SolarSystemLoading color={color} />,
    <WindMillLoading color={color} />,
    <EatLoading color={color} />,
    <RollBoxLoading color={color} />,
    <MeteorRainLoading color={color} />,
  ].sort(() => Math.random() - 0.5)[0];

function ProjectsContainer({ title, two }) {
  const [projects, setprojects] = useState([]);

  let list = [...projects];

  useEffect(() => {
    fetch("https://api.github.com/orgs/crewdevio/repos")
      .then((response) => response.json())
      .then((data) => setprojects(data ?? []));
  }, []);

  if (!projects.length) return <Loading />;

  if (two) {
    const [one, two] = list.sort(() => Math.random() - 0.5);
    list = [one, two];
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
