
import React, { memo, useState, useCallback, lazy, Suspense } from 'react';

const StockTable = React.lazy(():any => import('./components/StockTable'));
const StockChart = React.lazy(():any => import('./components/StockChart'));

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
  const a = null;

  const [selectedStock, setSelectedStock] = useState(null);
  // Send data from child to parent component by using useCallback
  const callback = useCallback(
    (selectedStock) => {
      setSelectedStock(selectedStock);
    }, [],
  );

  return (
    <Suspense fallback={<div/>}>
      <StockTable
        stocks={stocks}
        onSelect={callback}/>
      {/* Control Modal open and close */}
      {selectedStock && (
        <StockChart
          stock={selectedStock}
          // Pass in the closed function
          onClose={() => setSelectedStock(a)}
        />
      )}
    </Suspense>
  );
});
