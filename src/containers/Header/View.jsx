import React from 'react';
import styled from 'styled-components';
import LogoSVG from 'images/LogoCSV.svg';
import PropTypes from 'prop-types';
import { colors } from 'root/tailwind';

const Content = styled.div`
  ${tw`justify-center shadow-header flex bg-white`};
`;

const Navigation = styled.div`
  ${tw`p-2 flex items-center w-full`};
  max-width: 1280px;
  height: 50px;
`;

const Logo = styled.img`
  ${tw`h-6`}
`;

const Title = styled.span`
  ${tw`p-3 text-blue font-normal`};
  border-right: 2px solid ${colors.spacer};
  font-size: 2.5rem;
`;

const Text = styled.span`
  ${tw`pl-2`};
`;

const Spacer = styled.div`
  ${tw`p-3`};
  border-right: 2px solid ${colors.spacer};
`;

const Category = styled.span`
  ${tw`text-blue capitalize`}
`;

const Error = styled.span`
  ${tw`ml-1 text-red`}
`;

const Success = styled.span`
  ${tw`ml-1 text-blue`}
`;

const HeaderView = ({ productName, productCategory }) => (
  <Content>
    <Navigation>
      <Logo src={LogoSVG} alt="Logo" />
      <Title>Générateur de fichiers CSV</Title>
      <Spacer>
        <span>
          Catégorie du produit :{' '}
          <Category>{productCategory}</Category>
        </span>
      </Spacer>
      <Text>Nom du produit : </Text>
      {productName === '' && <Error>Non défini</Error>}
      <Success>{productName}</Success>
    </Navigation>
  </Content>
);

HeaderView.propTypes = {
  productName: PropTypes.string,
  productCategory: PropTypes.string,
};

export default HeaderView;
