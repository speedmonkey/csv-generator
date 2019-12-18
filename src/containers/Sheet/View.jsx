import React from 'react';
import Card from 'components/Card';
import H3 from 'components/H3';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/Input';
import { NUMBER_VALUES } from 'constants/sheetConstants';
import Label from 'components/Label';
import ShowSelectValues from './ShowSelectValues';
import MoreOptions from './MoreOptions';

const Row = styled.div`
  ${tw`flex flex-row`};
  padding: 0.8rem;
`;

const SheetInput = styled(Input)`
  ::-webkit-inner-spin-button {
    opacity: 1;
  }
  width: 50px;
`;

const SheetView = ({
  optionsSheet,
  updateDefaultValue,
}) => (
  <div>
    <Card>
      <H3>Étape 2 : Fiche technique</H3>
      <Row>
        <div>
          {optionsSheet.selectValues.map((item, index) => (
            <Row key={item.name}>
              <Label>{item.name} :</Label>
              <ShowSelectValues
                selectValues={item.selectValues}
                defaultValue={item.defaulValue}
                optionIndex={index}
                updateDefaultValue={updateDefaultValue}
              />
            </Row>
          ))}
        </div>
        <div>
          {optionsSheet.numberValues.map((item, index) => (
            <Row key={item.name}>
              <Label>{item.name} :</Label>
              <SheetInput
                type="number"
                step={item.step}
                value={item.defaultValue}
                onChange={e =>
                  updateDefaultValue(
                    e.target.value,
                    index,
                    NUMBER_VALUES,
                  )
                }
              />
            </Row>
          ))}
        </div>
      </Row>
      <MoreOptions optionsSheet={optionsSheet} />
    </Card>
  </div>
);

SheetView.propTypes = {
  optionsSheet: PropTypes.object,
  updateDefaultValue: PropTypes.func,
};

export default SheetView;
