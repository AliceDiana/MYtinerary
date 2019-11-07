import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./components/Pages/Landing";
import LandingPageV2 from "./components/Pages/LandingV2";
import CitiesPage from "./components/Pages/Cities";
import LoggingPage from "./components/Pages/Logging";
import CreatingPage from "./components/Pages/Creating";

import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={LandingPage} /> */}
          <Route exact path="/" component={LandingPage} />
          <Route path="/cities" component={CitiesPage} />
          <Route path="/logging" component={LoggingPage} />
          <Route path="/creating" component={CreatingPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
