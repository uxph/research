import React from "react";
import ProjectLayout from "../atoms/projectLayoutHome";
import projectList from "../../data/project-data.json";
const Hero = () => {
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
      <header
        class="wrapper padding-y-96"
        style={{ backgroundColor: `#212427` }}
      >
        {/* <img src={"/images/logos/uxph_logo.svg"} id="nav-logo" alt="UXPH" /> */}
        <h1 style={{ color: `white` }}>Project Soup</h1>
      </header>
      <section class="wrapper padding-y-96">
        {projects}
        {/* <ProjectLayout /> */}
      </section>
    </>
  );
};

export default Hero;
