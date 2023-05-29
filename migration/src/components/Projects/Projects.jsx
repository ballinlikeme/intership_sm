import React, { useState } from "react";
import { ProjectsSearch } from "./ProjectsSearch";
import { ProjectsList } from "./ProjectsList";
import "../../styles/projects.css";

export const Projects = () => {
  const [filter, setFilter] = useState("");

  return (
    <section class="main__projects projects">
      <div class="projects__container">
        <ProjectsSearch setFilter={setFilter} />
        <ProjectsList filter={filter} />
      </div>
    </section>
  );
};
