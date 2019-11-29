import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import LogOut from "./Auth/LogOut";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
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
        <NavItem>
          <span>
            {user ? (
              <img src={user.avatar} alt="avatar" />
            ) : (
              <FontAwesomeIcon icon={faUser} />
            )}
          </span>
        </NavItem>
        <LogOut />
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavLink to="/users"> Register</NavLink>
        <NavLink to="/auth"> Log In</NavLink>
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
          {/* <NavItem>
            <FontAwesomeIcon icon={faUser} />{" "}
          </NavItem> */}
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              {isAuthenticated ? authLinks : guestLinks}
              <NavLink to="/"> Home </NavLink>
              <NavLink to="/cities"> Cities</NavLink>
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
