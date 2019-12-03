import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "react-bootstrap";
const ToolBar = props => (
  <Navbar fixed="bottom" expand="lg" variant="light" bg="light">
    <Link to="/">
      <FontAwesomeIcon className="iHome" icon={faHome} />
    </Link>
  </Navbar>
);

export default ToolBar;
