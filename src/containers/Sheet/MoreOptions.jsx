import React from 'react';
import styled from 'styled-components';
import Label from 'components/Label';
import PropTypes from 'prop-types';
import { colors } from 'root/tailwind';
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

const SelectContainer = styled.div`
  ${tw`relative`}
`;

const Row = styled.div`
  ${tw`flex flex-row`};
  padding: 0.8rem;
`;

const Content = styled.div`
  border-top: 2px solid ${colors.spacer};
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
          <Label>Supprimer un champ :</Label>
          <SelectContainer>
            <Select
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
            </Select>
            <Chevron src={ChevronIcon} />
          </SelectContainer>
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
