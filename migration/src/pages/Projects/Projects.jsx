import React from "react";
import { Layout } from "components/Layout/Layout";
import { Welcome } from "./Welcome/Welcome";
import { ProjectsList } from "./ProjectsList";

export const Projects = () => {
  return (
    <Layout>
      <Welcome />
      <ProjectsList />
    </Layout>
  );
};
