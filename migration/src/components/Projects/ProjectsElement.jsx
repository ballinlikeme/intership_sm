import React from "react";
import { ProjectsImages } from "../Projects/ProjectsImage";
import { ProjectsInfo } from "../Projects/ProjectsInfo";
import "../../styles/projectsElement.css";

export const ProjectsElement = ({ item }) => {
  return (
    <li class="projects__item">
      <div class="projetcs__body">
        <ProjectsImages src={item.imageSrc} title={item.title} />
        <ProjectsInfo text={item.text} title={item.title} />
      </div>
    </li>
  );
};
