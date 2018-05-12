import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import classes from "./App.css";

export default class App extends Component {
  render() {
    return (
      <Aux>
        <h1 className={classes.heading}>ok</h1>
      </Aux>
    );
  }
}
