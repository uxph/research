import React from "react";

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
      <a href={`/project?id=${id}`} className="button">
        Read More
      </a>
    </div>
  );
};

export default ProjectLayout;
