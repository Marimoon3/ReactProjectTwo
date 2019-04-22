import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "../styles.css";

export default class NavigationComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavLink exact to="/firstlast" activeClassName="nav-link-active">
          Remove first & last character
        </NavLink>

        <NavLink exact to="/revstr" activeClassName="nav-link-active">
          Reverse a string
        </NavLink>
      </div>
    );
  }
}
