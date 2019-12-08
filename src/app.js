import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './initialStore';
import Layout from './layout';

const initialState = {};
const store = configureStore(initialState);
const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout />
    </Router>
  </Provider>,
  MOUNT_NODE,
);
