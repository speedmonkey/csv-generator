import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'root/tailwind';
import Card from 'components/Card';
import Input from 'components/Input';
import Select from 'components/Select';
import H3 from 'components/H3';

const Image = styled.img`
  ${tw`h-middle w-middle m-auto mt-2 mb-2`}
  border: 1px solid ${colors.black};
`;

const Row = styled.div`
  ${tw`flex flex-row pb-1 pl-2 pt-2`};
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
    <Card>
      <H3>Étape 1 : Création du produit</H3>
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
    </Card>
  </div>
);

ProductView.propTypes = {
  productCategory: PropTypes.string.isRequired,
  productName: PropTypes.string,
  setProductCategory: PropTypes.func,
  setProductName: PropTypes.func,
};

export default ProductView;
