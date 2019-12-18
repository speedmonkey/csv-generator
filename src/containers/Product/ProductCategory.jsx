import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ChevronIcon from 'images/Chevron.svg';
import Select from 'components/Select';
import Label from 'components/Label';

const SelectContainer = styled.div`
  ${tw`relative`}
`;

const Chevron = styled.img`
  ${tw`absolute`};
  right: 5px;
  top: 5px;
`;

const ProductCategory = ({
  productCategory,
  setProductCategory,
  updateSheetOptions,
}) => (
  <>
    <Label>Catégorie du produit :</Label>
    <SelectContainer>
      <Select
        value={productCategory}
        onChange={e => {
          setProductCategory(e.target.value);
          updateSheetOptions(e.target.value);
        }}
      >
        <option value="solitaires">
          Solitaires Diamant
        </option>
        <option value="alliances">Alliances</option>
        <option value="bijoux">Bijoux</option>
        <option value="parures">Parures</option>
      </Select>
      <Chevron src={ChevronIcon} />
    </SelectContainer>
  </>
);

ProductCategory.propTypes = {
  productCategory: PropTypes.string.isRequired,
  setProductCategory: PropTypes.func,
  updateSheetOptions: PropTypes.func,
};

export default ProductCategory;
