import React, { useState } from "react";

const Nav = ({ activeUrl }) => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <nav id="main-nav" className="bg-white shadow-sm">
        <div className="wrapper d-flex justify-content-between align-items-center">
          <img
            src={"/images/icons/menu_options.svg"}
            id="menu-bar"
            width="30"
            alt="Menu Options"
            onClick={() => setShowNav(true)}
          />

          <a href="/" className="d-flex align-items-center">
            <img
              src={"/images/logos/uxph_rp_light.svg"}
              id="nav-logo"
              alt="UXPH"
              className="width-192"
            />
          </a>
          <ul>
            <li>
              <a href="/">
                <span className={activeUrl === "/" ? "active" : null}>
                  Home
                </span>
              </a>
            </li>
            <li>
              <a href="/about">
                <span className={activeUrl === "/about" ? "active" : null}>
                  About
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <nav id="mobile-nav" className={showNav ? `show` : null}>
        <img
          src={"/images/icons/close.svg"}
          id="menu-close"
          width="30"
          alt="Close"
          onClick={() => setShowNav(false)}
        />
        <br />
        <br />
        <br />
        <ul>
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/about">
            <li>About</li>
          </a>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
