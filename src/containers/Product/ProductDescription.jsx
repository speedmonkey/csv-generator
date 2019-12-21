import React from 'react';
import Label from 'components/Label';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexCol = styled.div`
  ${tw`flex flex-col`};
  margin-top: -1rem;
`;

const TextArea = styled.textarea`
  ${tw`mt-1 outline-none`};
  font-size: 1.4rem;
`;

const ProductDescription = ({
  productDescription,
  setProductDescription,
}) => (
  <FlexCol>
    <Label>Description du produit :</Label>
    <TextArea
      placeholder="Saisir la description du produit.."
      onChange={e => setProductDescription(e.target.value)}
      value={productDescription}
      rows={9}
      cols={80}
    />
  </FlexCol>
);

ProductDescription.propTypes = {
  productDescription: PropTypes.string,
  setProductDescription: PropTypes.func,
};

export default ProductDescription;
