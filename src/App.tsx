
import React, { memo, useState } from 'react';

import StockTable from './components/StockTable';

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

export default memo(function App(stocks:IState) {

  console.log(stocks);

  const [selectedSrock, setSelectedSrock] = useState(null);

  return (
    <div>
      <StockTable stocks={stocks} />
    </div>
  );
});
