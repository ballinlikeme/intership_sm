import React from "react";
import { ProjectsElement } from "./ProjectsElement";
import { CONTENT_ITEMS } from "../data/content";
import { EmptyState } from "./EmptyState";
import "../styles/projectsList.css";

export const ProjectsList = ({ keyWords }) => {
  const itemsToDisplay = CONTENT_ITEMS.filter(
    (elem) =>
      elem.text.toLowerCase().includes(keyWords.toLowerCase()) ||
      elem.title.toLowerCase().includes(keyWords.toLowerCase())
  );

  if (!itemsToDisplay.length) {
    return <EmptyState />;
  }

  return (
    <ul className="projects__list" id="content-list">
      {itemsToDisplay.map((item) => (
        <ProjectsElement key={item.id} item={item} />
      ))}
    </ul>
  );
};
