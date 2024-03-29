import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "antd/dist/antd.css"
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Providers } from "./comps/redux/store/mreact-redux"
import { Provider } from "react-redux"
// import store from "./comps/router/store"

import store from "./comps/redux-saga/store"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
