import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, NavItem } from "react-bootstrap";
const ToolBar = props => (
  <Navbar
    className="nav_links"
    fixed="bottom"
    expand="lg"
    variant="light"
    bg="light"
  >
    <Link to="/">
      <FontAwesomeIcon icon={faHome} /> Home
    </Link>
    <Link to="/cities">
      <FontAwesomeIcon icon={faCity} /> Cities
    </Link>
  </Navbar>
);

export default ToolBar;
