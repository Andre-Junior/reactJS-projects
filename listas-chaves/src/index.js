import React from 'react';
import ReactDOM from 'react-dom';
import NumberList from './components/arrayList';
import './index.css';

const numbers = [1, 2, 3, 4, 5]

ReactDOM.render(
  <React.StrictMode>
    <NumberList numbers={numbers}/>
  </React.StrictMode>,
  document.getElementById('root')
);

