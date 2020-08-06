import React from "react";
import ProjectLayout from "../atoms/projLayout";
const OtherProjects = ({ info }) => {
  const projects = info.map((project) => {
    return (
      <div className="padding-top-48 projects-content padding-x-16">
        <ProjectLayout title={project.title} id={project.id} />
      </div>
    );
  });
  return (
    <section className="padding-y-64" style={{ background: `#FAFAFC` }}>
      <div className="wrapper">
        <h2 className="font-weight-bold">Other Projects</h2>
        <div className="projects-wrapper">{projects}</div>
        {/* <ProjectLayout /> */}
      </div>
    </section>
  );
};

export default OtherProjects;
