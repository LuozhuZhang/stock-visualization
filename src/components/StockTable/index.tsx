
import React, { memo } from 'react';

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
  // stock:{
  //   name:string;
  //   today:number;
  //   change:number;
  //   data:{
  //     x:Date;
  //     y:number;
  //   }[];
  // }[];
}

// The StockTable is used to show all stock data
export default memo(function StockTable(props:IProps) {

  const { stocks } = props;

  console.log('this is ', stocks);

  return (
    <div>
      <h2>Stocks</h2>
      <div>
        {
          stocks.map((stock) => (
            <Row key={stock.name} stock={stock} />
          ))
        }
      </div>
    </div>
  );
});

// This is a row-data component
function Row(props:IProps) {

  const { stocks } = props;

  return (
    <tr>
      <td>{stock.name}</td>
      <td>{stock.price}</td>
      <td>{stock.change}%</td>
    </tr>
  );
}
