import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

const buttonStyle = {
  margin: 12,
};

class PlayerMoveComponent extends React.Component {
  makeMove() {
    this.props.onClick(this.props.move);
  }

  render() {
    return (
      <RaisedButton onClick={this.makeMove.bind(this)} label={this.props.move} style={buttonStyle} />
    );
  }
}

export default PlayerMoveComponent;
