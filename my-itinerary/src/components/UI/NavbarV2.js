import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavItem } from "react-bootstrap";
import LogOut from "./Auth/LogOut";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Image from "react-bootstrap/Image";

class NavBarV2 extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <LogOut />
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavLink className="d-inline p-2 bg-dark text-white" to="/auth">
          LogIn
        </NavLink>
      </Fragment>
    );
    return (
      <React.Fragment>
        <Navbar
          className="navbar"
          collapseOnSelect
          expand="sm"
          bg="dark"
          variant="dark"
        >
          <NavItem className="nav-item">
            {user ? (
              <Image
                className="iImage"
                src={user.avatar}
                alt="user"
                roundedCircle
              />
            ) : (
              <FontAwesomeIcon className="iAvatar " icon={faUser} />
            )}

            {isAuthenticated ? authLinks : guestLinks}
          </NavItem>
          {/* <div>
            <Navbar.Text>
           
                <strong>{user ? `Welcome ${user.name}` : ""}</strong>
           
            </<Navbar.Text>>
          </div> */}

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <NavItem>
              <NavLink className="d-inline p-2 bg-dark text-white" to="/cities">
                {" "}
                Cities
              </NavLink>
            </NavItem>
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
