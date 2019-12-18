import React from 'react';
import Product from 'containers/Product';
import Sheet from 'containers/Sheet';
import Quality from 'containers/Quality';
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
    <Quality />
  </div>
);

export default HomeView;
