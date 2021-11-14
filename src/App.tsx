
import React, { memo, useState } from 'react';

import StockTable from './components/StockTable';
import StockChart from './components/StockChart';
import Modal from './components/Modal';

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
  onClose?:any;
}

export default memo(function App(props:IProps) {

  const { stocks, onClose } = props;

  const [selectedStock, setSelectedStock] = useState(null);

  return (
    <React.Fragment>
      <StockTable
        stocks={stocks}
        onSelect={setSelectedStock}/>
      {selectedStock && (
        <StockChart
          stock={selectedStock}
          // onClose={setSelectedStock(false)}
        />
      )}
    </React.Fragment>
  );
});
