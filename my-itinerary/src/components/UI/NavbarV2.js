import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const NavBarV2 = props => (
  <Navbar
    fixed="top"
    collapseOnSelect
    expand="xs"
    bg="dark"
    variant="dark"
    className="navHeaderV2"
  >
    <Nav>
      <ul className="navbar-nav ml-auto nav-flex-icons">
        <li className="nav-item avatar dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faUser} />
          </a>
          <ul
            className="dropdown-menu dropdown-secondary"
            aria-labelledby="navbarDropdownMenuLink-55"
          >
            <li>
              <Link to="/logging" className="dropdown-item">
                Log In
              </Link>
            </li>
            <li>
              <Link to="/creating" className="dropdown-item">
                Create Account
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </Nav>

    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav>
        <Link to="/"> Home </Link>
        <Link to="/cities"> Cities</Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBarV2;
