import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Table from 'components/Table';
import { colors } from 'root/tailwind';
import NumberFormat from 'react-number-format';

const CellInputNumber = styled(NumberFormat)`
  ${tw`p-1`};
  border: 1px solid ${colors.spacerLight};
  border-left: 0px;
  font-size: 1.5rem;
  height: 1.5rem;
  width: 8rem;
`;

const CellInput = styled.input`
  ${tw`p-1`};
  border: 1px solid ${colors.spacerLight};
  border-left: 0px;
  font-size: 1.5rem;
  height: 1.5rem;
  width: 8rem;
`;

/* eslint-disable react/no-array-index-key */
const CaratTable = ({ caratLines, updateValueTable }) => (
  <Table>
    {caratLines.carats.map((line, index) => (
      <React.Fragment key={index + caratLines.tabNumber}>
        {index === 0 ? (
          <CellInput
            autoComplete="notOn"
            value={line}
            onChange={e =>
              updateValueTable(
                e.target.value,
                caratLines.tabNumber,
                index,
              )
            }
          />
        ) : (
          <CellInputNumber
            autoComplete="weird"
            thousandSeparator={' '}
            suffix=" €"
            value={line}
            onChange={e =>
              updateValueTable(
                e.target.value,
                caratLines.tabNumber,
                index,
              )
            }
          />
        )}
      </React.Fragment>
    ))}
  </Table>
);

CaratTable.propTypes = {
  caratLines: PropTypes.object,
  updateValueTable: PropTypes.func,
};

export default CaratTable;
