
import React, { memo, useState } from 'react';

import StockTable from './components/StockTable';

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
}

export default memo(function App(props:IProps) {

  const { stocks } = props;

  // console.log(stocks);

  const [selectedSrock, setSelectedSrock] = useState(null);

  return (
    <div>
      <StockTable stocks={stocks} />
    </div>
  );
});
