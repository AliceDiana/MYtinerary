// Itinerary Page

import React from "react";
import NavBarV2 from "../components/UI/NavbarV2";
import ItineraryList from "../components/ItineraryList";

import Toolbar from "../components/UI/Toolbar";
import { Link } from "react-router-dom";

const ItinerariesPage = props => (
  <React.Fragment>
    <NavBarV2 />
    <div className="container">
      <div>
        <ItineraryList cityId={props.match.params.city_id} />
      </div>
      <div>
        <Link to="/cities">
          <h6 className="another-city-link">Check another city</h6>
        </Link>
      </div>
    </div>
    <Toolbar />
  </React.Fragment>
);

export default ItinerariesPage;
