import React, { useState } from 'react';
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS, CategoryScale, LinearScale} from 'chart.js/auto'
ChartJS.register(CategoryScale, LinearScale);

interface DataObject {
    labels: string[];
    datasets: {
      label: string;
      data: string[];
    }[];
  }

function BarChart({chartData}:{chartData: DataObject}) {
    console.log(chartData);
  return (
    <div>
        <Bar data={chartData} />
    </div>
  )
}

export default BarChart
