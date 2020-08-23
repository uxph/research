import React, { useState } from "react";
import Modal from "./modal";
const Member = ({ name, position, bio, socials, image }) => {
  const [hide, setHidden] = useState("hidden");
  const [overlay, setOverlay] = useState("");
  return (
    <>
      <Modal
        hide={hide}
        setHidden={setHidden}
        overlay={overlay}
        setOverlay={setOverlay}
        name={name}
        position={position}
        bio={bio}
        socials={socials}
        image={image}
      />
      <div
        style={{ width: `160px`, cursor: `pointer ` }}
        onClick={() => {
          hide === "hidden" ? setHidden("") : setHidden("hidden");
          overlay === "overlay" ? setOverlay("") : setOverlay("overlay");
          document.body.classList.add("stiff");
        }}
        onKeyDown={() => {
          hide === "hidden" ? setHidden("") : setHidden("hidden");
          overlay === "overlay" ? setOverlay("") : setOverlay("overlay");
          document.body.classList.add("stiff");
        }}
        role="button"
        tabIndex="0"
        aria-label={`${name}`}
        className="member padding-top-24 margin-right-64"
      >
        <div className="padding-y-16">
          <div
            style={{
              backgroundImage: `url(${image})`,
              borderRadius: `100%`,
              backgroundSize: `cover`,
              width: `160px`,
              height: `160px`,
            }}
          ></div>

          <h4 className="font-weight-bold padding-y-8 text-center">{name}</h4>

          {/* <h5
            className="text-center padding-bottom-8"
            style={{ color: `#777777` }}
          >
            {position}
          </h5> */}
          <div
            style={{ color: `gray` }}
            className="font-size-24 socials text-center"
          >
            {/* {social} */}
            <a href="/about">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="/about">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/about">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;
