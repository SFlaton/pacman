import React from 'react';
import Inventory from './components/Inventory';
import GridComponent from './components/GridComponent';

const boardStyle = {
  width: 400,
  height: 400,
  border: "1px solid #000",
  margin: "auto"
};

class App extends React.Component {
  constructor() {
    super();

    this.grid = [];
    for (let i=0; i < 100; i++) {
      this.grid.push(i);
    };

    this.state = {
      boats: [1,4,6,14,35,16,27, 55, 88, 24, 84, 90, 95, 29, 30 ]
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
      console.log("kaboom");
    } else {
      console.log("no kaboom, you live");
    }

    this.setState({
      boats: boats
    });
  }

  countBoats() {
      for (var i = 0; i < 200; i++ ){
        if (this.grid[i] === false) {
          console.log(i);
        }
    }
  }

  render() {
    console.log(this.state);
    this.countBoats();
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
