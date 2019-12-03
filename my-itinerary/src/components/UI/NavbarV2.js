import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import LogOut from "./Auth/LogOut";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
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
        <NavLink to="/users"> Register</NavLink>
        <NavLink to="/auth"> Log In</NavLink>
      </Fragment>
    );
    return (
      <React.Fragment>
        <Navbar
          collapseOnSelect
          className="sticky-nav"
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Row>
            <Col xs={{ span: 2 }}>
              <NavItem>
                {user ? (
                  <Image
                    className="avatar"
                    src={user.avatar}
                    alt="avatar"
                    roundedCircle
                  />
                ) : (
                  <FontAwesomeIcon className="iAvatar " icon={faUser} />
                )}
              </NavItem>
            </Col>
            <Col xs={{ span: 5 }}>
              <NavItem>
                <span>
                  <strong>{user ? `Welcome ${user.name}` : ""}</strong>
                </span>
              </NavItem>
            </Col>

            <Col xs={{ span: 5 }}>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse>
                <Nav>
                  {isAuthenticated ? authLinks : guestLinks}
                  <NavLink to="/cities"> Cities</NavLink>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Navbar>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(NavBarV2);
