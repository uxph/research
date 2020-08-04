import React from "react";
import Member from "../atoms/member";
import memberList from "../../data/members.json";
const Members = () => {
  const members = memberList.map(({ name, position, bio, socials }) => {
    return (
      <Member name={name} position={position} bio={bio} socials={socials} />
    );
  });
  return (
    <>
      <section
        className="padding-bottom-96 padding-top-64"
        style={{ background: `#FAFAFC` }}
      >
        <div className="wrapper">
          <h2 className="text-center font-weight-bold">Team Members</h2>
          <div
            className="members d-flex flex-wrap justify-content-center 
          margin-left-64"
          >
            {members}
          </div>
        </div>
      </section>
    </>
  );
};

export default Members;
