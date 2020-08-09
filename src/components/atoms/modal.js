import React from "react";

const Modal = ({
  hide,
  setHidden,
  overlay,
  setOverlay,
  name,
  position,
  bio,
}) => {
  return (
    <>
      <div
        id={`${overlay === "overlay" ? "overlay" : ""}`}
        onClick={() => {
          overlay === "overlay" ? setOverlay("") : setOverlay("overlay");
          hide === "hidden" ? setHidden("") : setHidden("hidden");
          document.body.classList.remove("stiff");
        }}
        onKeyDown={() => {
          overlay === "overlay" ? setOverlay("") : setOverlay("overlay");
          hide === "hidden" ? setHidden("") : setHidden("hidden");
          document.body.classList.remove("stiff");
        }}
        className={` ${hide === "hidden" ? "hidden" : ""}`}
        role="button"
        aria-label={`${name}`}
        tabIndex="0"
      ></div>
      <div
        id="modal"
        className={` ${hide === "hidden" ? "hidden" : ""}
        padding-y-64 padding-x-48 border-radius-8 width-768 mx-auto margin-y-64 `}
      >
        <div id="modal-content">
          <div
            style={{
              backgroundImage: `url(/images/logos/uxph_icon.png)`,
              borderRadius: `100%`,
              backgroundSize: `cover`,
              width: `160px`,
              height: `160px`,
            }}
          ></div>
          <div className="margin-left-32">
            <h3 className="font-weight-bold padding-bottom-8">{name}</h3>
            <h5 style={{ color: `#777777` }}>{position}</h5>
            <p className="margin-y-24" style={{ width: `30rem` }}>
              {bio}
            </p>
            <div
              style={{ color: `gray`, letterSpacing: `15px` }}
              className="font-size-24 socials"
            >
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
      </div>
    </>
  );
};

export default Modal;
