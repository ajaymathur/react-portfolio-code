import React, { Component } from 'react';
import {chartConstants} from './chart.constants';
import { THEME } from './chart.theme';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import SolidGauge from 'highcharts/modules/solid-gauge';


import './chart.css';

class Chart extends Component {

  constructor(props) {
    super(props);
    THEME(Highcharts);
    HighchartsMore(Highcharts);
    SolidGauge(Highcharts);
  }

  componentDidMount() {
    Highcharts.chart(this.props.title, chartConstants).series[0].setData([this.props.rating]) ;
  }

  render() {
    return (
      <div id={this.props.title} style={{width: '200px',height: '200px'}}></div>
    )
  }
}

export default Chart;
