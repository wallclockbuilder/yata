import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <What />
    );
    function What() {
      return (
        <div>
          <h2>Count Up</h2>
          <ul>
            <li>Vwan</li>
            <li>Tooo</li>
            <li>Sree</li>
          </ul>
        </div>
      )
    }
  }
}

export default App;
