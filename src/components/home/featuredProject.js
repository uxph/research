import React from "react";
import { Link } from "gatsby";

// import projectList from "../../data/project-data.json";

const FeaturedProject = ({ info }) => {
  // const { info } = props;
  let paper = {};
  console.log(info);
  const keywords = info.keywords.map((keyword, index) => {
    return (
      <div
        className="tag tag-keyword tags-content text-center 
        padding-y-4 padding-x-12 margin-top-8 margin-right-4"
        key={index}
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
    <div className="wrapper padding-bottom-96 padding-top-32">
      <div className="featured-project padding-y-96 padding-x-32">
        <div className="inline-block">
          <div
            className="text-white float-left"
            // style={{ backgroundColor: `red` }}
          >
            <h1 style={{ width: `445px`, fontSize: `42px` }}>
              State of UX in the Philippines
            </h1>
          </div>
          <div className="float-left center-line"></div>
          <div className="float-left short-info text-white">
            <p>{paper.text}</p>
          </div>
          <Link
            className="button margin-left-32 featured"
            to={`${info.pageLink}?name=${info.slug}`}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
    // <div className="wrapper padding-bottom-96 padding-top-32 fp">
    //   <div className="featured-project">
    //     {/* <img
    //       src="/images/featured_project.svg"
    //       className="featured-project-thumbnail margin-bottom-48"
    //       alt="Project S.O.U.P"
    //     /> */}
    //     <h1 className="font-weight-bold">{info.title}</h1>
    //     <span
    //       style={{
    //         overflow: `hidden`,
    //       }}
    //       className="padding-top-16"
    //     >
    //       <h4
    //         className="padding-bottom-8 d-inline-block"
    //         style={{ color: `#C4C4C4`, marginRight: `20px` }}
    //       >
    //         Status:
    //       </h4>
    //       <div className="tag tag-ongoing text-center padding-y-4 padding-x-12 margin-top-12 d-inline-block">
    //         Ongoing
    //       </div>
    //     </span>
    //     <div className="padding-top-32">
    //       <div>
    //         <h4 className="font-weight-bold padding-bottom-48">
    //           {info.fullTitle}
    //         </h4>
    //         <h5 className="padding-bottom-8" style={{ color: `#C4C4C4` }}>
    //           {paper.status}
    //         </h5>
    //         <p>{paper.text}</p>
    //         <h5 className="font-weight-bold padding-y-24">
    //           Target Date: {info.date}
    //         </h5>
    //         <a className="button" href={paper.link}>
    //           {paper.linkStatus}
    //         </a>
    //         <div className="margin-top-48">
    //           <h4 className="font-weight-bold margin-bottom-8">Tags:</h4>
    //           {keywords}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default FeaturedProject;
