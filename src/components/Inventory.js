import React from 'react';
import Boat from './Boat';

class Inventory extends React.Component {
  constructor() {
    super();

    this.state = {
      inventory: [
        { name: "Aircraft carrier", size: 5 },
        { name: "Battleship", size: 4 },
        { name: "Submarine", size: 3 },
        { name: "Cruiser", size: 3 },
        { name: "Destroyer", size: 2 },
      ]
    };
  }

  render() {
    return (<div>
      {this.state.inventory.map(function (ship) {
        return (<Boat size={ship.size} name={ship.name}/>);
      }.bind(this))}
    </div>);
  }
}

export default Inventory;
