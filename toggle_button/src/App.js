import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ToggleBtn_simple from "./components/ToggleBtn_simple";
import ToggleBtn_colorChange from "./components/ToggleBtn_colorChange";
class App extends Component {
  render() {
    return (
      <div className="App">
        <ToggleBtn_simple />
        <ToggleBtn_colorChange />
      </div>
    );
  }
}

export default App;
