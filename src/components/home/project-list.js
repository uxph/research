import React from "react";
import ProjectLayout from "../atoms/projectLayoutHome";
import Filter from "../atoms/filter";
import projectList from "../../data/project-data.json";
const ProjectList = () => {
  const projects = projectList.map((project) => {
    return (
      <div className="padding-y-48">
        <ProjectLayout
          id={project.id}
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
        <div className="wrapper box">
          <Filter />
          <div className="margin-left-64">{projects}</div>
        </div>
      </section>
    </>
  );
};
export default ProjectList;
