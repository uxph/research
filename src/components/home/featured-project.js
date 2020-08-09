import React from "react";
// import projectList from "../../data/project-data.json";

const FeaturedProject = (props) => {
  const { info } = props;
  let paper = {};
  const keywords = info.keywords.map((keyword) => {
    return (
      <div
        className="tag tag-keyword tags-content text-center 
        padding-y-4 padding-x-12 margin-top-8  margin-right-4"
      >
        {keyword}
      </div>
    );
  });
  const paperStatus = () => {
    if (info.finished === true) {
      paper = {
        status: "Abstract",
        link: info.downloadLink,
        linkStatus: "Download",
        text: info.abstract,
      };
    } else {
      paper = {
        status: "About this paper",
        link: info.surveyLink,
        linkStatus: "Take our survey",
        text: info.description,
      };
    }
  };
  paperStatus();
  return (
    <div className="wrapper padding-bottom-96 padding-top-32 fp">
      <div className="featured-project">
        <h1 className="font-weight-bold ">{info.title}</h1>
        <span
          style={{
            overflow: `hidden`,
          }}
          className="padding-top-16"
        >
          <h4
            className="padding-bottom-8 d-inline-block"
            style={{ color: `#C4C4C4`, marginRight: `20px` }}
          >
            Status:
          </h4>
          <div
            className="tag tag-ongoing text-center 
       padding-y-4 padding-x-12 margin-top-12 d-inline-block"
          >
            Ongoing
          </div>
        </span>
        <div className="padding-top-32">
          <div>
            <h4 className="font-weight-bold padding-bottom-24">
              {info.fullTitle}
            </h4>
            <h5 className="padding-bottom-8" style={{ color: `#C4C4C4` }}>
              {paper.status}
            </h5>
            <p className="width-512">{paper.text}</p>
            <h5 className="font-weight-bold padding-y-24">
              Target Date: {info.date}
            </h5>
            <a className="button" href={paper.link}>
              {paper.linkStatus}
            </a>
            <div className="padding-top-16">
              <h4 className="font-weight-bold margin-right-12 ">Tags:</h4>
              {keywords}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
