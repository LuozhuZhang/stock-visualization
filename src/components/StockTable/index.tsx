
import React, { memo } from 'react';

interface IState {
  stocks:{
    name:string;
    today:number;
    change:number;
    data:{
      x:Date;
      y:number;
    }[];
  }[];
}

// The StockTable is used to show all stock data
export default memo(function StockTable(stocks:IState) {

  // console.log(stocks);

  return (
    <div>
      <h2>Stocks</h2>
      <div>
        {/* {stocks.map(stock:any => (
            <Row key={stock.name} stock={stock} />
          ))} */}
      </div>
    </div>
  );
});

// This is a row-data component
function Row(stock:any) {

  return (
    <tr>
      <td>{stock.name}</td>
      <td>{stock.price}</td>
      <td>{stock.change}%</td>
    </tr>
  );
}
