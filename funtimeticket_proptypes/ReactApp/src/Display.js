import React, { Component } from 'react';
import './Display.css';
import PropTypes from 'prop-types';

class Display extends Component {

 //IMPLEMENT YOUR CODE   
    
    render(){
      const data = this.props;
       return (
         <div>
            <h1>FunTimeTicket</h1>
            <h3>Movie Name</h3>
            <p>{data.movieName}</p>
            <h3>Certificate</h3>
            <p>{data.certificate}</p>
            <h3>Released Year</h3>
            <p>{data.releasedYear}</p>
         </div>
       );
   }
    
}

//IMPLEMENT PROPTYPES
Display.propTypes = {
   movieName: PropTypes.string.isRequired,
   certificate: PropTypes.oneOf(['U', 'A']).isRequired,
   releasedYear: PropTypes.number.isRequired
}

export default Display;

