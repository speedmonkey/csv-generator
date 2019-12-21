import React from 'react';
import styled from 'styled-components';
import Diamond from 'components/Diamond';

const Container = styled.div`
  ${tw`absolute h-full w-full`};
`;

const Diamonds = () => (
  <Container>
    <Diamond top={31} left={4} />
    <Diamond top={4} left={21} />
    <Diamond top={-1} left={50} />
    <Diamond top={5} left={80} />
    <Diamond top={45} left={95} />
  </Container>
);

export default Diamonds;
