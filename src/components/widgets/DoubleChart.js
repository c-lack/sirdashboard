import React, { Component } from 'react';
import Dashboard, { addWidget } from 'react-dazzle';

// Widgets for the dashboard
import BarChart from './BarChart'

class DoubleChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// Available widgets to the dashboard
			widgets: {
				SummaryStat1: {
					type: BarChart,
					title: 'A Summary Statistic',
				},
				SummaryStat2: {
					type: BarChart,
					title: 'Another Summary Statistic'
				},
			},
			// Layout of the dashboard
			layout: {
				rows: [{
					columns: [{
						className: 'col-md-12 col-sm-12 col-xs-12',
						widgets: [{key: 'SummaryStat1'}]
					}]
				},{
					columns: [{
						className: 'col-md-12 col-sm-12 col-xs-12',
						widgets: [{key: 'SummaryStat2'}]
					}]
				}]
			}
		}
	}

	render() {
		return (
			<div>
			<Dashboard
				layout={this.state.layout}
				widgets={this.state.widgets}
				/>
			</div>
		);
	}
}

export default DoubleChart;