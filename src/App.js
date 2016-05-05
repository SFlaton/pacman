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
      bombs: [],
      clicked: []
    };

    console.log("checking this.state.bombs" + this.state.bombs)

    for (let n = 0; n < 15; n++){
      this.state.bombs.push(Math.floor((Math.random() * 100) + 1))
    }
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
      return click === cell
    }).length
    console.log(isClicked)
    return isClicked > 0
  }


  getBombIndex(cell) {
    if (this.cellHasBomb(cell)) {
      return this.state.bombs.findIndex(function(bomb) {
        return bomb === cell;
      });
    }
  }

  findBomb(cell) {
    let clicked = this.state.clicked;

    if (this.cellHasBomb(cell)) {
      let index = this.getBombIndex(cell);
      console.log(cell);
      alert("KABOOM, YOU DIE!!!!");
      location.reload();
    } else {
      clicked.push(cell)
      this.setState({
        clicked: clicked
      })
    }
  }
  neighbourBombs(key) {
      let bombsFound = 0

      let coord = [-11, -10, -9, -1, 1, 9, 10, 11]
      for (let i=0; i < coord.length; i++) {
        let check = key + coord[i]

        if (check > -1 ){
          bombsFound += this.state.bombs.filter(function(bomb){
            return bomb === check
          }).length
        }
      }
      return bombsFound
  }




  render() {
    console.log(this.state);

    return (
      <div>
        <div style={boardStyle}>
          {this.grid.map(function(key) {
            return(<GridComponent key={key} click={this.cellIsClicked(key)} number={this.neighbourBombs(key)} bomb={this.cellHasBomb(key)} index={key} onClick={this.findBomb.bind(this)}/>);
          }.bind(this))}
        </div>
      </div>);
  }
}

export default App;
