import React from "react";
import { ProjectsElement } from "../ProjectsElement/ProjectsElement";
import { ProjectsEmpty } from "../ProjectsEmpty/ProjectsEmpty";
import { useGetProjectsQuery } from "../../../../lib/redux/api/projectsApi";
import "./ProjectsList.css";

export const ProjectsList = ({ keyWords }) => {
  const { isLoading, data } = useGetProjectsQuery(keyWords);

  if (!isLoading && !data.length) {
    return <ProjectsEmpty />;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (data.length) {
    return (
      <ul className="projects__list" id="content-list">
        {data.map((item) => (
          <ProjectsElement key={item.id} item={item} />
        ))}
      </ul>
    );
  }

  return <div></div>;
};
