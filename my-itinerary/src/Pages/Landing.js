import React from "react";

import Logo from "../components/UI/Logo";
import LogIn from "../components/UI/LogIn";
import CreateAccount from "../components/UI/CreateAcc";
import ToolBar from "../components/UI/Toolbar";
import { Link } from "react-router-dom";

const LandingPage = props => (
  <React.Fragment>
    <div className="container">
      <Logo className="logoHeader" />

      <h6 className="LandingFirstText">
        Find your perfect trip, designed by insiders who know and love their
        cities.
      </h6>

      <h3 className="LandingSecondText"> Start Browsing</h3>

      <img
        className="arrowImage"
        src={require("../Images/circled.png")}
        alt="arrow"
      />

      <p className="LandingThirdText">Want to build your own MYtinerary?</p>

      <Link to="/logging">
        <LogIn />
      </Link>

      <Link to="/creating">
        <CreateAccount />
      </Link>
    </div>
    <ToolBar />
  </React.Fragment>
);

export default LandingPage;
