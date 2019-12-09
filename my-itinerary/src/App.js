import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
// import LandingPage from "./Pages/Landing";
import LandingPageV2 from "./Pages/LandingV2";
import CitiesPage from "./Pages/Cities";
import ItinerariesPage from "./Pages/Itineraries";

import RegisterPage from "./Pages/RegisterPage";
import { loadUser } from "./store/actions/authAction";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LogInPage from "./Pages/LogInPage";

class App extends Component {
  componentDidMount() {
    this.props.loadUser();
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={LandingPage} /> */}
          <Route exact path="/" component={LandingPageV2} />
          <Route path="/cities" component={CitiesPage} />
          <Route path="/itinerary/:city_id" component={ItinerariesPage} />
          <Route path="/auth" component={LogInPage} />
          <Route path="/users" component={RegisterPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(null, { loadUser })(App);
