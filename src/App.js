/*global chrome*/

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    defaultValue: 16,
    inputPx: 1,
    result: 16,
  };

  calculatePxtoRem = (defaultValue, inputPx) => {
    let { result } = { ...this.state };
    result = +inputPx / +defaultValue;
    return result;
  };

  handleInputChange = (event) => {
    if (event.target.id === "default-value") {
      this.setState({ defaultValue: event.target.value });
    } else if (event.target.id === "input-value") {
      this.setState({ inputPx: event.target.value });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">PxtoRem</h1>
        </header>
        <div className="form-container">
          <div className="input-container">
            <div class="input-field">
              <input
                onChange={this.handleInputChange}
                value={this.state.defaultValue}
                type="number"
                id="default-value"
              />
              <label for="name">Default pixel size:</label>
            </div>
            px
          </div>
          <div className="input-container">
            <div class="input-field">
              <input
                onChange={this.handleInputChange}
                value={this.state.inputPx}
                type="number"
                id="input-value"
              />
              <label for="name">Pixels:</label>
            </div>
            px
          </div>
        </div>
        <div style={{ justifyContent: "center" }} className="input-container">
          {this.calculatePxtoRem(this.state.defaultValue, this.state.inputPx)}
          rem
        </div>
      </div>
    );
  }
}

export default App;
