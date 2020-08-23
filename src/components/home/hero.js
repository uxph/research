import React from "react";
const Hero = () => {
  return (
    <>
      <header
        className="padding-y-128"
        style={{
          backgroundColor: `white`,
          backgroundImage: `url(/images/cover_elements.svg)`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          // marginTop: `-50px`,
          height: `600px`,
        }}
      >
        <div className="wrapper">
          <img
            src={"/images/logos/uxph_rp_light.svg"}
            style={{ width: `350px`, margin: `auto`, display: `block` }}
            alt="UXPH Research Logo"
          />
          <div className="padding-top-24 text-center">
            <p className="padding-x-192">
              Welcome to the Philippines' largest community of individuals
              passionate about the realm of UX (User Experience), and all things
              related.
            </p>
            <a className="button research text-center margin-top-24" href="/">
              BE A CONTRIBUTOR
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
