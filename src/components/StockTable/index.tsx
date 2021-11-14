
import React, { memo } from 'react';

import './index';

interface IProps {
  stocks:{
    name:string;
    today:number;
    change:number;
    data:{
      x:Date;
      y:number;
    }[];
  }[];
  onSelect:Function;
}

// The StockTable is used to show all stock data
export default memo(function StockTable(props:IProps) {

  const { stocks, onSelect } = props;

  // console.log('this is ', stocks);

  return (
    <table>
      <caption>Stocks</caption>
      <tbody>
        {
          stocks.map((stock) => (
            <Row key={stock.name} stock={stock} onClick={onSelect(stock)} />
          ))
        }
      </tbody>
    </table>
  );
});

// This is a row-data component
function Row(props:any) {

  const { stock, onClick } = props;

  return (
    <tr key={stock.name} onClick={onClick} >
      <td>{stock.name}</td>
      <td>{stock.price}</td>
      <td style={{ color: stock.change < 0 ? 'darkred' : 'darkgreen' }}>
        {stock.change < 0 ? stock.change : '+' + stock.change }%
      </td>
    </tr>
  );
}
