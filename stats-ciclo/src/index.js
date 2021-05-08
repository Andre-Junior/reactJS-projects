import React from 'react';
import ReactDOM from 'react-dom';
import ClockClass from './components/clock-class';
import Increment from './components/increment';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ClockClass />
    <Increment />
  </React.StrictMode>,
  document.getElementById('root')
);