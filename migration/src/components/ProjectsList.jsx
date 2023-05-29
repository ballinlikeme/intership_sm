import React from "react";
import { ProjectsElement } from "./ProjectsElement";
import { CONTENT_ITEMS } from "../mockups/content";
import "../styles/projectsList.css";

export const ProjectsList = () => {
  return (
    <ul class="projects__list" id="content-list">
      {CONTENT_ITEMS.map((item) => (
        <ProjectsElement key={item.id} item={item} />
      ))}
    </ul>
  );
};
