import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/forms';
import InputsForm from './components/inputs';
import SelectForm from './components/select';
import TextArea from './components/textarea';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Form />
    <TextArea />
    <SelectForm />
    <InputsForm />
  </React.StrictMode>,
  document.getElementById('root')
);