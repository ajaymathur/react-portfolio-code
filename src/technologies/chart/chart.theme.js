export const THEME = (Highcharts) => {
  Highcharts.theme = {
    colors: ['#2b908f'],
    chart: {
      backgroundColor: 'transparent',
      style: {
        fontFamily: '\'Unica One\', sans-serif'
      },
      plotBorderColor: '#000963'
    },
  };

  Highcharts.setOptions(Highcharts.theme);
};
