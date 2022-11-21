// Import stylesheets
import './style.css';

d3.json(
  'https://raw.githubusercontent.com/Kevincruz2019/covidlive/main/Covid.json',
  function (data) {
    var visualization = d3plus
      .viz()
      .container('#viz1')
      .data(data)
      .type('bar')
      .id('Países')
      .x('Países')
      .y('total recuperados')
      .axes({ ticks: 'false' })
      .draw();
  }
);
