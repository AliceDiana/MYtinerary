import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
      <ul class="navbar-nav ml-auto nav-flex-icons">
        <li class="nav-item avatar dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faUser} />
          </a>
          <ul
            class="dropdown-menu dropdown-secondary"
            aria-labelledby="navbarDropdownMenuLink-55"
          >
            <li>
              <Link to="/logging" class="dropdown-item">
                Log In
              </Link>
            </li>
            <li>
              <Link to="/creating" class="dropdown-item">
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
