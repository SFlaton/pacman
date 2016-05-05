import React from 'react';
import GridComponent from './components/GridComponent';

const boardStyle = {
  width: 400,
  height: 400,
  border: "1px solid #000",
  margin: "auto"
};

const clickedStyle = {
  backgroundColor: "#cfc",
}

class App extends React.Component {
  constructor() {
    super();

    this.grid = [];
    for (let i=0; i < 100; i++) {
      this.grid.push(i);
    };

    this.state = {
      bombs: [1,4,6,14,35,16,27, 55, 88, 24, 84, 90, 95, 29, 30 ],
      clicked: [],
    };
  }

  cellHasBomb(cell) {
    let hasBomb = this.state.bombs.filter(function(bomb) {
      if (bomb === cell) {
        return true;
      } else {
        return false;
      }
    });

    return hasBomb.length > 0;
  }

  cellIsClicked(cell) {
    let isClicked = this.state.clicked.filter(function(click){
      if (click === cell) {
        return true;
      } else{
        return false;
      }
    })
  }

  getBombIndex(cell) {
    if (this.cellHasBomb(cell)) {
      return this.state.bombs.findIndex(function(bomb) {
        return bomb === cell;
      });
    }
  }

  addBomb(cell) {
    let bombs = this.state.bombs;
    let clicked = this.state.clicked;

    if (this.cellHasBomb(cell)) {
      let index = this.getBombIndex(cell);
      alert("KABOOM, YOU DIE!!!!");
    } else {
      alert("no kaboom, you live, try again");
      clicked.push(cell)
      this.cellIsClicked();
    }

    this.setState({
      bombs: bombs
    });
  }

  countBombs() {
      for (var i = 0; i < 200; i++ ){
        if (this.grid[i] === false) {
          console.log(i);
        }
    }
  }

  render() {
    console.log(this.state);
    this.countBombs();
    return (
      <div>
        <div style={boardStyle}>
          {this.grid.map(function(key) {
            return(<GridComponent key={key} click={this.cellIsClicked(key)} bomb={this.cellHasBomb(key)} index={key} onClick={this.addBomb.bind(this)}/>);
          }.bind(this))}
        </div>
      </div>);
  }
}

export default App;
