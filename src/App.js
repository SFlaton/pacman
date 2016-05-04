import React from 'react';
import GridComponent from './components/GridComponent';

class App extends React.Component {
  constructor() {
    super();

    this.grid = [];
    for (let i=0; i < 200; i++) {
      this.grid.push(i);
    };
  }

  render() {
    console.log(this.state);
    return (
      <div style={{ width: 400, height: 800, border: "1px solid #000", margin: "auto"}}>
        {this.grid.map(function(key) {
          return(<GridComponent key={key}/>);
        })}
      </div>
    );
  }
}

export default App;
