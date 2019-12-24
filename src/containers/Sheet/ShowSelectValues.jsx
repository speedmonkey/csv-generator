import React from 'react';
import Select from 'components/Select';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ChevronIcon from 'images/Chevron.svg';
import { SELECT_VALUES } from 'constants/sheetConstants';

const Chevron = styled.img`
  ${tw`absolute hidden md:block`};
  right: 5px;
  top: 5px;
`;

const SelectWrapper = styled.div`
  ${tw`relative`}
`;

const ShowSelectValues = ({
  selectValues,
  defaultValue,
  optionIndex,
  updateDefaultValue,
}) => (
  <SelectWrapper>
    <Select
      value={defaultValue}
      onChange={e =>
        updateDefaultValue(
          e.target.value,
          optionIndex,
          SELECT_VALUES,
        )
      }
    >
      {selectValues.map(item => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </Select>
    <Chevron src={ChevronIcon} />
  </SelectWrapper>
);

ShowSelectValues.propTypes = {
  selectValues: PropTypes.array,
  defaultValue: PropTypes.string,
  optionIndex: PropTypes.number,
  updateDefaultValue: PropTypes.func,
};

export default ShowSelectValues;
