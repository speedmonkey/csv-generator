import {
  UPDATE_STEP,
  PRODUCT_STEP,
} from 'constants/appConstants';

import produce from 'immer';

const initialState = {
  actualStep: PRODUCT_STEP,
};

/* eslint-disable default-case, no-param-reassign */
const headerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_STEP:
        draft.actualStep = action.newStep;
    }
  });

export default headerReducer;
