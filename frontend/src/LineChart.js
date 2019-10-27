import React from 'react';
import { Line } from 'react-chartjs-2';

const labels = new Array(10).fill(0).map((e, i) => 
  new Date(2019, i + 1, 1).toLocaleString('default', { month: 'long' })
)

const defaultOptions = {
  fill: false,
  lineTension: 0.1,
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBackgroundColor: '#fff',
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBorderColor: 'rgba(220,220,220,1)',
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10
}
const glucoseColor = '#aa3415';
const glucoseData = {
  labels,
  datasets: [
    {
      label: 'Blood glucose (mmol/L)',
      backgroundColor: glucoseColor,
      borderColor: glucoseColor,
      pointBorderColor: glucoseColor,
      pointHoverBackgroundColor: glucoseColor,
      data: [110, 112, 108, 120, 140, 170, 180, 130, 120, 110, 100],
      ...defaultOptions
    }
  ]
}

const pressureColor = '#4534aa';
const pressureColorHigh = 'black';
const pressureData = {
  labels,
  datasets: [
    {
      label: 'Blood pressure (high; mmHg)',
      backgroundColor: pressureColor,
      borderColor: pressureColor,
      pointBorderColor: pressureColor,
      pointHoverBackgroundColor: pressureColor,
      data: [100, 120, 140, 150, 150, 160, 150, 140, 120, 130, 110],
      ...defaultOptions
    },
    {
      label: 'Blood pressure (high; mmHg)',
      backgroundColor: pressureColorHigh,
      borderColor: pressureColorHigh,
      pointBorderColor: pressureColorHigh,
      pointHoverBackgroundColor: pressureColorHigh,
      data: [70, 80, 100, 115, 105, 125, 115, 105, 100, 102, 80],
      ...defaultOptions
    }
  ]
}

function LineChart() {
  return <>
    <div class="app-grid">
      <div>
        <h2>Blood glucose trends</h2>
        <Line data={glucoseData} />
      </div>
      <div>
        <h2>Blood pressure trends</h2>
        <Line data={pressureData} />
      </div>
    </div>
  </>
}

export default LineChart;
