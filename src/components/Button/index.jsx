import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  ${tw`shadow-def bg-blue text-white 
  pl-3 pr-3 ml-2 ml-2 rounded-def`};
  font-size: 1.6rem;
  height: 3.5rem;
  background: ${props => props.color && `${props.color}`};
`;

const Button = ({ events, value, color }) => (
  <StyledButton onClick={events} color={color}>
    {value}
  </StyledButton>
);

Button.propTypes = {
  events: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]),
  color: PropTypes.string,
};

export default Button;
