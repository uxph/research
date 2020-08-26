import React from "react";
import { Link } from "gatsby";
const ProjectLayout = ({ title, id }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(images/working.jpg)`,
          backgroundSize: `contain`,
          backgroundRepeat: `no-repeat`,
          width: `250px`,
          height: `140px`,
          backgroundColor: `black`,
        }}
        className="border-radius-8"
      ></div>
      <h5 className="font-weight-bold padding-y-8">{title}</h5>
      <Link to={`/project?id=${id}`} className="button">
        Read More
      </Link>
    </div>
  );
};

export default ProjectLayout;
