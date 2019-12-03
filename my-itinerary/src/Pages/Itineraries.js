// Itinerary Page

import React from "react";
import NavBarV2 from "../components/UI/NavbarV2";
import ItineraryList from "../components/ItineraryList";

import Toolbar from "../components/UI/Toolbar";
import { Link } from "react-router-dom";

const ItinerariesPage = props => (
  <React.Fragment>
    <NavBarV2 />

    <ItineraryList cityId={props.match.params.city_id} />

    <Link to="/cities">
      <h6 className="CheckAnotherCity">Check another city</h6>
    </Link>

    <Toolbar />
  </React.Fragment>
);

export default ItinerariesPage;
