import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class LineChart extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        labels: [1,2,3],
        datasets: [
          {
            label: 'Infected',
            strokeColor: '#E8575A',
            pointColor: '#E8575A',
            data: [1,2,3],
          },
        ],
      },
    };
  }

  setData(props) {

  }

  render() {
    return (
      <div >
         <Line data={this.state.data} options={{responsive: true, animationSteps: 300 }} height={400} width={800} />
       </div>
    );
  }
}

export default LineChart;
