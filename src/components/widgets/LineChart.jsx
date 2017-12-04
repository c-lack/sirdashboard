import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data
    };
    console.log(this.state.data.labels)
  }

  render() {
    return (
      <div >
         <Line data={this.state.data} options={{responsive: true, animationSteps: 300 }} height={550} width={800} />
       </div>
    );
  }
}

export default LineChart;
