import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './App';
import { Provider } from 'react-redux';
import dotenv from 'dotenv';

dotenv.config({path: 'src/.env'});




ReactDOM.render(
  // <Provider store={store} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  // </Provider>
  ,
  document.getElementById('root')
);


