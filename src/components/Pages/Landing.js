import React from "react";
import LogIn from "../UI/LogIn";
import CreateAccount from "../UI/CreateAcc";
import { Link } from "react-router-dom";

const LandingPage = props => (
  <div className="childTwoLandingBody">
    <div className="landingText">
      <h6 className="LandingFirstText">
        Find your perfect trip, designed by insiders who know and love their
        cities.
      </h6>
      <h3 className="LandingSecondText"> Start Browsing</h3>
      <div className="arrowImage">
        <img src={require("../../Images/circled.png")} alt="arrow" />
      </div>
      <p className="LandingThirdText"> Want to build your own MYtinerary?</p>
    </div>
    <div className="accessLinks">
      <Link to="/logging">
        {" "}
        <LogIn />
      </Link>
      <Link to="/creating">
        {" "}
        <CreateAccount />
      </Link>
    </div>
  </div>
);

export default LandingPage;
