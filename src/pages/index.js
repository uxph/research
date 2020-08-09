import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/home/hero";
import FeaturedProject from "../components/home/featured-project";
import data from "../data/project-data.json";

const IndexPage = () => {
  const projectInfo = data.filter((project) => {
    return project.featured === true;
  });

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <FeaturedProject info={projectInfo[0]} />
      {/* <ProjectList /> */}
    </Layout>
  );
};

export default IndexPage;
