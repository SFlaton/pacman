import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

const buttonStyle = {
  margin: 12,
};

class NewGameComponent extends React.Component {
  createGame(event) {
    event.preventDefault();
    this.props.onCreate();
  }

  render() {
    return(
      <div>
        <RaisedButton onClick={this.createGame.bind(this)} label="Create New Game" primary={true} style={buttonStyle} />
      </div>
    );
  }
}

export default NewGameComponent;
