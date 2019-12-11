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
import queryString from "query-string";

class App extends Component {
  componentDidMount() {
    var query = queryString.parse(window.location.href);
    console.log(query["http://localhost:3000/?token"]);

    if (query["http://localhost:3000/?token"]) {
      window.localStorage.setItem(
        "token",
        query["http://localhost:3000/?token"].slice(
          0,
          query["http://localhost:3000/?token"].length - 1
        )
      );
      console.log(localStorage.getItem("token"));
    }
    if (localStorage.getItem("token")) {
      this.props.loadUser(); // when app mounts, we call this loadUser
      window.history.replaceState(null, null, `${window.location.origin}`);
    }
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
