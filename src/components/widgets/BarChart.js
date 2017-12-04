import React from 'react';
import { Bar } from 'react-chartjs-2';

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: props.data
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
