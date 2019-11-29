import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import LogOut from "./Auth/LogOut";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class NavBarV2 extends Component {
  // state = isOpen.false;

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <NavItem>
          <span>
            <strong>{user ? `Welcome ${user.name}` : ""}</strong>
          </span>
        </NavItem>
        <LogOut />
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <Link to="/users"> Register</Link>
        <Link to="/auth"> Log In</Link>
      </Fragment>
    );
    return (
      <React.Fragment>
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
              {isAuthenticated ? authLinks : guestLinks}
              <Link to="/"> Home </Link>
              <Link to="/cities"> Cities</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(NavBarV2);
