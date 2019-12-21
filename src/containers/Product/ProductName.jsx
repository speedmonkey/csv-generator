import React from 'react';
import Label from 'components/Label';
import Input from 'components/Input';
import PropTypes from 'prop-types';

const ProductName = ({ productName, setProductName }) => (
  <>
    <Label>Nom du produit :</Label>
    <Input
      placeholder="Alliance Diamant ELLE Or Blanc"
      onChange={e => setProductName(e.target.value)}
      value={productName}
      required
    />
  </>
);

ProductName.propTypes = {
  productName: PropTypes.string,
  setProductName: PropTypes.func,
};

export default ProductName;
