import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/home/homepage.component";
import { Switch, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
