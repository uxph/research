import React from "react";

const ProjectLayout = ({ title, description, pageLink }) => {
  return (
    <div className="clearfix" style={{ width: `575px` }}>
      <div className="float-left margin-right-24">
        <img
          src="/images/logos/uxph_icon.png"
          style={{ width: `160px`, height: `auto` }}
        />
      </div>
      <div>
        <h3 className="font-weight-bold">{title}</h3>
        <p className="margin-y-12" style={{ fontSize: `16px` }}>
          {description}
        </p>
        <a class="button" href={pageLink}>
          Read More
        </a>
      </div>
    </div>
  );
};

export default ProjectLayout;
