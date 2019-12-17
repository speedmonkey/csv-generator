import React from 'react';
import Card from 'components/Card';
import H3 from 'components/H3';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ShowSelectValues from './ShowSelectValues';

const Label = styled.label`
  ${tw`mr-2`};
  margin-top: 0.5rem;
`;

const Row = styled.div`
  ${tw`flex flex-row p-1`};
`;

const SheetView = ({
  optionsSheet,
  updateDefaultValue,
}) => (
  <div>
    <Card>
      <H3>Étape 2 : Fiche technique</H3>
      {optionsSheet.selectValues.map((item, index) => (
        <Row key={item.name}>
          <Label>{item.name}</Label>
          <ShowSelectValues
            selectValues={item.selectValues}
            defaultValue={item.defaulValue}
            optionIndex={index}
            updateDefaultValue={updateDefaultValue}
          />
        </Row>
      ))}
    </Card>
  </div>
);

SheetView.propTypes = {
  optionsSheet: PropTypes.object,
  updateDefaultValue: PropTypes.func,
};

export default SheetView;
