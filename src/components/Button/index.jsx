import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from 'root/tailwind';

const StyledButton = styled.button`
  ${tw`shadow-def bg-blue text-white 
  pl-1 pr-1 rounded-def`};
  font-size: 1.6rem;
  height: ${props =>
    props.height ? `${props.height}rem` : '3.5rem'};
  background: ${props => props.color && `${props.color}`};
  cursor: ${props => props.isDisabled && 'not-allowed'};
  background: ${props =>
    props.isDisabled && `${colors.disabled}`};
`;

const Button = ({
  events,
  value,
  height,
  color,
  isDisabled,
}) => (
  <StyledButton
    onClick={events}
    height={height}
    color={color}
    isDisabled={isDisabled}
  >
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
  height: PropTypes.number,
  color: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
