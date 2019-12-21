import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

// Imports pages
import Header from 'containers/Header';
import Recap from 'containers/Recap';
import Product from 'containers/Product';
import Sheet from 'containers/Sheet';
import Quality from 'containers/Quality';
import NotFoundPage from 'containers/NotFound';

// Import Global Styles
import GlobalStyle from './globalStyle';

const BodyContent = styled.div`
  ${tw`h-full w-full`};
`;

const Wrapper = styled.div`
  ${tw`justify-center flex flex-col bg-blueLighter`};
`;

const Container = styled.div`
  ${tw`p-2 flex items-center w-full`};
  max-width: 1380px;
`;

const App = () => (
  <BodyContent>
    <Header />
    <Wrapper>
      <Recap />
      <Container>
        <Switch>
          <Route exact path="/" component={Product} />
          <Route exact path="/sheet" component={Sheet} />
          <Route
            exact
            path="/quality"
            component={Quality}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </Wrapper>
    <GlobalStyle />
  </BodyContent>
);

export default App;
