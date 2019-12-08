import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

const Flex = styled.div`
  ${tw`flex flex-col`}
`;

const Row = styled.div`
  ${tw`flex flex-row`}
`;

const Button = styled.button`
  ${tw`h-5 w-10 bg-blue text-white 
    mr-2 rounded-def`}
  font-size: 20px;
`;

const HomeView = ({ counter, increment, decrement }) => (
  <Flex>
    <FormattedMessage
      id="nav.test"
      defaultMessage="HELLO"
    />
    <p>Vous avez compter {counter} fois !</p>
    <Row>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </Row>
  </Flex>
);

HomeView.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

export default HomeView;
