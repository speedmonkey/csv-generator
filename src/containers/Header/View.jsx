import React from 'react';
import styled from 'styled-components';
import LogoSVG from 'images/LogoCSV.svg';
import PropTypes from 'prop-types';
import history from 'utils/history';
import StepButton from './StepButton';
import StepTitle from './StepTitle';

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

const HeaderView = ({
  actualStep,
  emptyProduct,
  emptySheet,
  filledQuality,
  productName,
  csvInformations,
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
      <StepTitle
        actualStep={actualStep}
        emptyProduct={emptyProduct}
        emptySheet={emptySheet}
      />
      <StepButton
        actualStep={actualStep}
        emptyProduct={emptyProduct}
        emptySheet={emptySheet}
        filledQuality={filledQuality}
        productName={productName}
        csvInformations={csvInformations}
      />
    </Navigation>
  </Content>
);

HeaderView.propTypes = {
  actualStep: PropTypes.object,
  emptyProduct: PropTypes.bool,
  emptySheet: PropTypes.bool,
  filledQuality: PropTypes.bool,
  productName: PropTypes.string,
  csvInformations: PropTypes.array,
};

export default HeaderView;
