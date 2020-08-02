import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AboutUX from "../components/about/aboutComponent";
const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <AboutUX />
  </Layout>
);

export default IndexPage;
