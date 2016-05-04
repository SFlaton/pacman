import React from 'react';
import Inventory from './components/Inventory';
import GridComponent from './components/GridComponent';

const boardStyle = {
  width: 400,
  height: 800,
  border: "1px solid #000",
  margin: "auto"
};

class App extends React.Component {
  constructor() {
    super();

    this.grid = [];
    for (let i=0; i < 200; i++) {
      this.grid.push(i);
    };

    this.state = {
      boats: [1,2,14,15,16]
    };
  }

  cellHasBoat(cell) {
    let hasBoat = this.state.boats.filter(function(boat) {
      if (boat === cell) {
        return true;
      } else {
        return false;
      }
    });

    return hasBoat.length > 0;
  }

  getBoatIndex(cell) {
    if (this.cellHasBoat(cell)) {
      return this.state.boats.findIndex(function(boat) {
        return boat === cell;
      });
    }
  }

  addBoat(cell) {
    let boats = this.state.boats;

    if (this.cellHasBoat(cell)) {
      let index = this.getBoatIndex(cell);
      boats.splice(index, 1);
    } else {
      boats.push(cell);
    }

    this.setState({
      boats: boats
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Inventory boats={this.state.boats}/>
        <div style={boardStyle}>
          {this.grid.map(function(key) {
            return(<GridComponent key={key} boat={this.cellHasBoat(key)} index={key} onClick={this.addBoat.bind(this)}/>);
          }.bind(this))}
        </div>
      </div>);
  }
}

export default App;
