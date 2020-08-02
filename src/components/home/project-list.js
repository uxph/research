import React from "react";
import ProjectLayout from "../atoms/projectLayoutHome";
import Filter from "../atoms/filter";
import projectList from "../../data/project-data.json";
const ProjectList = () => {
  const projects = projectList.map((project) => {
    return (
      <div className="padding-y-48">
        <ProjectLayout
          title={project.title}
          description={project.description}
          pageLink={project.pageLink}
        />
      </div>
    );
  });
  return (
    <>
      <section className="padding-y-96">
        <div className="wrapper">
          <Filter />
          {/* {projects} */}
        </div>
      </section>
    </>
  );
};
export default ProjectList;
