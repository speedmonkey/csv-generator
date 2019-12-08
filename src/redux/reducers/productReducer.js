import { SET_PRODUCT_CATEGORY } from 'constants/productConstants';

import produce from 'immer';

const initialState = {
  productCategory: 'solitaires',
};

/* eslint-disable default-case, no-param-reassign */
const productReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_PRODUCT_CATEGORY:
        draft.productCategory = action.nameProduct;
        break;
    }
  });

export default productReducer;
