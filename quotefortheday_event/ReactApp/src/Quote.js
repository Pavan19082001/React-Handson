// Please do not make any changes in the code template
import React, { Component } from "react";
import "./styles.css";

class Quote extends Component {
  //IMPLEMENT YOUR CODE HERE.
  constructor(props){
   super(props);
   this.state={
      likes: 0
   }
  };

  clickHandler = () =>{
   this.setState((prev)=>({
      likes: prev.likes+1
  }))
  }


  render() {
    return (
      <div>
         <h2>Quote for the Day</h2>
         <h3>If you are tired, learn to rest, Not quit.</h3>
         <h5 onClick={this.clickHandler}> Hit here to like: {this.state.likes} likes </h5>
      </div>
    );
  }
}

export default Quote;
