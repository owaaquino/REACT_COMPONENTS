import React from "react";

class ToggleBtn_simple extends React.Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };
  render() {
    return (
      <div>
        <h2>A very simple toggling button.</h2>
        <p>Display a text on click of a button.</p>
        {this.state.on && <h1>Toggle Me</h1>}
        <button onClick={this.toggle}>Show/Hide</button>
      </div>
    );
  }
}

export default ToggleBtn_simple;
