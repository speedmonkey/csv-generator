import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Diamonds from './Diamonds';

const RecapContainer = styled.div`
  ${tw`w-full bg-blueLight relative
  flex justify-center`}
  height: 13rem;
`;

const Recap = styled.div`
  ${tw`absolute bg-body h-10`};
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  width: 85%;
  bottom: 0;
`;

const Title = styled.h3`
  ${tw`text-h3 text-blueDarker m-2 font-normal`};
`;

const Text = styled.p`
  ${tw`ml-2`}
  font-size: 1.7rem;
`;

const ViewRecap = ({ actualStep }) => (
  <RecapContainer>
    <Diamonds />
    <Recap>
      <Title>{actualStep.recapTitle}</Title>
      <Text>{actualStep.recapText}</Text>
    </Recap>
  </RecapContainer>
);

ViewRecap.propTypes = {
  actualStep: PropTypes.object,
};

export default ViewRecap;
