import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StepUrl from 'images/Step.svg';
import history from 'utils/history';
import { colors } from 'root/tailwind';
import {
  PRODUCT_STEP,
  SHEET_STEP,
  QUALITY_STEP,
} from 'constants/appConstants';

const StepContainer = styled.div`
  ${tw`hidden xl:flex pl-3 pr-3 m-auto`}
  margin-top: -0.5rem;
`;

const Step = styled.h3`
  ${tw`text-h4 font-light mr-1 cursor-pointer`}
  color: ${props => props.actualStep && `${colors.green}`};
  cursor: ${props => props.disableCursor && 'not-allowed'};
`;

const StepIcon = styled.img`
  ${tw`m-auto mr-1`}
  height: 2.2rem;
  padding-top: 0.2rem;
`;

const StepTitle = ({
  actualStep,
  emptySheet,
  emptyProduct,
}) => (
  <StepContainer>
    <>
      <Step
        actualStep={actualStep.id === PRODUCT_STEP.id}
        onClick={() =>
          history.push(`${PRODUCT_STEP.stepLink}`)
        }
      >
        {PRODUCT_STEP.stepName}
      </Step>
      <StepIcon src={StepUrl} />
    </>
    <>
      <Step
        actualStep={actualStep.id === SHEET_STEP.id}
        disableCursor={emptyProduct}
        onClick={() => {
          if (!emptyProduct) {
            history.push(`${SHEET_STEP.stepLink}`);
          }
        }}
      >
        {SHEET_STEP.stepName}
      </Step>
      <StepIcon src={StepUrl} />
    </>
    <>
      <Step
        actualStep={actualStep.id === QUALITY_STEP.id}
        disableCursor={emptySheet || emptyProduct}
        onClick={() => {
          if (!emptySheet && !emptyProduct) {
            history.push(`${QUALITY_STEP.stepLink}`);
          }
        }}
      >
        {QUALITY_STEP.stepName}
      </Step>
    </>
  </StepContainer>
);

StepTitle.propTypes = {
  actualStep: PropTypes.object,
  emptyProduct: PropTypes.bool,
  emptySheet: PropTypes.bool,
};

export default StepTitle;
