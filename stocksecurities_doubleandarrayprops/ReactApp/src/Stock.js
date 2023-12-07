import React, { Component } from 'react';
import './stock.css';
class Stock extends Component {
  
   //IMPLEMENT YOUR CODE HERE. "stockSymbol" , "marketPrice" and "options" are sent through one props data (i.e) as JSON
   render(){
    const {stocks} = this.props;
    const stockSymbol = stocks.stockSymbol;
    const marketPrice = stocks.marketPrice;
    const options = stocks.options;
       return (
        <div>
            <h1>Stock Securities</h1>
            <h3>Stock Symbol</h3>
            <p>{stockSymbol}</p>
            <h3>Market Price</h3>
            <p>{marketPrice}</p>
            <h3>Options</h3>
            <ul>
                {options.map((option, index)=>(
                    <li key={index}>{option}</li>
                ))}
            </ul>
        </div>
       );
   }
}


export default Stock;
