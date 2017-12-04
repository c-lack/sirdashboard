import React, { Component } from 'react';

class Options extends Component {

    constructor(props) {
        super(props);
        this.state = {
            betaValue: "0.06",
            gammaValue: "1",
            optionsDataCallback: props.optionsDataCallback
        }
        this.callbackOptions()
    }

    // TODO figure out why sending previous value, not current value
    onBetaChange = (evt) => {
        this.setState({
            betaValue: evt.target.value
        })
        this.callbackOptions()
    }

    onGammaChange = (evt) => {
        this.setState({
            gammaValue: evt.currentTarget.value
        })
        this.callbackOptions()
    }

    callbackOptions() {
        this.state.optionsDataCallback({beta: this.state.betaValue, gamma: this.state.gammaValue});
    }

    render() {
        return (
            <div className="top_nav">
                <div className="nav_menu">
                    <nav className="optionBar">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        Beta:
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            name="beta"
                                            value={this.state.betaValue}
                                            step=".01"
                                            id="input_beta_ODE"
                                            onChange={evt => this.onBetaChange(evt)}
                                        />
                                    </td>
                                    <td>
                                        Gamma:
                                    </td>
                                    <td>
                                    <input
                                        type="number"
                                        name="gamma"
                                        value={this.state.gammaValue}
                                        step=".01"
                                        id="input_gamma_ODE"
                                        onChange={evt => this.onGammaChange(evt)}
                                    />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </nav>
                </div>
            </div>
        );
    }
};

export default Options;
