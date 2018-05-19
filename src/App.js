import React, { Component } from "react";
import classes from "./App.css";
import reactImgUrl from "./assets/react-img.jpg";

export default class App extends Component {
  clickMe = () => {
    alert("clicked");
  };
  render() {
    return (
      <div>
        <h1 className={classes.heading}>ok</h1>
        <img src={reactImgUrl} />
        <button onClick={() => this.clickMe()}>press</button>
      </div>
    );
  }
}
