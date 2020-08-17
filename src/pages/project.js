import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { useLocation } from "@reach/router";
// import ProjectLayout from "../components/project/projectLayout";
import OtherProjects from "../components/project/otherProjects";
import data from "../data/project-data.json";

const Project = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const params = useQuery();

  const projectInfo = data.filter((project) => {
    return project.id.toString() === params.get("id");
  });

  const otherProjects = data.filter((project) => {
    return project.id.toString() !== params.get("id");
  });

  return (
    <Layout>
      <SEO title="Project" />
      {/* <ProjectLayout info={projectInfo[0]} /> */}
      <OtherProjects info={otherProjects} />
    </Layout>
  );
};

export default Project;
