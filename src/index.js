import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/reset.css'
import App from './App';
// 模拟请求数据
import './mock/index'

ReactDOM.render(<App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals