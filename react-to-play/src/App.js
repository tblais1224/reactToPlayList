import React, { Component } from 'react';
import Toplays from './toplays';
import AddToplay from './addToplay'

class App extends Component {

  state = {
    toplays: [
      { id: 1, content: "Red Dead Redemption 2" },
      { id: 2, content: "Bioshock" }
    ]
  }

  deleteToplay = (id) =>{
    const toplays = this.state.toplays.filter(toplay => {
      //if toplay id is not equal to id return true
      return toplay.id !== id
    });
    this.setState({
      toplays
    })
  }

  addToPlay = (toplay) => {
    toplay.id = Math.random();
    let toplays = [...this.state.toplays, toplay];
    this.setState({
      toplays
    })
  }

  render() {
    return (
      <div className="toplay-app container">
        <h1 className="center blue-text">Toplay's</h1>
        <Toplays toplays={this.state.toplays} deleteToplay={this.deleteToplay}></Toplays>
        <AddToplay addToplay={this.addToPlay}></AddToplay>
      </div>
    );
  }
}

export default App;
