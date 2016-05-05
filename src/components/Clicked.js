import React from 'react';

class Clicked extends React.Component {
  getClickedStyle() {
    let width = 38 * this.props.size;

    return {
      width: `${width}px`,
      height: "38px",
      backgroundColor: "#cfc",
      border: "1px solid #fff"
    };
  }

  render() {
    let clickedStyle = this.getClickedStyle();
    return (
      <div>
        <div style={clickedStyle}></div>
        <p>{this.props.name}</p>
      </div>);
  }
}

export default Clicked;
