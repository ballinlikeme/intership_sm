import React from "react";
import { Layout } from "../components/Layout";
import { Welcome } from "../components/Welcome";
import { Projects } from "../components/Projects";

export const ProjectsPage = () => {
  return (
    <Layout>
      <Welcome />
      <Projects />
    </Layout>
  );
};
