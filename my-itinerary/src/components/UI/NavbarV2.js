import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";

const NavBarV2 = props => (
  <Navbar
    fixed="top"
    expand="xs"
    bg="dark"
    variant="dark"
    className="navHeaderV2"
  >
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav>
        <Link to="/"> Home </Link>
        <Link to="/cities"> Cities</Link>
        <Link to="/users"> Register</Link>
        <Link to="/auth"> Log In</Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBarV2;
