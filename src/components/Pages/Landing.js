import React from "react";
import LogIn from "../LogIn/Login";
import CreateAccount from "../CreateAccount/Createacc";

const LandingPage = props => (
  <div className="landing">
    <p>
      Find your perfect trip, designed by insiders who know and love their
      cities.
    </p>
    <h3> Start Browsing</h3>
    <p>Want to build your own MYtinerary?</p>
    <LogIn />
    <CreateAccount />
  </div>
);

export default LandingPage;
