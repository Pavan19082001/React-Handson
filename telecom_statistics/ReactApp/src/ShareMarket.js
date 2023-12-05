// Please do not make any changes in the given template

import React, { Component } from 'react';
import './Styles.css';


const ShareMarket=()=> {
  
    // IMPLEMENT YOUR CODE HERE
    const date = new Date();
    return(
      <div>
        <h1>Share Market Statistics</h1>
        <h3>Commodity Report Dated:{date.getDate()}-{date.getMonth()+1}-{date.getFullYear()}</h3>
        <Telecom />
      </div>
    )
  
}

class Telecom extends Component {
  
  // IMPLEMENT YOUR CODE HERE
  constructor(props){
    super(props);
    this.state={
      commodity: 'Telecom', price: 3000, change: 200, percentage: 3
    };
  };

  render(){
    return(
      <div>
        <table>
          <thead>
            <tr>
              <th>Commodity</th>
              <th>Price</th>
              <th>Change</th>
              <th>Change %</th>
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
      </div>
    )
  }

  
}

export {Telecom};
export default ShareMarket;