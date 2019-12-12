import React from 'react';
import Select from 'components/Select';
import PropTypes from 'prop-types';

const ShowSelectValues = ({
  selectValues,
  defaultValue,
  optionIndex,
  updateDefaultValue,
}) => (
  <Select
    value={defaultValue}
    onChange={e =>
      updateDefaultValue(e.target.value, optionIndex)
    }
  >
    {selectValues.map(item => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </Select>
);

ShowSelectValues.propTypes = {
  selectValues: PropTypes.array,
  defaultValue: PropTypes.string,
  optionIndex: PropTypes.number,
  updateDefaultValue: PropTypes.func,
};

export default ShowSelectValues;
