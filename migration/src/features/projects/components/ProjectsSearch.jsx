import React from "react";
import { Input } from "../../../ui/Input";
import { debounce } from "../../../utils/debounce";
import "../styles/projectsSearch.css";

export const ProjectsSearch = ({ setKeyWords }) => {
  return (
    <div className="projects__search">
      <Input
        onChange={debounce((e) => setKeyWords(e.target.value), 300)}
        type="text"
        placeholder="Search for a project..."
      />
    </div>
  );
};
