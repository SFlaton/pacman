import React from 'react';

class Boat extends React.Component {
  getBoatStyle() {
    let width = 38 * this.props.size;

    return {
      width: `${width}px`,
      height: "38px",
      backgroundColor: "#cfc",
      border: "1px solid #fff"
    };
  }

  render() {
    let boatStyle = this.getBoatStyle();
    return (
      <div>
        <div style={boatStyle}></div>
        <p>{this.props.name}</p>
      </div>);
  }
}

export default Boat;
