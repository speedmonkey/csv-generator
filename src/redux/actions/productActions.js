import {
  SET_PRODUCT_CATEGORY,
  SET_PRODUCT_NAME,
} from 'constants/productConstants';

export function setProductCategoryAction(productCategory) {
  return {
    type: SET_PRODUCT_CATEGORY,
    productCategory,
  };
}

export function setProductNameAction(productName) {
  return {
    type: SET_PRODUCT_NAME,
    productName,
  };
}
