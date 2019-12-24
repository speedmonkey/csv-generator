import React from 'react';
import { CSVLink } from 'react-csv';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import history from 'utils/history';
import {
  PRODUCT_STEP,
  SHEET_STEP,
  QUALITY_STEP,
} from 'constants/appConstants';
import Button from 'components/Button';

const Content = styled.div`
  ${tw`flex pr-2 ml-auto`};
`;

const CSVButton = styled(CSVLink)`
  ${tw`shadow-def bg-blue text-white 
  rounded-def pl-1 pr-1`};
  font-size: 1.6rem;
  height: 5rem;
  text-decoration: none;
  line-height: 3em;
`;

const StepButton = ({
  actualStep,
  emptyProduct,
  emptySheet,
  filledQuality,
  productName,
  csvInformations,
}) => (
  <Content>
    {actualStep.id === PRODUCT_STEP.id && (
      <Button
        height={5}
        value={actualStep.stepButton}
        isDisabled={emptyProduct}
        events={() => {
          if (!emptyProduct) {
            history.push('sheet');
          }
        }}
      />
    )}
    {actualStep.id === SHEET_STEP.id && (
      <Button
        height={5}
        value={actualStep.stepButton}
        isDisabled={emptySheet}
        events={() => {
          if (!emptySheet) {
            history.push('quality');
          }
        }}
      />
    )}
    {actualStep.id === QUALITY_STEP.id && (
      <>
        {!filledQuality ? (
          <Button
            height={5}
            value={actualStep.stepButton}
            isDisabled={!filledQuality}
          />
        ) : (
          <CSVButton
            data={csvInformations}
            separator=";"
            filename={productName}
          >
            {actualStep.stepButton}
          </CSVButton>
        )}
      </>
    )}
  </Content>
);

StepButton.propTypes = {
  actualStep: PropTypes.object,
  emptyProduct: PropTypes.bool,
  emptySheet: PropTypes.bool,
  filledQuality: PropTypes.bool,
  productName: PropTypes.string,
  csvInformations: PropTypes.array,
};

export default StepButton;
