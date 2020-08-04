import React from "react";

const ProjectLayout = ({ title, description, pageLink }) => {
  return (
    <div className="clearfix">
      <div className="float-left margin-right-24">
        <div
          style={{
            backgroundImage: `url(/images/logos/uxph_icon.png)`,
            backgroundSize: `cover`,
            width: `160px`,
            height: `160px`,
          }}
        ></div>
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
