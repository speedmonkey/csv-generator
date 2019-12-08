import React from 'react';
import styled from 'styled-components';
import LogoSVG from 'images/LogoCSV.svg';

const Content = styled.div`
  ${tw`justify-center shadow-header flex`};
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
  ${tw`m-3 text-blue font-normal`};
  font-size: 2.5rem;
`;

const Header = () => (
  <Content>
    <Navigation>
      <Logo src={LogoSVG} alt="Logo" />
      <Title>Générateur de fichiers CSV</Title>
    </Navigation>
  </Content>
);

export default Header;
