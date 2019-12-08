import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Imports pages
import HomePage from 'containers/Home';
import NotFoundPage from 'containers/NotFound';
import Header from './Header';

// Import Global Styles
import GlobalStyle from './globalStyle';

const Layout = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
    <GlobalStyle />
  </div>
);

export default Layout;
