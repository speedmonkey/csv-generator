import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Select from 'components/Select';
import ChevronIcon from 'images/Chevron.svg';
import Button from 'components/Button';
import {
  allValuesSheetSelector,
  valueToDeleteSelector,
} from 'selectors/sheetSelectors';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  updateValueToDeleteAction,
  deleteInputAction,
} from 'actions/sheetActions';

const SelectWrapper = styled.div`
  ${tw`relative mr-2`}
`;

const SelectInput = styled(Select)`
  width: 200px;
`;

const Row = styled.div`
  ${tw`flex pt-1`};
`;

const Content = styled.div`
  ${tw`pb-2`}
`;

const Chevron = styled.img`
  ${tw`absolute`};
  right: 5px;
  top: 5px;
`;

const MoreOptions = ({
  allValues,
  valueToDelete,
  updateValueToDelete,
  deleteInput,
}) => (
  <Content>
    <Row>
      <div>
        <Row>
          <SelectWrapper>
            <SelectInput
              value={valueToDelete}
              onChange={e =>
                updateValueToDelete(e.target.value)
              }
            >
              {allValues.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </SelectInput>
            <Chevron src={ChevronIcon} />
          </SelectWrapper>
          <Button
            value="Supprimer"
            events={() => deleteInput(valueToDelete)}
            color="#c11e1ef2"
          />
        </Row>
      </div>
    </Row>
  </Content>
);

MoreOptions.propTypes = {
  allValues: PropTypes.array,
  valueToDelete: PropTypes.string,
  updateValueToDelete: PropTypes.func,
  deleteInput: PropTypes.func,
};

const mapStateToProps = state => ({
  allValues: allValuesSheetSelector(state),
  valueToDelete: valueToDeleteSelector(state),
});

const mapDispatchToProps = dispatch => ({
  updateValueToDelete: newValue =>
    dispatch(updateValueToDeleteAction(newValue)),
  deleteInput: inputName =>
    dispatch(deleteInputAction(inputName)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(MoreOptions);
