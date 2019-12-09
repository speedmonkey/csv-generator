import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/Input';
import Select from 'components/Select';

const Container = styled.div`
  ${tw`flex flex-col`};
  height: 500px;
  width: 500px;
`;

const Image = styled.img`
  ${tw`mt-2 mb-2`}
  height: 80%;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Row = styled.div`
  ${tw`flex flex-row pb-2`};
`;

const Label = styled.label`
  ${tw`mr-2`};
  margin-top: 0.5rem;
`;

// Rendering dynamically images
const requireImage = require.context('../../images', true);

const ProductView = ({
  productCategory,
  productName,
  setProductCategory,
  setProductName,
}) => (
  <div>
    <Container>
      <Row>
        <Label>Nom du produit :</Label>
        <Input
          placeholder="Alliance Diamant ELLE Or Blanc"
          onChange={e => setProductName(e.target.value)}
          value={productName}
        />
      </Row>
      <Row>
        <Label>Catégorie du produit :</Label>
        <Select
          value={productCategory}
          onChange={e => setProductCategory(e.target.value)}
        >
          <option value="solitaires">
            Solitaires Diamant
          </option>
          <option value="alliances">Alliances</option>
          <option value="bijoux">Bijoux</option>
          <option value="parures">Parures</option>
        </Select>
      </Row>
      <Image
        src={requireImage(`./${productCategory}.jpg`)}
      />
    </Container>
  </div>
);

ProductView.propTypes = {
  productCategory: PropTypes.string.isRequired,
  productName: PropTypes.string,
  setProductCategory: PropTypes.func,
  setProductName: PropTypes.func,
};

export default ProductView;
