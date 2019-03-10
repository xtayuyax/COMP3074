import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Chatroom from "./components/Chatroom";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Chatroom />
        </header>
      </div>
    );
  }
}

export default App;
