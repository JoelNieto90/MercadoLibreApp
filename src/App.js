import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import "./styles/App.scss";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <NavBar />
          <Switch>
            <Route exact path="/" component={Cards} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
