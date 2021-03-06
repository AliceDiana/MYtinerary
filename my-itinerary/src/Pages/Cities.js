import React from "react";
import NavBarV2 from "../components/UI/NavbarV2";
import CityList from "../components/CityList";

import Toolbar from "../components/UI/Toolbar";

const CitiesPage = props => (
  <React.Fragment>
    <NavBarV2 />

    <CityList />

    <Toolbar />
  </React.Fragment>
);

export default CitiesPage;
