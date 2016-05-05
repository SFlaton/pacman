import React from 'react';

class LayerComponent extends React.Component {
  getBackGroundColor() {
    if (this.props.bomb) {
      return "#FF0000";
    }

    return "#ccc";
  }
  getLayerStyle() {
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
    let layerStyle = this.getLayerStyle();
    return (
      <div style={layerStyle} onClick={this.onClick.bind(this)}></div>
    )
  }
}

export default LayerComponent;
