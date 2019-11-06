import React, { Component } from "react";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Pages from "./components/Pages/Landing";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Pages />
        <Footer />
      </div>
    );
  }
}

export default App;
