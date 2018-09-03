import React from "react";

class ToggleBtn_colorChange extends React.Component {
  state = {
    spanColor: "colorText"
  };

  changeColor = event => {
    this.setState({
      spanColor: event.target.textContent
    });
  };

  render() {
    return (
      <div>
        <h2>Colors changes</h2>
        <p>
          <span className={this.state.spanColor}>Color</span> changes on click
          of the button.
        </p>
        <div className="color_box" />
        <button onClick={this.changeColor}>red</button>
        <button onClick={this.changeColor}>blue</button>
        <button onClick={this.changeColor}>green</button>
      </div>
    );
  }
}

export default ToggleBtn_colorChange;
