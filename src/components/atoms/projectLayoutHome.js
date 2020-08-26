import React from "react";
import { Link } from "gatsby";

const ProjectLayout = ({ id, title, description, pageLink }) => {
  // console.log({ pageLink });
  return (
    <div className="d-md-flex">
      <div className="margin-right-24">
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
        <p
          className="margin-y-12 margin-bottom-24"
          style={{
            overflow: `hidden`,
            height: `100px`,
            fontSize: `16px`,
            lineHeight: `1.5rem`,
          }}
        >
          {description}
        </p>
        <Link className="button" to={`${pageLink}?id=${id}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ProjectLayout;
