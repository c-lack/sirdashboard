import React from 'react';

const Options = () => {
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
                                <input type="number" name="beta" defaultValue="0.06" step=".01" id="input_beta_ODE" />
                            </td>
                            <td>
                                Gamma:
                            </td>
                            <td>
                                <input type="number" name="gamma" defaultValue="1" step=".01" id="input_gamma_ODE" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </nav>
        </div>
    </div>
  );
};

export default Options;
