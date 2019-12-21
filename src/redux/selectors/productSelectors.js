import { createSelector } from 'reselect';

export const productSelector = state => state.product;

export const emptyProductSelector = createSelector(
  productSelector,
  product => {
    const emptyInput = input => input === '';
    return Object.values(product).some(emptyInput);
  },
);

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

export const productDescriptionSelector = createSelector(
  productSelector,
  product => product.productDescription,
);
