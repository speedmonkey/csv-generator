import { createSelector } from 'reselect';

export const productSelector = state => state.product;

export const productCategorySelector = createSelector(
  productSelector,
  product => product.productCategory,
);

export const productNameSelector = createSelector(
  productSelector,
  product => product.productName,
);

export const productReferenceSelector = createSelector(
  productSelector,
  product => product.productReference,
);
