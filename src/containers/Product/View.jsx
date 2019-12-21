import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'root/tailwind';
import H3 from 'components/H3';
import ProductCategory from './ProductCategory';
import ProductName from './ProductName';
import ProductReference from './ProductReference';

const Image = styled.img`
  ${tw`h-middle w-middle m-auto mt-2 mb-2`}
  border: 1px solid ${colors.black};
`;

const Row = styled.div`
  ${tw`flex flex-row pb-1 pl-2 pt-2`};
`;

// Rendering dynamically images
const requireImage = require.context('../../images', true);

const ProductView = ({
  productCategory,
  productName,
  productReference,
  setProductCategory,
  setProductName,
  setProductReference,
  updateSheetOptions,
}) => (
  <div>
    <>
      <H3>Étape 1 : Création du produit</H3>
      <Image
        src={requireImage(`./${productCategory}.jpg`)}
      />
      <Row>
        <ProductName
          productName={productName}
          setProductName={setProductName}
        />
      </Row>
      <Row>
        <ProductCategory
          productCategory={productCategory}
          setProductCategory={setProductCategory}
          updateSheetOptions={updateSheetOptions}
        />
      </Row>
      <Row>
        <ProductReference
          productReference={productReference}
          setProductReference={setProductReference}
        />
      </Row>
    </>
  </div>
);

ProductView.propTypes = {
  productCategory: PropTypes.string,
  productName: PropTypes.string,
  productReference: PropTypes.string,
  setProductCategory: PropTypes.func,
  setProductName: PropTypes.func,
  setProductReference: PropTypes.func,
  updateSheetOptions: PropTypes.func,
};

export default ProductView;
