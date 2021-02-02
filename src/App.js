import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import Main from "./components/Main";
import "./styles/App.scss";

export default class App extends Component {
  state = {
    dataResults: [],
  };

  getDataResults = (data) => {
    const dataResults = data;
    this.setState({ dataResults });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar getDataResults={this.getDataResults} />
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Cards
                  getIndexResults={this.getIndexResults}
                  dataResults={this.state.dataResults}
                />
              )}
            />
            <Route exact path="/main" component={Main} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
