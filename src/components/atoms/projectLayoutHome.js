import React from "react";
import { Link } from "gatsby";

const ProjectLayout = ({ id, title, description, pageLink }) => {
  // console.log({ pageLink });
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
        <Link class="button" to={`${pageLink}?id=${id}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ProjectLayout;
