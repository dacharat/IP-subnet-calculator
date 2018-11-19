import React, { Component } from 'react';
import './App.css';
import IPInput from './components/ip_input'

class App extends Component {
  render() {
    return (
      <div className="App">
          <IPInput />
      </div>
    );
  }
}

export default App;
