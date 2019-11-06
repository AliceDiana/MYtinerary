import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import LandingPage from "./components/Pages/Landing";
import CitiesPage from "./components/Pages/Cities";
import Logging from "./components/Pages/Logging";
import Creating from "./components/Pages/Creating";

import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="parent">
          <Header />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/cities" component={CitiesPage} />
            <Route path="/logging" component={Logging} />
            <Route path="/creating" component={Creating} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
