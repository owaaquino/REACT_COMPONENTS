import React from "react";

class Counter extends React.Component {
  state = {
    counter: 0
  };

  addOne = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  subOne = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  reset = () => {
    this.setState({
      counter: 0
    });
  };
  render() {
    return (
      <div>
        <h2>Add/Subract 1 on click</h2>
        <div>
          Click the button bellow to update our counter: {this.state.counter}
        </div>
        <button onClick={this.addOne}>Add 1</button>
        <button onClick={this.subOne}>Subtract 1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Counter;
