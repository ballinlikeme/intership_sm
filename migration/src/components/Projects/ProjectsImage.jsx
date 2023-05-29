import React from "react";
import "../../styles/projectsImage.css";

export const ProjectsImages = ({ src, title }) => {
  return (
    <div class="projects__image">
      <img src={src} alt={title} />
    </div>
  );
};
