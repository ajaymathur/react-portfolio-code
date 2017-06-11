import React, { Component } from 'react';
import './technologies.css';
import { TECHLOGIES_I_KNOW } from './technologies.constants';
import Chart from './chart/chart';
import map from 'lodash/map';

class Technologies extends Component {

  chartDiv() {
    return map(TECHLOGIES_I_KNOW, techDescription =>
      <div className="chart-parent">
        <h3>{ techDescription.name }</h3>
        <div>
          <Chart
            title={ techDescription.name }
            rating={ techDescription.rating }
          />
        </div>
      </div>
    )
  }

  render() {
    return (
      <div id="tech-stack">
        <div className="heading">
          <h2>Tech i interested in and learning </h2>
        </div>
        <div id="technologies">
          {this.chartDiv()}
        </div>
      </div>
    )
  }
}

export default Technologies;
