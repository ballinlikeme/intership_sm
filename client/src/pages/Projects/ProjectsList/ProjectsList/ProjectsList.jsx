import React from "react";
import { ProjectsElement } from "../ProjectsElement/ProjectsElement";
import { ProjectsState } from "../ProjectsState/ProjectsState";
import { useGetProjectsQuery } from "../../../../lib/redux/api/projectsApi";
import "./ProjectsList.css";

export const ProjectsList = ({ keyWords }) => {
  const { isLoading, data, isError } = useGetProjectsQuery(keyWords);

  if (!isLoading && data && !data.length) {
    return <ProjectsState type="empty" />;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <ProjectsState type="error" />;
  }

  if (data && data.length) {
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
