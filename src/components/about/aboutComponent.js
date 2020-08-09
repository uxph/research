import React from "react";
import { about, objectives } from "../../data/about.json";
const AboutUX = () => {
  const objective = objectives.map(({ number, objective }, index) => {
    return <li key={index}>{objective}</li>;
  });
  return (
    <>
      <header className="padding-top-96">
        <div className="wrapper">
          <h2 className="font-weight-bold">About UXPH Research</h2>
          <p className="margin-y-24 ">{about.description}</p>
          <p>Specifically, UXPH Research team shall:</p>
          <ul className="margin-y-24 margin-left-48">{objective}</ul>
        </div>
      </header>
    </>
  );
};

export default AboutUX;
