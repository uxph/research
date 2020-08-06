import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/home/hero";
import ProjectList from "../components/home/project-list";
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ProjectList />
  </Layout>
);

export default IndexPage;
