import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from 'utils/history';
import configureStore from './initialStore';
import App from './app';

const initialState = {};
const store = configureStore(initialState);
const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  MOUNT_NODE,
);
