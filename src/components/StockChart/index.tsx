import React, { memo, lazy, Suspense } from 'react';

// Victory is a data visualization library
import {
  VictoryLine,
  VictoryChart,
  VictoryContainer,
  VictoryLabel,
  VictoryAxis,
} from 'victory';

// The moment is a javascript date library
import moment from 'moment';

import Modal from '../Modal/index';

interface IProps {
  stock:{
    name:string;
    today:number;
    change:number;
    data:{
      x:Date;
      y:number;
    }[];
  };
  onClose:Function;
}

export default memo(function StockChart(props:IProps) {

  const { stock, onClose } = props;

  // Return object's value
  const [first, ...rest] = Object.values(stock.data);
  const [last] = rest.reverse();
  const up = last.y >= first.y;
  const { width, height } = getDimentions();

  return (
    <Modal onClose={onClose}>
      <VictoryChart
        // Chart layout
        domain={{ y: [80, 220] }}
        height={height}
        width={width}
        containerComponent={<VictoryContainer responsive={false} />}
      >
        <VictoryLabel
          // Chart title
          text={stock.name}
          x={width / 2}
          y={30}
          textAnchor='middle'
          style={{ fontSize: '18px', fontWeight: 'bold' }}
        />
        <VictoryLine
          // Chart line
          data={stock.data}
          labels={({ datum }) => datum.y}
          x={(d) => moment(d.x).format('MMM D')}
          style={{
            labels: { opacity: 0.75 },
            data: { stroke: up ? 'darkgreen' : 'darkred', strokeWidth: 3 },
          }}
        />
        <VictoryAxis
          style={{
            axis: { stroke: '' },
            tickLabels: { opacity: 0.75, fontSize: '17px' },
          }}
        />
      </VictoryChart>
    </Modal>
  );
});

function getDimentions() {
  // Get the brower viewport dimensions
  const viewportWidth = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0,
  );
  const viewportHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0,
  );

  // Mobile adaptation
  const maxWidth = 600;
  const mobileViewportWidth = 500;
  let width = viewportWidth;
  width *= viewportWidth > mobileViewportWidth ? 0.9 : 1;
  width = Math.round(Math.min(width, maxWidth));

  const maxHeight = viewportWidth * 0.95;
  let height = width / 1.62;
  height = Math.round(Math.min(height, maxHeight));

  return { width, height };
}
