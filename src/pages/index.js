import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Chip from "../components/atoms/chip";
import data from "../data/project-data.json";

const IndexPage = () => {
  // <Hero />
  // <FeaturedProject info={projectInfo[0]} />
  // <ProjectList />
  const projectInfo = data.filter((project) => {
    return project.featured === true;
  })[0];

  const tags = projectInfo.keywords.map((keyword) => (
    <Chip key={keyword} className="margin-right-4 margin-bottom-4">
      {keyword}
    </Chip>
  ));

  return (
    <Layout activeUrl="/">
      <SEO title="Home" />
      <header
        className="padding-y-96"
        style={{
          backgroundColor: `white`,
          backgroundImage: `url(/images/cover_elements.svg)`,
          backgroundRepeat: `no-repeat`,
          backgroundAttachment: `fixed`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
        }}
      >
        <div className="wrapper">
          <div className="d-flex justify-content-between">
            <div className="margin-right-32 min-width-256">
              <img
                src={projectInfo.squareImg}
                className="width-256 height-256 featured-image d-block"
                alt={projectInfo.title}
                style={{
                  position: "sticky",
                  top: "100px",
                }}
              />
            </div>
            <div>
              <h3 className="gray margin-bottom-12">{projectInfo.title}</h3>
              <h1 className="font-size-24 margin-bottom-4">
                {projectInfo.fullTitle}
              </h1>
              <div className="margin-bottom-16">
                <p>
                  <strong className="blue">Target date: </strong>
                  {projectInfo.date}
                </p>
              </div>
              {!projectInfo.finished && (
                <a
                  href={projectInfo.surveyLink}
                  className="button margin-bottom-48"
                >
                  Answer the survey
                </a>
              )}
              <h3 className="gray text-uppercase font-weight-bold margin-bottom-12 font-size-12">
                About this paper
              </h3>
              <p
                className="margin-bottom-32"
                style={{
                  fontSize: `0.875rem`,
                }}
              >
                {projectInfo.description}
              </p>
              <div className="d-flex">
                <div className="margin-right-16">
                  <em className="font-size-12 font-weight-bold blue">
                    Keywords:
                  </em>
                </div>
                <div>{tags}</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Layout>
  );
};

export default IndexPage;
