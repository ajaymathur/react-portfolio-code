import React, { Component } from 'react';
import './App.css';

import Home from './home/home'
import Technologies from './technologies/technologies';
import Footer from './footer/footer'

class App extends Component {
  render() {
    return (
      <div>
        <Home/>
        <Technologies/>
        <Footer/>
      </div>
    );
  }
}

export default App;
