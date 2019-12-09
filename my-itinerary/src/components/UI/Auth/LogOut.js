import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../../../store/actions/authAction";
import PropTypes from "prop-types";
import NavLink from "react-bootstrap/Nav";

export class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  render() {
    return (
      <Fragment>
        <NavLink id="logout" onClick={this.props.logout} href="#">
          Logout
        </NavLink>
      </Fragment>
    );
  }
}

export default connect(null, { logout })(Logout);
