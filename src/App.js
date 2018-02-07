import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Products.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="jumbotron bg-dark">
          <img src={logo} className=" pull-left App-logo" alt="logo" />
          <h1 className="slender-heading pt-3 text-white">A React App</h1>
        </header>
        <div className="container py-3 mt-2">
            <Products />
        </div>
      </div>
    );
  }
}

export default App;
