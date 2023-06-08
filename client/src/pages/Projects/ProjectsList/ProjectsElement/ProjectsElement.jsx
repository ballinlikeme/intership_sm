import React from "react";
import "./ProjectsElement.css";

export const ProjectsElement = ({ item }) => {
  const { imageSrc, title, text } = item;

  return (
    <li className="projects__item">
      <div className="projects__body">
        <div className="projects__image">
          <img src={imageSrc} alt={title} />
        </div>
        <div className="projects__info">
          <h2 className="projects__title">{title}</h2>
          <p className="projects__text">{text}</p>
        </div>
      </div>
    </li>
  );
};
