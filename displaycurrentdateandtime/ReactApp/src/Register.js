// Please do not make any changes in the given template
import React, { Component } from 'react';
import './Styles.css';


class Register extends Component {
  
    // IMPLEMENT YOUR CODE HERE
   render(){
    return(
      <div>
        <h1>Stock Securities</h1>
        <p>Welcome to one of the leading online platforms for stock trading in the country</p>
        <TimeComp />
      </div>
    )
   }

}

class TimeComp extends Component {
  
  // IMPLEMENT YOUR CODE HERE
  render(){
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    return(
      <div>
        <p>You have successfully registered with us on {date} at {time}</p>
      </div>
    )
  }

}

export {TimeComp};
export default Register;

