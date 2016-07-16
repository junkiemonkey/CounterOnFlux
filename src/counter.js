import React, {Component} from 'react';
import {counter} from './stores';
import {countUp} from './AC/counterAC';

export default class Counter extends Component{
  state = {
    count: counter.getCount()
  };

  componentDidMount(){
    counter.addCountUpListener(this.handleChange)
  }

  componentWillUnmount(){
    counter.removeCountUpListener(this.handleChange)
  }
  render(){
    return (
      <div>
        <h2>{this.state.count}</h2>
        <a href="" onClick = {this.countmeUp}>click me!</a>
      </div>
    )
  }

  countmeUp = (e) => {
    e.preventDefault();
    countUp(this.state.count);
  };

  handleChange(){
    this.setState({
      count: counter.getCount()
    })
  }
}
