import React from "react";
import NavBarV2 from "../components/UI/NavbarV2";
import LogInForm from "../components/UI/Auth/LogInForm";

import Toolbar from "../components/UI/Toolbar";

import { Link } from "react-router-dom";

const LogInPage = props => (
  <React.Fragment>
    <NavBarV2 />
    <div className="container">
      <LogInForm />
      <p className>
        New user? <Link to={"/users"}> Please register here</Link>{" "}
      </p>
    </div>
    <Toolbar />
  </React.Fragment>
);

export default LogInPage;
