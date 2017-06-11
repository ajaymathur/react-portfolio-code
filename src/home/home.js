import React, { Component } from 'react';

import FontAwesome from 'react-fontawesome';

import 'font-awesome/css/font-awesome.min.css'
import './home.css';
class Home extends Component{
  render() {
    return (
      <div id="home">
        <div className="heading">
          <h1>I am</h1>
        </div>
        <div id="introduction">
          <div className="home-section">
            <h2>Ajay Narain Mathur</h2>
            <h3>Front-end Developer</h3>
            <div className="contact-me">
              <FontAwesome name='stack-overflow' />
              <FontAwesome name='linkedin' />
              <FontAwesome name='github' />
            </div>
          </div>
          <div className="image-section">
            <div id="head-image"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
