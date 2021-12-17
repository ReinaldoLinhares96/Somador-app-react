import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Input from './components/input/Input';
import Sum from './features/sum/Sum';
require('dotenv').config()


const REACT_APP__TITLE = process.env.REACT_APP__TITLE;

ReactDOM.render( 
  <Sum title={REACT_APP__TITLE} />
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
