import React from 'react';
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
  ${tw`flex pl-3 pr-3 ml-auto`};
`;

const StepButton = ({
  actualStep,
  emptyProduct,
  emptySheet,
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
  </Content>
);

StepButton.propTypes = {
  actualStep: PropTypes.object,
  emptyProduct: PropTypes.bool,
  emptySheet: PropTypes.bool,
};

export default StepButton;
