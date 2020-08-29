import React from "react";
// import Modal from "./modal";

const Member = ({ name, position, socials, image }) => {
  const socmed = socials.map((social, key) => (
    <a
      href={social.link}
      target="blank"
      className="margin-x-8 gray socials"
      style={{
        fontSize: `20px`,
      }}
      key={key}
    >
      <i className={social.icon}></i>
    </a>
  ));

  return (
    <div className="width-256 margin-y-32 member">
      <img
        src={`${image}`}
        className="border-radius-384 mx-auto margin-bottom-16 d-block"
        style={{
          width: `160px`,
          height: `160px`,
          objectFit: `cover`,
        }}
        alt={name}
      />
      <h3 className="font-weight-bold text-center">{name}</h3>
      <p className="text-center blue">{position}</p>
      <div className="d-flex justify-content-center margin-bottom-16">
        {socmed}
      </div>
      <button className="d-block mx-auto outline">View profile</button>
    </div>
  );
};

export default Member;
