import React from "react";

const Nav = () => {
  return (
    <>
      <nav id="main-nav" className="bg-white shadow-sm">
        <div className="wrapper d-flex justify-content-between align-items-center">
          <img
            src={"/images/icons/menu_options.svg"}
            id="menu-bar"
            width="30"
            alt="Menu Options"
          />

          <a href="/" className="d-flex align-items-center">
            <img
              src={"/images/logos/uxph_rp_light.svg"}
              id="nav-logo"
              alt="UXPH"
              style={{
                width: `250px`,
              }}
            />
          </a>
          <ul>
            <li>
              <a href="/">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/about">
                <span>About</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <nav id="mobile-nav">
        <img
          src={"images/icons/close.svg"}
          id="menu-close"
          width="30"
          alt="Close"
        />
        <br />
        <br />
        <br />
        <ul>
          <a href="/">
            <li>Home</li>
          </a>
          <li>
            About Us
            <div className="subnav rounded-bottom margin-top-12">
              <a href="/about">
                <p className="text-light padding-x-16 padding-y-8">
                  About UXPH
                </p>
              </a>
              <a href="/organizing-members">
                <p className="text-light padding-x-16 padding-y-8 rounded-bottom">
                  Organizing Members
                </p>
              </a>
            </div>
          </li>
          <a href="/events">
            <li>Events</li>
          </a>
          <li>
            Get Involved
            <div className="subnav rounded-bottom margin-top-12">
              <a href="/sponsorships">
                <p className="text-light padding-x-16 padding-y-8">
                  Be a partner
                </p>
              </a>
              <a href="/volunteers">
                <p className="text-light padding-x-16 padding-y-8 rounded-bottom">
                  Be a volunteer
                </p>
              </a>
            </div>
          </li>
          <a href="/blog">
            <li>Blog</li>
          </a>
          <a href="/faq">
            <li>FAQ</li>
          </a>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
