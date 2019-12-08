import { createSelector } from 'reselect';

export const productSelector = state => state.product;

export const productCategorySelector = createSelector(
  productSelector,
  product => product.productCategory,
);
