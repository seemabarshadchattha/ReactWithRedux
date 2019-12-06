import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Simple React With Redux Sample Application</h1>
        <Counter></Counter>
      </div>
    );
  }
}

export default App;
