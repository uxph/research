import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AboutUX from "../components/about/aboutComponent";
import Members from "../components/about/members";

const About = () => {
  return (
    <Layout activeUrl="/about">
      <SEO title="About" />
      <AboutUX />
      <Members />
    </Layout>
  );
};

export default About;
