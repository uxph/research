import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div id="copyright">
          <img
            src={"/images/logos/uxph_logo.svg"}
            id="footer-logo"
            alt="UXPH Logo"
          />
          <p className="font-size-16" id="copy-content">
            &copy; Copyright 2020.
          </p>
          <a
            href="https://uxph.org/code-of-conduct"
            target="blank"
            rel="noreferrer"
          >
            <p className="blue font-size-16" id="coc">
              View Code of Conduct
            </p>
          </a>
          <br />
          <a href="https://www.netlify.com" target="blank" rel="noreferrer">
            <p className="font-size-12">This site is powered by Netlify</p>
          </a>
        </div>
        <div id="social-media">
          <h2>Connect with us</h2>
          <div className="column-content">
            <div>
              <div className="content-wrapper">
                <div>
                  <i className="fab fa-facebook-square font-size-24 mr-2"></i>
                  <h5>
                    Facebook:{" "}
                    <a
                      href="https://www.facebook.com/uxphofficial/"
                      target="_blank"
                      rel="noreferrer"
                      className="blue"
                    >
                      <strong className="footer-links">uxphofficial</strong>
                    </a>
                  </h5>
                </div>
              </div>
              <div className="content-wrapper">
                <div>
                  <i className="fab fa-facebook-square font-size-24 mr-2"></i>
                  <h5>
                    Facebook Group:{" "}
                    <a
                      href="https://www.facebook.com/groups/uxphofficial/"
                      target="_blank"
                      rel="noreferrer"
                      className="blue"
                    >
                      <strong className="footer-links">
                        groups/uxphofficial
                      </strong>
                    </a>
                  </h5>
                </div>
              </div>
              <div className="content-wrapper">
                <div>
                  <i className="fab fa-linkedin font-size-24 mr-2"></i>
                  <h5>
                    LinkedIn:{" "}
                    <a
                      href="https://www.linkedin.com/company/uxph/"
                      target="_blank"
                      rel="noreferrer"
                      className="blue"
                    >
                      <strong className="footer-links">company/uxph</strong>
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div>
              <div className="content-wrapper">
                <div>
                  <i className="fab fa-instagram font-size-24 mr-2"></i>
                  <h5>
                    Instagram:{" "}
                    <a
                      href="https://instagram.com/uxphofficial"
                      target="_blank"
                      rel="noreferrer"
                      className="blue"
                    >
                      <strong className="footer-links">uxphofficial</strong>
                    </a>
                  </h5>
                </div>
              </div>
              <div className="content-wrapper">
                <div>
                  <i className="fab fa-twitter font-size-24 mr-2"></i>
                  <h5>
                    Twitter:{" "}
                    <a
                      href="https://twitter.com/uxphofficial"
                      target="_blank"
                      rel="noreferrer"
                      className="blue"
                    >
                      <strong className="footer-links">uxphofficial</strong>
                    </a>
                  </h5>
                </div>
              </div>
              <div className="content-wrapper">
                <div>
                  <i className="fas fa-envelope font-size-24 mr-2"></i>
                  <h5>
                    Contact us:{" "}
                    <a
                      href="mailto:info@uxph.org"
                      target="_blank"
                      rel="noreferrer"
                      className="blue"
                    >
                      <strong className="footer-links">info@uxph.org</strong>
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="back-to-top" className="hide">
        <i className="fas fa-arrow-up"></i>
      </div>
    </footer>
  );
};

export default Footer;
