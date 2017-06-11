import React, { Component } from 'react';

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
              <a href="https://stackoverflow.com/users/2720743/a-j?tab=profile"
                 className="contact-me-link">
                <i className='fa fa-stack-overflow' />
              </a>
              <a href="https://www.linkedin.com/in/ajay-narain-mathur-2245b553/"
                 className="contact-me-link">
                <i className='fa fa-linkedin' />
              </a>
              <a href="https://github.com/ajaymathur"
                 className="contact-me-link">
                <i className='fa fa-github' />
              </a>
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
