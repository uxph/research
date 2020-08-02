import React from "react";

const ProjectLayout = () => {
  return (
    <div className="clearfix" style={{ width: `575px` }}>
      <div className="float-left margin-right-24">
        <img
          src="/images/logos/uxph_icon.png"
          style={{ width: `160px`, height: `auto` }}
        />
      </div>
      <div>
        <h3 className="text-bold" style={{}}>
          Project S.O.U.P.
        </h3>
        <p className="margin-y-12" style={{ fontSize: `16px` }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          aliquam sollicitudin
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default ProjectLayout;
