import React, { Component } from "react";
import ReactDOM from "react-dom";

export default function printMe() {
  console.log("I get called from print.js!");
  console.log("More");
  console.log("MOre 2356- asdfaf");
}

ReactDOM.render(<h1>Hello, REACT!</h1>, document.getElementById("root"));
