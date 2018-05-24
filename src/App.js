import React, { Component } from "react";
import classes from "./App.css";
import reactImgUrl from "./assets/react-img.jpg";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className={classes.heading}>ok</h1>
        <img src={reactImgUrl} width="100px" height="100px" />
      </div>
    );
  }
}
