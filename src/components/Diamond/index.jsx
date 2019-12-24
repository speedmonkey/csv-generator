import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DiamondUrl from 'images/Diamond.svg';

const DiamondIcon = styled.img`
  ${tw`absolute hidden md:block`};
  height: 40px;
  width: 40px;
  top: ${props => props.top && `${props.top}%`};
  left: ${props => props.left && `${props.left}%`};
`;

const Diamond = ({ top, left }) => (
  <DiamondIcon src={DiamondUrl} top={top} left={left} />
);

Diamond.propTypes = {
  top: PropTypes.number,
  left: PropTypes.number,
};

export default Diamond;
