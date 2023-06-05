import React from "react";
import { ProjectsImages } from "./ProjectsImage";
import { ProjectsInfo } from "./ProjectsInfo";
import "../styles/projectsElement.css";

export const ProjectsElement = ({ item }) => {
  return (
    <li className="projects__item">
      <div className="projetcs__body">
        <ProjectsImages src={item.imageSrc} title={item.title} />
        <ProjectsInfo text={item.text} title={item.title} />
      </div>
    </li>
  );
};
