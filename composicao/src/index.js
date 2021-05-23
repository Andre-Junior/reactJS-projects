import React from 'react';
import ReactDOM from 'react-dom';
import SignUpDialog from './components/compoClass';
import WelcomeDialog from './components/compoFunc';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <WelcomeDialog />
    <SignUpDialog />
  </React.StrictMode>,
  document.getElementById('root')
);

