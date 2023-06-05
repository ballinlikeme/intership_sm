import React, { useState } from "react";
import { ProjectsSearch } from "./ProjectsSearch";
import { ProjectsList } from "./ProjectsList";
import "../styles/projects.css";

export const Projects = () => {
  const [filter, setFilter] = useState("");

  return (
    <section className="main__projects projects">
      <div className="projects__container">
        <ProjectsSearch setFilter={setFilter} />
        <ProjectsList filter={filter} />
      </div>
    </section>
  );
};
