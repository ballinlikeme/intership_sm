import React from "react";
import { debounce } from "../../utils/debounce";
import "../../styles/projectsSearch.css";

export const ProjectsSearch = ({ setFilter }) => {
  return (
    <div class="projects__search">
      <input
        onChange={debounce((e) => setFilter(e.target.value), 300)}
        type="text"
        placeholder="Search for a project..."
        id="input-search"
      />
    </div>
  );
};
