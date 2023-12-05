import React, { Component } from 'react';
import './stock.css';
class Stock extends Component {
  
  //IMPLEMENT YOUR CODE HERE. "stockName" and "stockShares" is sent through one props data (i.e) as JSON
  
	render(){
		const {dashValues} = this.props;
	    return (
			<div>
				<h1>Stock Securities</h1>
				<h3>Stock Name</h3>
				<p>{dashValues.stockName}</p>
				<h3>Stock Shares</h3>
				<p>{dashValues.stockShares}</p>
			</div>
		);
	}
}
  



export default Stock;
