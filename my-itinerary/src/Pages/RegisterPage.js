import React from "react";
import NavBarV2 from "../components/UI/NavbarV2";
import RegisterForm from "../components/UI/Auth/RegisterForm";
import Toolbar from "../components/UI/Toolbar";

const RegisterPage = props => (
  <React.Fragment>
    <NavBarV2 />
    <div className="container">
      <RegisterForm />
    </div>
    <Toolbar />
  </React.Fragment>
);

export default RegisterPage;
