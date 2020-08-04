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
    {/* <header>
      <div className="wrapper padding-y-96">
        <h1>UXPH Research Website</h1>
        <a href="/" className="button">
          UXPH Website
        </a>
      </div>
    </header> */}
  </Layout>
);

export default IndexPage;
