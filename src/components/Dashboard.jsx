import React, { Component } from 'react';
import Dashboard from 'react-dazzle';

// App components
import Header from './Header';
import Options from './Options';

// Widgets for the dashboard
import BarChart from './widgets/BarChart'
import LineChart from './widgets/LineChart'

// We are using bootstrap as the UI library
import 'bootstrap/dist/css/bootstrap.css';

// Default styes of dazzle.
import 'react-dazzle/lib/style/style.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// Available widgets to the dashboard
			widgets: {
				SIRTimeSeries: {
					type: LineChart,
					title: 'Model',
				},
				SummaryStat: {
					type: BarChart,
					title: 'Summary Statistics',
				},
			},
			// Layout of the dashboard
			layout: {
				rows: [{
					columns: [{
						className: 'col-md-8 col-sm-8 col-xs-8',
						widgets: [{key: 'SIRTimeSeries'}]
					},{
						className: 'col-md-4 col-sm-4 col-xs-4',
						widgets: [{key: 'SummaryStat'}, {key: 'SummaryStat'}]
					}]
				}]
			}
		}
	}

	render() {
		return (
			<div>
			<Header />
			<Options />
			<Dashboard
				layout={this.state.layout}
				widgets={this.state.widgets}
				/>
			</div>
		);
	}
}

export default App;