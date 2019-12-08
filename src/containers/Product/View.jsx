import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  ${tw`flex flex-col`};
  height: 400px;
  width: 400px;
`;

const Image = styled.img`
  ${tw`w-full h-full`};
`;

const SelectCategory = styled.select``;

// Rendering dynamically images
const requireImage = require.context('../../images', true);

const ProductView = ({
  productCategory,
  setProductCategory,
}) => (
  <div>
    <p>Selectionnez votre produit [{productCategory}]</p>
    <Container>
      <Image
        src={requireImage(`./${productCategory}.jpg`)}
      />
      <SelectCategory
        value={productCategory}
        onChange={e => setProductCategory(e.target.value)}
      >
        <option value="solitaires">
          Solitaires Diamant
        </option>
        <option value="alliances">Alliances</option>
        <option value="bijoux">Bijoux</option>
        <option value="parures">Parures</option>
      </SelectCategory>
    </Container>
  </div>
);

ProductView.propTypes = {
  productCategory: PropTypes.string.isRequired,
  setProductCategory: PropTypes.func,
};

export default ProductView;
