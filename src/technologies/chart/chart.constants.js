

export const chartConstants = {
  chart: {
    type: 'solidgauge'
  },

  title: null,

  pane: {
    center: ['50%', '50%'],
    size: '100%',
    startAngle: 0,
    endAngle: 360,
    background: {
      backgroundColor: '#EEE',
      innerRadius: '60%',
      outerRadius: '100%',
      shape: 'arc'
    }
  },

  tooltip: {
    enabled: false
  },

  // the value axis
  yAxis: {
    lineWidth: 0,
    minorTickInterval: null,
    tickAmount: 2,
    labels: {
      enabled: false,
    },
    min: 0,
    max: 10,
  },

  plotOptions: {
    solidgauge: {
      dataLabels: {
        y: -15,
        borderWidth: 0,
        useHTML: true
      }
    }
  },
  credits: {
    enabled: true,
  },
  series: [{
    data: [],
    dataLabels: {
      format: '<div style="text-align:center"><span style="font-size:25px;color:silver">{y} / 10</span></div>'
    }
  }],
};
