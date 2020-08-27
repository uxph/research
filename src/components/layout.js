/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Nav from "./nav";
import Footer from "./footer";
import "./layout.css";
import "../assets/sass/main.scss";

const Layout = ({ children, activeUrl }) => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css"
      />

      <Nav activeUrl={activeUrl} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
