import React from 'react';
import styled from 'styled-components';
import LogoSVG from 'images/LogoCSV.svg';
import PropTypes from 'prop-types';
import { colors } from 'root/tailwind';
import StepUrl from 'images/Step.svg';
import Button from 'components/Button';
import {
  PRODUCT_STEP,
  SHEET_STEP,
  QUALITY_STEP,
} from 'constants/appConstants';
import history from 'utils/history';

const Content = styled.div`
  ${tw`justify-center flex bg-white`};
`;

const Navigation = styled.div`
  ${tw`p-2 flex items-center shadow-header w-full pr-0`};
  z-index: 1;
  height: 50px;
`;

const Logo = styled.img`
  ${tw`h-6 cursor-pointer`}
`;

const Title = styled.span`
  ${tw`m-3 text-blue font-normal cursor-pointer`};
  font-size: 2.5rem;
`;

const StepContainer = styled.div`
  ${tw`hidden xl:flex pl-3 pr-3 m-auto`}
  margin-top: -0.5rem;
`;

const StepButton = styled(StepContainer)`
  ${tw`flex mt-0 ml-auto`};
`;

const Step = styled.h3`
  ${tw`text-h4 font-light mr-1`}
  font-weight: ${props => props.actualStep && 500};
  color: ${props => props.actualStep && `${colors.blue}`};
`;

const StepIcon = styled.img`
  ${tw`m-auto mr-1`}
  height: 2.2rem;
  padding-top: 0.2rem;
`;

const HeaderView = ({
  actualStep,
  allStep,
  emptyProduct,
}) => (
  <Content>
    <Navigation>
      <Logo
        src={LogoSVG}
        alt="Logo"
        onClick={() => history.push('/')}
      />
      <Title onClick={() => history.push('/')}>
        Générateur de fichiers CSV
      </Title>
      <StepContainer>
        {allStep.map((step, item, array) => (
          <React.Fragment key={step.stepName}>
            <Step actualStep={actualStep.id === step.id}>
              {step.stepName}
            </Step>
            {/* We are checking here the last item of the array and we don't want to show the StepIcon for its */}
            {array.length - 1 !== item && (
              <StepIcon src={StepUrl} />
            )}
          </React.Fragment>
        ))}
      </StepContainer>
      <StepButton>
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
            isDisabled={emptyProduct}
            events={() => {
              if (!emptyProduct) {
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
      </StepButton>
    </Navigation>
  </Content>
);

HeaderView.propTypes = {
  actualStep: PropTypes.object,
  allStep: PropTypes.array,
  emptyProduct: PropTypes.bool,
};

export default HeaderView;
