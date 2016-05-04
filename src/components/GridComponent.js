import React from 'react';

const gridStyle = {
  width: "38px",
  height: "38px",
  backgroundColor: "#ccc",
  float: "left",
  border: "1px solid #fff"
}

class GridComponent extends React.Component {
  render() {
    return (
      <div style={gridStyle}></div>
    )
  }
}

export default GridComponent;
