import React from "react";
import "../styles/projectsInfo.css";

export const ProjectsInfo = ({ text, title }) => {
  return (
    <div class="projects__info">
      <h2 class="projects__title">{title}</h2>
      <p class="projects__text">{text}</p>
    </div>
  );
};
