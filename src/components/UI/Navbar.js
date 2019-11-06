import React from "react";
import { Navbar } from "react-bootstrap";

const HeaderNav = props => (
  <Navbar className="navHeader" fixed="top" expand="lg">
    <img
      alt="logo"
      src={require("../../Images/logo.png")}
      className="logoNav"
    />
  </Navbar>
);

export default HeaderNav;
