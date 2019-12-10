import React from "react";
import NavBarV2 from "../components/UI/NavbarV2";
import LogInForm from "../components/UI/Auth/LogInForm";
import GoogleLogIn from "../components/UI/Auth/GoogleLogIn";
import Toolbar from "../components/UI/Toolbar";

import { Link } from "react-router-dom";

const LogInPage = props => (
  <React.Fragment>
    <NavBarV2 />
    <div className="container">
      <GoogleLogIn /> <p> or: </p>
      <LogInForm />
      <div className="new-user">
        <p>
          New user? <Link to={"/users"}> Please register here</Link>{" "}
        </p>
      </div>
    </div>
    <Toolbar />
  </React.Fragment>
);

export default LogInPage;
