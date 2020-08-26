import React from "react";

const Filter = () => {
  return (
    <div id="filter">
      <input
        type="text"
        placeholder="Search research projects.."
        id="search-bar"
        className="padding-x-16 padding-y-8 border-radius-4 margin-bottom-24"
      />
      <div className="padding-y-24 options">
        <h5
          className="padding-bottom-16"
          style={{
            borderBottom: `thin solid #c4c4c4`,
          }}
        >
          Categories
        </h5>
        <p>All Projects</p>
        <p>Ongoing Projects</p>
        <p>Finished Projects</p>
      </div>
      <div className="padding-bottom-24 options">
        <h5
          className="padding-bottom-16"
          style={{
            borderBottom: `thin solid #c4c4c4`,
          }}
        >
          Year
        </h5>
        <p>2020</p>
      </div>
    </div>
  );
};

export default Filter;
