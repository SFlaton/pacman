import React from 'react';

class Bomb extends React.Component {
  getBombStyle() {
    let width = 38 * this.props.size;

    return {
      width: `${width}px`,
      height: "38px",
      backgroundColor: "#cfc",
      border: "1px solid #fff"
    };
  }

  render() {
    let bombStyle = this.getBombStyle();
    return (
      <div>
        <div style={bombStyle}></div>
        <p>{this.props.name}</p>
      </div>);
  }
}

export default Bomb;
