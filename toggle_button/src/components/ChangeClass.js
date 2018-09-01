import React from "react";

class ChangeClass extends React.Component {
  state = {
    classesName: "boxDiv"
  };

  changeClassName = () => {
    this.setState({
      classesName: "newBoxDiv"
    });
  };

  render() {
    return (
      <div>
        <h2>Change Class On Click</h2>
        <div className={this.state.classesName}>
          Change The Background Color
        </div>
        <button onClick={this.changeClassName}>Change</button>
      </div>
    );
  }
}

export default ChangeClass;
