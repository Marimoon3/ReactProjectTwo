import React from "react";
import ReactDOM from "react-dom";

import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import FirstLast from "./components/firstlast";
import RevStr from "./components/revstr";
import NavigationComponent from "./components/navbar";

import "./styles.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <h1>React Projects</h1>
        <NavigationComponent />
        <div>
          <Switch>
            <Route path="/firstlast" component={FirstLast} />
            <Route path="/revstr" component={RevStr} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
