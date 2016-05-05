import React from 'react';
import Boat from './Boat';

class Inventory extends React.Component {
  constructor() {
    super();

    this.state = {
      inventory: [
        { id: 1, name: "Aircraft carrier", size: 5 },
        { id: 2, name: "Battleship", size: 4 },
        { id: 3, name: "Submarine", size: 3 },
        { id: 4, name: "Cruiser", size: 3 },
        { id: 5, name: "Destroyer", size: 2 },
      ]
    };
  }

  render() {
    return (<div>
      {this.state.inventory.map(function (ship) {
        return (<Boat key={ship.id} size={ship.size} name={ship.name}/>);
      }.bind(this))}
    </div>);
  }
}

export default Inventory;
