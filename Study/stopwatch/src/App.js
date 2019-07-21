import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stopwatch from './Stopwatch';
import  { SimpleForm } from './SimpleForm';
import { MultiForm } from './MultiForm'
import InchToCm from './InchToCm'
import TestInput from './TestInput'


function App() {
  return (
    <div className='App'>
      <Stopwatch />
      <hr />
      <SimpleForm />
      <hr />
      <MultiForm />
      <hr />
      <InchToCm />
      <hr />
      <TestInput str='Test' num={123} bool={true} />
      <TestInput />
    </div>
  );
}

export default App;
