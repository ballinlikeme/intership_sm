import React from "react";
import { ProjectsSearch } from "./ProjectsSearch";
import { ProjectsList } from "./ProjectsList";
import "../../styles/projects.css";

export const Projects = () => {
  return (
    <section class="main__projects projects">
      <div class="projects__container">
        <ProjectsSearch />
        <ProjectsList />
      </div>
    </section>
  );
};
