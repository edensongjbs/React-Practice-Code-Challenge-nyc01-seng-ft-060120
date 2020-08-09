import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"



class App extends Component {

  state = { allSushi: [], sushiIndex:0, sushiBudget: 100}

  componentDidMount() {
    fetch(API)
    .then( res => res.json())
    .then( json => this.setState({allSushi: json}))
  }

  emptyPlates = () => {
    // console.log(this.state.allSushi)
    return this.state.allSushi.filter(sushi => sushi.eaten)
  }

  eatSushi = (theSushi) => {
    if (theSushi.eaten) {return}
    if (this.state.sushiBudget < theSushi.price) {return}
    const sushiCopy = [...this.state.allSushi]
    const foundSushi = sushiCopy.find(sushi => sushi.id===theSushi.id)
    
    foundSushi.eaten=true
    const newPlateCount=this.state.emptyPlates+1
    const newSushiBudget = this.state.sushiBudget-theSushi.price
    this.setState({allSushi: sushiCopy, emptyPlates:newPlateCount, sushiBudget: newSushiBudget})
  }

  moreSushi = () => {
    const newSushiIndex = (this.state.sushiIndex+4)%(this.state.allSushi.length)
    this.setState({sushiIndex:newSushiIndex})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eatSushi={this.eatSushi} moreSushi={this.moreSushi} sushiIndex={this.state.sushiIndex} allSushi={this.state.allSushi} />
        <Table sushiBudget={this.state.sushiBudget} emptyPlates={this.emptyPlates()} />
      </div>
    );
  }
}

export default App;