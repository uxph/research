import React from "react";
import ProjectLayout from "./projectLayout";
const Hero = () => {
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
        <ProjectLayout />
      </section>
    </>
  );
};

export default Hero;
