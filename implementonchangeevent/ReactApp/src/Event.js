// Please do not make any changes in the given code template
import React, { Component } from 'react';
import './styles.css';


class Event extends React.Component {
    
	//IMPLEMENT YOUR CODE HERE. 
    constructor(props){
        super(props);
        this.state={
            studentName: ''
        }
    };

    HandleChange = (e) =>{
        this.setState({studentName: e.target.value})
    };

   render(){
   return (
       <div>
       <h1>Mind Academy</h1>
       <body>
        <h2>Welcome {this.state.studentName}</h2>
        <input type='text' value={this.state.studentName} placeholder='' onChange={this.HandleChange} />
       </body>
       </div>
       );
	}
}

export default Event;
