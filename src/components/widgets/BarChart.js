import React from 'react';
import { Bar } from 'react-chartjs-2';

class BarChart extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        labels: ['R0'],
        datasets: [
          {
            label: 'R0',
            fillColor: '#E8575A',
            strokeColor: '#E8575A',
            data: [1],
          },
        ],
      },
    };
  }

  render() {
    return (
      <div>
         <Bar data={this.state.data}  options={{responsive: true, animationSteps: 300 }} height={500} width={800} />
       </div>
    );
  }
}

export default BarChart;
