import { SET_PRODUCT_CATEGORY } from 'constants/productConstants';

export function setProductCategoryAction(nameProduct) {
  return {
    type: SET_PRODUCT_CATEGORY,
    nameProduct,
  };
}
