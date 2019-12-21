import React from 'react';
import styled from 'styled-components';
import LogoSVG from 'images/LogoCSV.svg';
import PropTypes from 'prop-types';
import { colors } from 'root/tailwind';
import StepUrl from 'images/Step.svg';
import Button from 'components/Button';

const Content = styled.div`
  ${tw`justify-center flex bg-white`};
`;

const Navigation = styled.div`
  ${tw`p-2 flex items-center shadow-header w-full pr-0`};
  z-index: 1;
  height: 50px;
`;

const Logo = styled.img`
  ${tw`h-6`}
`;

const Title = styled.span`
  ${tw`m-3 text-blue font-normal`};
  font-size: 2.5rem;
`;

const StepContainer = styled.div`
  ${tw`flex pl-3 pr-3 m-auto`}
  margin-top: -0.5rem;
`;

const StepButton = styled(StepContainer)`
  ${tw`mt-0 ml-auto`};
`;

const Step = styled.h3`
  ${tw`text-h4 font-light mr-1`}
  font-weight: ${props => props.actualStep && 500};
  color: ${props => props.actualStep && `${colors.blue}`};
`;

const StepIcon = styled.img`
  ${tw`h-3 m-auto mr-1`}
  padding-top: 0.2rem;
`;

const HeaderView = ({ actualStep, allStep }) => (
  <Content>
    <Navigation>
      <Logo src={LogoSVG} alt="Logo" />
      <Title>Générateur de fichiers CSV</Title>
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
        <Button
          height={5}
          value="Générer votre fiche produit"
        />
      </StepButton>
    </Navigation>
  </Content>
);

HeaderView.propTypes = {
  actualStep: PropTypes.object,
  allStep: PropTypes.array,
};

export default HeaderView;
