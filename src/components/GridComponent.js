import React from 'react';

class GridComponent extends React.Component {
  getBackGroundColor() {
    if (this.props.boat) {
      return "#cfc";
    }

    return "#ccc";
  }
  getGridStyle() {
    let backgroundColor = this.getBackGroundColor();

    return {
      width: "38px",
      height: "38px",
      backgroundColor: backgroundColor,
      float: "left",
      border: "1px solid #fff"
    };
  }

  onClick() {
    this.props.onClick(this.props.index);
  }

  render() {
    let gridStyle = this.getGridStyle();
    return (
      <div style={gridStyle} onClick={this.onClick.bind(this)}></div>
    )
  }
}

export default GridComponent;
