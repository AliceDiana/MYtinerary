import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "react-bootstrap";
const ToolBar = props => (
  <Navbar fixed="bottom" expand="lg" bg="dark" variant="dark">
    <Link to="/">
      <div className="icon">
        <p className="icon-text">
          Home
          <FontAwesomeIcon icon={faHome} />
        </p>
      </div>
    </Link>
    <div className="icon">
      <p className="icon-text">
        Settings
        <FontAwesomeIcon icon={faCog} />
      </p>
    </div>
    <div className="icon">
      <p className="icon-text">
        Favorites
        <FontAwesomeIcon icon={faHeart} />
      </p>
    </div>
  </Navbar>
);

export default ToolBar;
