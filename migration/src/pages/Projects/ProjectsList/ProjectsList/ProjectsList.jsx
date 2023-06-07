import React from "react";
import { ProjectsElement } from "../ProjectsElement/ProjectsElement";
import { CONTENT_ITEMS } from "../../../../data/content";
import { ProjectsEmpty } from "../ProjectsEmpty/ProjectsEmpty";
import "./ProjectsList.css";

export const ProjectsList = ({ keyWords }) => {
  const itemsToDisplay = CONTENT_ITEMS.filter(
    (elem) =>
      elem.text.toLowerCase().includes(keyWords.toLowerCase()) ||
      elem.title.toLowerCase().includes(keyWords.toLowerCase())
  );

  if (!itemsToDisplay.length) {
    return <ProjectsEmpty />;
  }

  return (
    <ul className="projects__list" id="content-list">
      {itemsToDisplay.map((item) => (
        <ProjectsElement key={item.id} item={item} />
      ))}
    </ul>
  );
};
