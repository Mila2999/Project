import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';
const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.lable}
          value={dataPoint.value}
          maxValue={null}
          lable={dataPoint.lable}
        />
      ))}
    </div>
  );
};
export default Chart;
