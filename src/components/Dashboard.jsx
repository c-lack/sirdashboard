import React, { Component } from 'react';
import Dashboard from 'react-dazzle';

// App components
import Header from './Header';
import Options from './Options';

// Widgets for the dashboard
import BarChart from './widgets/BarChart'
import LineChart from './widgets/LineChart'

// import model
import sirModel from 'sir-model'

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
					props: {
						data: {},
					}
				},
				SummaryStat_1: {
					type: BarChart,
					title: 'Summary Statistic 1',
					props: {
						data: {},
					}
				},
				SummaryStat_2: {
					type: BarChart,
					title: 'Summary Statistic 2',
					props: {
						data: {},
					}
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
						widgets: [{key: 'SummaryStat_1'}, {key: 'SummaryStat_2'}]
					}]
				}]
			}
		}
	}

	optionsDataCallback = (optionsData) => {
		sirModel.set_beta(optionsData.beta)
		sirModel.set_gamma(optionsData.gamma)
		var output = sirModel.solve();
		var S = [];
		var I = [];
		var R = [];
		for (var i = 0; i < output.x.length; i++) {
			S.push(output.x[i][0]);
			I.push(output.x[i][1]);
			R.push(output.x[i][2]);
		}
		this.setState({
			widgets: {
				SIRTimeSeries: {
					type: LineChart,
					title: 'Model',
					props: {
						data: {
							labels: output.t,
							datasets: [{
								label: 'S',
								data: S,
							},{
								label: 'I',
								data: I,
							},{
								label: 'R',
								data: R,
							}]
						},
					}
				},
				SummaryStat_1: {
					type: BarChart,
					title: 'Summary Statistic 1',
					props: {
						data: {},
					}
				},
				SummaryStat_2: {
					type: BarChart,
					title: 'Summary Statistic 2',
					props: {
						data: {},
					}
				},
			}
		});
	}

	render() {
		return (
			<div>
			<Header />
			<Options
				optionsDataCallback = {this.optionsDataCallback}	
			/>
			<Dashboard
				layout={this.state.layout}
				widgets={this.state.widgets}
			/>
			</div>
		);
	}
}

export default App;