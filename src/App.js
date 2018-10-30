import React, { Component } from 'react';
import { observable } from 'mobx';

const appStore = observable({
  count: 0
})
appStore.increment = function(){
  this.count++;
}
appStore.decrement = function(){
  this.count--;
}
class App extends Component {
  count = 0;
  render() {
    return (
      <div>
        Counter: {this.props.store.count} <br/>
        <button onClick={this.handleInc}> + </button>
        <button onClick={this.handleDec}> - </button>
      </div>
    );
  }
  handleInc = () =>{
    this.props.store.increment()
  }
  handleDec = () =>{
    this.props.store.decrement()
  }
}

export default App;
