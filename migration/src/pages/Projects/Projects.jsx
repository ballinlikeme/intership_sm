import React from "react";
import { Layout } from "components/Layout/Layout";
import { Welcome } from "./Welcome";
import { Projects as ProjectsList } from "features/projects";

export const Projects = () => {
  return (
    <Layout>
      <Welcome />
      <ProjectsList />
    </Layout>
  );
};
