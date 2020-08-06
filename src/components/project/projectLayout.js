import React, { useState } from "react";
// import projectList from "../../data/project-data.json";

const ProjectLayout = (props) => {
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
        linkStatus: "Survey Link",
        text: info.description,
      };
    }
  };
  paperStatus();
  return (
    <div className="wrapper padding-y-96">
      <h2 className="font-weight-bold">{info.title}</h2>
      <div
        className="tag tag-ongoing text-center 
       padding-y-4 padding-x-12 margin-top-12"
      >
        Ongoing
      </div>
      <div className="padding-top-32 project-content d-md-flex">
        <div className="margin-right-32 ">
          <div
            style={{
              backgroundImage: `url(images/working.jpg)`,
              backgroundSize: `contain`,
              backgroundRepeat: `no-repeat`,
              width: `360px`,
              height: `205px`,
              borderRadius: `16px`,
              backgroundColor: `black`,
            }}
          ></div>
          <div className="padding-top-16 tags-wrapper">
            <h4 className="font-weight-bold margin-right-12 tags-content">
              Tags:
            </h4>
            {keywords}
          </div>
        </div>

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
        </div>
      </div>
    </div>
  );
};

export default ProjectLayout;
