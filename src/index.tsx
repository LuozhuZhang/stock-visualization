// 第三方
import ReactDOM from 'react-dom';

// 本地
import App from './App';
import './index.css';
import { fakeStock } from './utils/fakeData';

const stocks = [
  fakeStock('Apple'),
  fakeStock('Meta'),
  fakeStock('Google'),
  fakeStock('Bitcoin'),
  fakeStock('Tesla'),
];

ReactDOM.render(
  <App stocks={stocks} />,
  document.getElementById('root'),
);
