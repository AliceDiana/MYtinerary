import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// import LandingPage from "./Pages/Landing";
import LandingPageV2 from "./Pages/LandingV2";
import CitiesPage from "./Pages/Cities";
import ItinerariesPage from "./Pages/Itineraries";
import LoggingPage from "./Pages/Logging";
import CreatingPage from "./Pages/Creating";
import ActivityList from "./components/ActivityList";

import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={LandingPage} /> */}
          <Route exact path="/" component={LandingPageV2} />
          <Route path="/cities" component={CitiesPage} />
          <Route path="/:city_id" component={ItinerariesPage} />
          <Route path="/:itinerary_id" component={ActivityList} />
          <Route path="/logging" component={LoggingPage} />
          <Route path="/creating" component={CreatingPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
