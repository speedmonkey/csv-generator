import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  ${tw`shadow-def bg-blue text-white 
  h-5 pl-3 pr-3 m-auto ml-2 ml-2 
  hover:bg-blueDarker rounded-def`};
  font-size: 1.6rem;
`;

const Button = ({ events, value }) => (
  <StyledButton onClick={events}>{value}</StyledButton>
);

Button.propTypes = {
  events: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default Button;
