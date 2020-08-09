import React from "react";
const Hero = () => {
  return (
    <>
      <header
        className="padding-y-128"
        style={{
          backgroundColor: `#1A1A1A`,
          backgroundImage: `url(/images/cover_photo.svg)`,
          backgroundSize: `cover`,
          height: `390px`,
        }}
      >
        <div className="wrapper">
          <img
            src={"/images/logos/uxph_rp_white.png"}
            style={{ width: `235px`, margin: `0 auto`, display: `block` }}
          />
        </div>
      </header>
      <img
        src="/images/featured_project.svg"
        className="featured-project-thumbnail d-flex space-between"
      />
    </>
  );
};

export default Hero;
