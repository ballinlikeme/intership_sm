import React from "react";
import "../../styles/projectsSearch.css";

export const ProjectsSearch = () => {
  return (
    <div class="projects__search">
      <input
        type="text"
        placeholder="Search for a project..."
        id="input-search"
      />
    </div>
  );
};
