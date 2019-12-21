import React from 'react';
import PropTypes from 'prop-types';
import Label from 'components/Label';
import Input from 'components/Input';

const ProductReference = ({
  productReference,
  setProductReference,
}) => (
  <>
    <Label>Référence du produit</Label>
    <Input
      placeholder="MONTRESOREWBWG"
      value={productReference}
      onChange={e => setProductReference(e.target.value)}
      required
    />
  </>
);

ProductReference.propTypes = {
  productReference: PropTypes.string,
  setProductReference: PropTypes.func,
};

export default ProductReference;
