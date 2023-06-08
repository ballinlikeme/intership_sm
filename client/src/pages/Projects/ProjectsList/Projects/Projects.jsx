import React, { useState } from "react";
import { ProjectsSearch } from "../ProjectsSearch/ProjectsSearch";
import { ProjectsList } from "../ProjectsList/ProjectsList";
import "../../Projects.css";

export const Projects = () => {
  const [keyWords, setKeyWords] = useState("");

  return (
    <section className="main__projects projects">
      <div className="projects__container">
        <ProjectsSearch setKeyWords={setKeyWords} />
        <ProjectsList keyWords={keyWords} />
      </div>
    </section>
  );
};
