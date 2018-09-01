import React from "react";

class ToggleBtn_colorChange extends React.Component {

  render() {
    return (
      <div>
        <h2>Colors changes</h2>
        <p>
          <span className="colorText">Color</span> changes on click of the
          button.
        </p>
        <div className="color_box" />
        <button>red</button>
        <button>blue</button>
        <button>green</button>
      </div>
    );
  }
}

export default ToggleBtn_colorChange;
