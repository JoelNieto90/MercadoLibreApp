import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import Main from "./components/Main";
import "./styles/App.scss";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <NavBar />
          <Switch>
            <Route exact path="/" component={Cards} />
            <Route exact path="/main" component={Main} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
