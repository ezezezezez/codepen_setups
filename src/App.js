import React, { Component } from 'react';
import './App.scss';
import MyComponent from './component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyComponent />
      </div>
    )
  }
}

export default App