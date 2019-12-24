import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from 'components/Card';
import { PRODUCT_STEP } from 'constants/appConstants';
import ProductCategory from './ProductCategory';
import ProductName from './ProductName';
import ProductReference from './ProductReference';

const FlexContent = styled.div`
  ${tw`flex w-full`};
`;

const Row = styled.div`
  ${tw`flex flex-col md:flex-row pb-1 pt-2`};
`;

const Poster = styled(Card)`
  ${tw`m-auto hidden xl:block`}
`;

const Image = styled.img`
  max-width: 100%;
  height: 420px;
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
  updateStep,
}) => {
  useEffect(() => {
    updateStep(PRODUCT_STEP);
  }, []);

  return (
    <FlexContent>
      <div>
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
      </div>
      <Poster>
        <Image
          src={requireImage(`./${productCategory}.jpg`)}
        />
      </Poster>
    </FlexContent>
  );
};

ProductView.propTypes = {
  productCategory: PropTypes.string,
  productName: PropTypes.string,
  productReference: PropTypes.string,
  setProductCategory: PropTypes.func,
  setProductName: PropTypes.func,
  setProductReference: PropTypes.func,
  updateSheetOptions: PropTypes.func,
  updateStep: PropTypes.func,
};

export default ProductView;
