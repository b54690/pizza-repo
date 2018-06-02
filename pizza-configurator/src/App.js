import React, { Component } from 'react';
import logo from './logo.svg';
import OrderContainer from './components/OrderContainer'
import Title from './components/Title'
import './App.css';
import 'typeface-roboto'


class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <Title />
          <OrderContainer />
      </div>
    );
  }
}

export default App;
