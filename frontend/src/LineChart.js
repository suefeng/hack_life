import React from 'react';
import { Line } from 'react-chartjs-2';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
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
const glucoseColor = 'red';
const glucoseData = {
  labels,
  datasets: [
    {
      label: 'Blood glucose (mg/dL)',
      backgroundColor: glucoseColor,
      borderColor: glucoseColor,
      pointBorderColor: glucoseColor,
      pointHoverBackgroundColor: glucoseColor,
      data: [65, 59, 80, 81, 56, 55, 40],
      ...defaultOptions
    }
  ]
}

const pressureColor = 'blue';
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
      data: [65, 59, 80, 81, 56, 55, 40].reverse(),
      ...defaultOptions
    },
    {
      label: 'Blood pressure (high; mmHg)',
      backgroundColor: pressureColorHigh,
      borderColor: pressureColorHigh,
      pointBorderColor: pressureColorHigh,
      pointHoverBackgroundColor: pressureColorHigh,
      data: [65, 59, 80, 81, 56, 55, 40].reverse().map(e => e + 40),
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
