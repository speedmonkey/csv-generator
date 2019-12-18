import {
  SET_PRODUCT_CATEGORY,
  SET_PRODUCT_NAME,
  SET_PRODUCT_REFERENCE,
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

export function setProductReferenceAction(
  productReference,
) {
  return {
    type: SET_PRODUCT_REFERENCE,
    productReference,
  };
}
