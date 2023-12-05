// Please do not make any changes in the given template
import React, { Component } from 'react';
import './Styles.css';


class ShareMarket extends Component {
  
    // IMPLEMENT YOUR CODE HERE

    render(){
        const date = new Date();
        return(
            <>
            <h3>Share Market Statistics</h3>
            <h6>Commodity Report Dated:{date.getDate()}-{date.getMonth()+1}-{date.getFullYear()}</h6>
            <HealthCareDB />
            </>
        );
    }
  
}

class HealthCareDB extends Component {
  
  // IMPLEMENT YOUR CODE HERE
  constructor(props){
    super(props);
    this.state={
        commodity: 'Health Care', price: 2500, change: 100, percentage: 2
    };
  };

  render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Commodity</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Change%</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.commodity}</td>
                        <td>{this.state.price}</td>
                        <td>{this.state.change}</td>
                        <td>{this.state.percentage}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
  
}


export {HealthCareDB};
export default ShareMarket;

