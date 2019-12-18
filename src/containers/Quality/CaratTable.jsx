import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Table from 'components/Table';
import { colors } from 'root/tailwind';

const CellInput = styled.input`
  ${tw`p-1`};
  border: 1px solid ${colors.spacerLight};
  border-left: 0px;
  font-size: 1.5rem;
  height: 1.5rem;
  width: 8rem;
`;

/* eslint-disable react/no-array-index-key */
const CaratTable = ({ caratLines }) => (
  <Table>
    {caratLines.map((line, index) => (
      <CellInput
        key={line + index}
        autoComplete="off"
        value={line}
        onChange={() => console.log('mdr')}
      />
    ))}
  </Table>
);

CaratTable.propTypes = {
  caratLines: PropTypes.array,
};

export default CaratTable;
