import React from 'react';
import Product from 'containers/Product';
import Sheet from 'containers/Sheet';
import styled from 'styled-components';

const FlexContent = styled.div`
  ${tw`flex flex-row`};
`;

const HomeView = () => (
  <div>
    <FlexContent>
      <Product />
      <Sheet />
    </FlexContent>
  </div>
);

export default HomeView;
