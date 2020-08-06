import React, { useState } from "react";
import Modal from "./modal";
const Member = ({ name, position, bio, socials }) => {
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
      />
      <div
        style={{ width: `160px`, cursor: `pointer ` }}
        onClick={() => {
          hide === "hidden" ? setHidden("") : setHidden("hidden");
          overlay === "overlay" ? setOverlay("") : setOverlay("overlay");
          document.body.classList.add("stiff");
        }}
        className="member padding-top-24 margin-right-64"
      >
        <div className="padding-y-16">
          <div
            style={{
              backgroundImage: `url(/images/logos/uxph_icon.png)`,
              borderRadius: `100%`,
              backgroundSize: `cover`,
              width: `160px`,
              height: `160px`,
            }}
          ></div>

          <h4 className="font-weight-bold padding-y-8 text-center">{name}</h4>

          <h5
            className="text-center padding-bottom-8"
            style={{ color: `#777777` }}
          >
            {position}
          </h5>
          <div
            style={{ color: `gray` }}
            className="font-size-24 socials text-center"
          >
            {/* {social} */}
            <a href="/about">
              <i class="fab fa-facebook-square"></i>
            </a>{" "}
            <a href="/about">
              <i class="fab fa-linkedin"></i>
            </a>{" "}
            <a href="/about">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;
