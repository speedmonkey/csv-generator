import {
  SET_PRODUCT_CATEGORY,
  SET_PRODUCT_NAME,
  SET_PRODUCT_REFERENCE,
} from 'constants/productConstants';

import produce from 'immer';

const initialState = {
  productCategory: 'solitaires',
  productName: '',
  productReference: '',
};

/* eslint-disable default-case, no-param-reassign */
const productReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_PRODUCT_CATEGORY:
        draft.productCategory = action.productCategory;
        break;
      case SET_PRODUCT_NAME:
        draft.productName = action.productName;
        break;
      case SET_PRODUCT_REFERENCE:
        draft.productReference = action.productReference;
    }
  });

export default productReducer;
