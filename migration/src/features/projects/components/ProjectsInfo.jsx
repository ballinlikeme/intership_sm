import React from "react";
import "../styles/projectsInfo.css";

export const ProjectsInfo = ({ text, title }) => {
  return (
    <div className="projects__info">
      <h2 className="projects__title">{title}</h2>
      <p className="projects__text">{text}</p>
    </div>
  );
};
