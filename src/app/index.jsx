import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

// Imports pages
import HomePage from 'containers/Home';
import NotFoundPage from 'containers/NotFound';
import Header from 'containers/Header';

// Import Global Styles
import GlobalStyle from './globalStyle';

const BodyContent = styled.div`
  ${tw`h-full w-full`};
`;

const Wrapper = styled.div`
  ${tw`justify-center flex bg-blueLighter`};
`;

const Container = styled.div`
  ${tw`p-2 flex items-center w-full`};
  max-width: 1380px;
`;

const App = () => (
  <BodyContent>
    <Header />
    <Wrapper>
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </Wrapper>
    <GlobalStyle />
  </BodyContent>
);

export default App;
