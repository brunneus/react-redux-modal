import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { modalsStore } from './store/modals.store';
import { combineReducers } from 'redux';
import { createStore } from 'redux';

var rootReducer = combineReducers({ modalsStore })
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,  
  document.getElementById('root')
);
